var aHouseValues = new Array(
"Все сектора,1,2,3,4,4А,4Б,5,6,7A,7Б,8,9",
"Сыры-Арка, ЦУМ, Мега, Дипломат, Керуен, Олимп-Палас, Республика, Валиханова, Абая, Евразия, Гульжан, Фьюжин, 13 Магистраль, Пирамида, Достар"
);
var aHouse2Values = new Array(
"Все сектора,1,2,3,4,4А,4Б,5,6,7A,7Б,8,9",
"Сыры-Арка, ЦУМ, Мега, Дипломат, Керуен, Олимп-Палас, Республика, Валиханова, Абая, Евразия, Гульжан, Фьюжин, 13 Магистраль, Пирамида, Достар"
);

function getHouseValuesByStreet(index){
    var sHouseValues = aHouseValues[index];
    return sHouseValues.split(",");
}
function getHouse2ValuesByStreet2(index){
    var sHouse2Values = aHouse2Values[index];
    return sHouse2Values.split(",");
}
function MkHouseValues(index){
    var aCurrHouseValues = getHouseValuesByStreet(index);
    var nCurrHouseValuesCnt = aCurrHouseValues.length;
    var oHouseList = document.forms["address"].elements["house"];
    var oHouseListOptionsCnt = oHouseList.options.length;
    oHouseList.length = 0;
    for (i = 0; i < nCurrHouseValuesCnt; i++){
        if (document.createElement){
            var newHouseListOption = document.createElement("OPTION");
            newHouseListOption.text = aCurrHouseValues[i];
            newHouseListOption.value = aCurrHouseValues[i];
            (oHouseList.options.add) ? oHouseList.options.add(newHouseListOption) : oHouseList.add(newHouseListOption, null);
        }else{
            oHouseList.options[i] = new Option(aCurrHouseValues[i], aCurrHouseValues[i], false, false);
        }
    }
}

function MkHouse2Values(index){
    var aCurrHouse2Values = getHouse2ValuesByStreet2(index);
    var nCurrHouse2ValuesCnt = aCurrHouse2Values.length;
    var oHouse2List = document.forms["address2"].elements["house2[]"];
    var oHouse2ListOptionsCnt = oHouse2List.options.length;
    oHouse2List.length = 0;
    for (i = 0; i < nCurrHouse2ValuesCnt; i++){
        if (document.createElement){
            var newHouse2ListOption = document.createElement("OPTION");
            newHouse2ListOption.text = aCurrHouse2Values[i];
            newHouse2ListOption.value = aCurrHouse2Values[i];
            (oHouse2List.options.add) ? oHouse2List.options.add(newHouse2ListOption) : oHouse2List.add(newHouse2ListOption, null);
        }else{
            oHouse2List.options[i] = new Option(aCurrHouse2Values[i], aCurrHouse2Values[i], false, false);
        }
    }
}
MkHouseValues(document.forms["address"].elements["street"].selectedIndex);
MkHouse2Values(document.forms["address"].elements["street"].selectedIndex);
//-->
