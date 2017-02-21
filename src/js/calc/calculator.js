
function Calculator (selector, options){
  this.container = $(selector);
  console.log(selector);
  this.form_data = null;
  this.cities = null;
  this.expressTafiffTable = null;
  this.express1200TafiffTable = [3500, 4500, 5500, 6500, 550];
  this.railwayTafiffTable = [[1800, 160], [3000, 300], [2700, 200]];
};



Calculator.prototype.attachEvents = function(){
  var self = this;
  this.container.find('.select-from').on('change', function(){ self.checkDeliveryType() });
  this.container.find('.select-to').on('change', function(){ self.checkDeliveryType() });
  this.container.find('.service-type').on('change', function(){  });
  this.container.find('.lift_to_floor').on('change', function(e){ self.switchFloorsInput(e.target) });
  this.container.find('.calculate').on('click', function(e){  e.preventDefault(); self.calculatePrice(); });
};

Calculator.prototype.collectData = function(){
  var weight = +this.container.find('.weight').val().replace(',', '.') * +this.container.find('.units').val()
    , length = this.container.find('.length').val()
    , width = this.container.find('.width').val()
    , height = this.container.find('.height').val()
    , declaredVal = this.container.find('.declared-val').val()
    , fragile = this.container.find('.fragile').prop('checked') ? .5 : 0 // koef 1.5
    , temperature = this.container.find('.temperature').prop('checked') ? .5 : 0 // koef 1.5
    , holidays = this.container.find('.holidays').prop('checked') ? 1 : 0 // koef 2
    , floors = null;

  if( !this.container.find('.floors').prop('disabled') ){
    floors = this.container.find('.floors').val().length>0 ? this.container.find('.floors').val() : 0;
  }

  if( declaredVal.length<1 || declaredVal < 15000 ){
    declaredVal = 15000;
  }

  this.form_data = {
    weight: weight,
    length: length,
    width: width,
    height: height,
    declared_val: declaredVal,
    fragile: fragile,
    temperature: temperature,
    holidays: holidays,
    floors: floors,
  }
};

Calculator.prototype.checkDeliveryType = function(){
  var _from = this.container.find('.select-from option:selected').val()
    , _to = this.container.find('.select-to option:selected').val()
    , deliveryType = this.container.find('.service-type')
    , calculateBtn = this.container.find('.calculate');

  // Check if both cities selected
  if (
    _from.length == -1 ||
    _to.length == -1 
  ){
    deliveryType.prop('disabled', true);
    calculateBtn.prop('disabled', true);
    return;
  }
  else {
    deliveryType.prop('disabled', false);
    calculateBtn.prop('disabled', false);
  }

  // Check if delivery type avaliable
  if ( this.isAvaliableDelivery('express1200', _from, _to) ){
    deliveryType.find('option').eq(1).prop('disabled', false);
  }
  else {
    deliveryType.find('option').eq(1).prop('disabled', true).prop('selected', false);
    deliveryType.find('option').eq(0).prop('selected', true);
  };

  // Check if delivery type avaliable
  if ( this.isAvaliableDelivery('railway', _from, _to) ){
    deliveryType.find('option').eq(2).prop('disabled', false);
  }
  else {
    deliveryType.find('option').eq(2).prop('disabled', true).prop('selected', false);
    deliveryType.find('option').eq(0).prop('selected', true);
  };

};

Calculator.prototype.isAvaliableDelivery = function (type, from, to){
  var _i = 0
    , list = []
    , length
    , fromAvaliable = false
    , toAvaliable = false;

  this.cities[type].forEach(function(elem){
    list = [].concat(list, elem);
  });

  length = list.length;
  for( ; _i<length ; _i++ ){
    if(
      list[_i].indexOf(from) !== -1
    ){
      fromAvaliable = true;
    }
    if(
      list[_i].indexOf(to) !== -1
    ){
      toAvaliable = true;
    }
    if( fromAvaliable && toAvaliable ){
      return true;
    }
  }
  return false;
};


Calculator.prototype.calcZoneOfCities = function(from, to){
  var curType = this.container.find('.service-type option:selected').val()-1
    , types = ['express', 'express1200', 'railway']
    , zoneFrom = 0
    , zoneTo = 0;

  // Check if city is in one of predefined zones
  this.cities[types[curType]].forEach(function(elem, index){
   if( elem.indexOf(from) !== -1 ){
     zoneFrom = index+1;
   }
   if( elem.indexOf(to) !== -1 ){
     zoneTo = index+1;
   }
  });

  // Define zone "4" for "express"
  zoneFrom = zoneFrom < 1 ? 4 : zoneFrom;
  zoneTo = zoneTo < 1 ? 4 : zoneTo;

  //console.log([zoneFrom, zoneTo]);
  return [zoneFrom, zoneTo];
};

Calculator.prototype.getTariffZone = function(curType){
  var _from = this.container.find('.select-from option:selected').val()
    , _to = this.container.find('.select-to option:selected').val()
    , _zonesPair = JSON.stringify(this.calcZoneOfCities(_from, _to))
    , _zone = 0;

  console.log(_zonesPair);
  // "express"
  if(curType == 1){
    switch (_zonesPair){
      case "[1,1]":
        _zone = 1;
        break;
      case "[1,2]":
      case "[2,1]":
      case "[2,2]":
      case "[2,3]": // ?
      case "[2,4]": // ?
        _zone = 2;
        break;
      case "[1,3]":
      case "[3,1]":
      case "[3,3]":
      case "[3,2]": // ?
      case "[3,4]": // ?
        _zone = 3;
        break;
      case "[1,4]":
      case "[4,1]":
      case "[4,4]":
      case "[4,2]": // ?
      case "[4,3]": // ?
        _zone = 4;
        break;
      default:
        throw new Error('tariff zone not defined!');
    };
  }

  // railway
  if(curType == 3){
    switch (_zonesPair){
      case "[1,1]":
      case "[1,3]":
        _zone = 1;
        break;

      case "[1,2]":
      case "[2,1]":
      case "[2,2]":
      case "[2,3]":
      case "[3,2]":
        _zone = 2;
        break;

      case "[3,1]":
      case "[3,3]":
        _zone = 3;
        break;

      default:
        throw new Error('tariff zone not defined!');
    };
  }

  console.log(_zone);
  return _zone;
};


Calculator.prototype.calcWeightRangeExpress = function(weight){ // takes in gramms
  if( weight < 2501 ){
    if( weight < 1001 ){
      if( weight < 501 ){
        if( weight < 301 ){
          return 1; // до 300 гр.
        }
        else {
          return 2; // от 301 до 500 гр.
        }
      }
      else {
        return 3; // от 501 до 1000 гр.
      }
    }
    else{
      if( weight < 2001 ){
        if( weight < 1501 ){
          return 4; // от 1001 до 1500 гр.
        }
        else{
          return 5; // от 1501 до 2000 гр.
        }
      }
      else{
        return 6; // от 2001 до 2500 гр.
      }
    }
  }
  else {
    if( weight < 4001 ){
      if( weight < 3501 ){
        if( weight < 3001 ){
          return 7; // от 2501 до 3000 гр.
        }
        else {
          return 8; // от 3001 до 3500 гр.
        }
      }
      else {
        return 9; // от 3501 до 4000 гр.
      }
    }
    else{
      if( weight < 5001 ){
        if( weight < 4501 ){
          return 10; // от 4001 до 4500 гр.
        }
        else{
          return 11; // от 4501 до 5000 гр.
        }
      }
      else{
        return 12; // + 1000 гр.
      }
    }
  }
};

Calculator.prototype.calcWeightRangeExpress1200 = function(weight){ // takes in gramms
  if( weight < 1501 ){
    if( weight < 1001 ){
      if( weight < 501 ){
        return 1; // до 500 гр.
      }
      else {
        return 2; // от 501 до 1000 гр.
      }
    }
    else {
      return 3; // от 1001 до 1500 гр.
    }
  }
  else {
    if( weight < 2001 ){
      return 4; // от 1501 до 2000 гр.
    }
    else {
      return 5; // + 500 гр.
    }
  }
};

Calculator.prototype.calcWeightRangeRailway = function(weight){  // takes in gramms
  return weight < 10000 ? 1 : 2;
};

Calculator.prototype.expressBaseTariff = function(weight, zone){
  var range = this.calcWeightRangeExpress(weight)
    , rangeIndex = range - 1
    , zoneRangesList = this.expressTafiffTable[zone-1];
  if( weight <= 5000 ){
    return zoneRangesList[rangeIndex];
  }
  else {
    return zoneRangesList[rangeIndex-1] + zoneRangesList[rangeIndex] * ((weight - 5000) / 1000);
  }
};

Calculator.prototype.express1200BaseTariff = function(weight){
  var range = this.calcWeightRangeExpress1200(weight)
    , rangeIndex = range - 1
    , zoneRangesList = this.express1200TafiffTable;
  if( weight <= 2000 ){
    return zoneRangesList[rangeIndex];
  }
  else {
    return zoneRangesList[rangeIndex-1] + zoneRangesList[rangeIndex] * ((weight - 2000) / 500);
  }
};

Calculator.prototype.railwayBaseTariff = function(weight, zone){
  var range = this.calcWeightRangeRailway(weight)
    , rangeIndex = range - 1
    , zoneRangesList = this.railwayTafiffTable[zone-1];
  if( weight <= 10000 ){
    return zoneRangesList[rangeIndex];
  }
  else {
    console.log(zoneRangesList[rangeIndex-1] + zoneRangesList[rangeIndex] * ((weight - 10000) / 1000));
    return zoneRangesList[rangeIndex-1] + zoneRangesList[rangeIndex] * ((weight - 10000) / 1000);
  }
};

Calculator.prototype.calcActualWeight = function(){
  var volumeWeight = Math.ceil((this.form_data.length * this.form_data.width * this.form_data.height) / 6000) * 1000; // gramms

  return volumeWeight > this.form_data.weight ? volumeWeight : this.form_data.weight;
};

Calculator.prototype.railMultiplicator = function(){
  console.log(this.form_data.weight > 180000);
  console.log(this.form_data.height > 80);
  console.log();
  switch (true) {
    case this.form_data.weight > 180000 && this.form_data.length > 180:
    case this.form_data.weight > 180000 && this.form_data.width > 130:
    case this.form_data.weight > 180000 && this.form_data.height > 80:
      return 1.5;

    default:
      return 1;
  }
};



Calculator.prototype.applyMultiplicators = function(base){
  var ensureTax
    , liftToFloor
    , result;

  ensureTax = this.form_data.declared_val * .01;

  liftToFloor = this.form_data.floors * 500;

  result = base + ensureTax + liftToFloor + base * this.form_data.fragile + base * this.form_data.temperature + base * this.form_data.holidays;

  return result;
}



Calculator.prototype.switchFloorsInput = function(input){
  var flag = !input.checked ? true : false;

  this.container.find('.floors').prop('disabled', flag);
}


Calculator.prototype.fetchData = function(url, callback){
  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(res){
      callback(res);
    },
})
};

Calculator.prototype.runSelect2 = function(options){

  console.log(this.container.length); 
  this.container.find('.select2').each(function(){
    $(this).append(options).select2({
      language: "ru",
      maximumSelectionLength: 2,
      tags: true
    });
  });
};

Calculator.prototype.processOptions = function(cities){
  this.cities = cities; // Seve array of "cities with parameters"

  // Create options list
  var _optionsList = '<option></option>'
    , allCities = [].concat( cities['express'][0], cities['express'][1], cities['express'][2] )
    , i = 0
    , _length = allCities.length;

  for( ; i < _length; i++){
    _optionsList+= '<option value="'+allCities[i]+'">'+allCities[i]+'</option>';
  }
  // console.log(_optionsList);      
  this.runSelect2(_optionsList);
};

Calculator.prototype.calculatePrice = function(){
  var deliveryType = parseInt(this.container.find('.service-type option:selected').val())
    , baseTariff = null;

  this.collectData();
  console.log(deliveryType);

  switch (deliveryType){
    case 1: // "express"
      baseTariff = this.expressBaseTariff(
        this.calcActualWeight(),
        this.getTariffZone(deliveryType)
      );
      break;

    case 2: // "express1200"
      baseTariff = this.express1200BaseTariff(
        this.calcActualWeight()
      );
      break;

    case 3: // "railway"
      baseTariff = this.railwayBaseTariff(
          this.form_data.weight,
          this.getTariffZone(deliveryType)
        ) * this.railMultiplicator();
      break;

    default:
      throw new Error("Delivery type not found");
  };

  console.log(this.form_data.weight);
  console.log(baseTariff);
  var endResult = this.applyMultiplicators(baseTariff);
  // this.container.find('.result').html(baseTariff + 'тг  :::  ' + endResult + 'тг');
  this.container.find('.result').html(endResult + 'тг');
};

Calculator.prototype.init = function(){
  var self = this;
  console.log(window.cities);
  this.processOptions(window.cities);
  this.expressTafiffTable = window.expressTariffs;
  //this.fetchData('/cities', this.processOptions.bind(this));
  //this.fetchData('/express-tariffs', function(data){ self.expressTafiffTable = data; });
  this.attachEvents();
};


$( document ).ready(function() {
  console.log($('#calcApp').length + "asd");
  var calculator = new Calculator('#calcApp', {});
  calculator.init();
});
// $(function(){



// });

