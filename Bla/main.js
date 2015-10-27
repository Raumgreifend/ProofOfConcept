
var selectionCity, selectionCine; //Temp-Variable für HTML-ID des jeweiligen Selection-Elementes
var selectionValue; //Value der Selection der Stadt
var selectionCineValue; //Value der Selection der Stadt
var selectCityClicked = 0; //Wie oft wurde City-Selection angeklickt? -> 2 mal = ein richtiger Durchlauf
var selectCineClicked = 0; //Wie oft wurde Cine-Selection angeklickt? -> 2 mal = ein richtiger Durchlauf


function init()
{

    jQuery(function($){
        document.addEventListener("DOMContentLoaded", init, false);
        $("#divCine").hide();
        $("#next").hide();
        $("#next").bind("click", function () {
            console.log("goToCinema");
            switch (selectionCineValue) {
                case '1': location.href = 'saalpicker.html'; break; //UCI Düsseldorf wurde ausgewählt
                case '2': alert("Hier kaeme die Page von Hamburg"); break; //Cinemaxx Hamburg-Harburg wurde ausgewählt
                default: alert("Kino auswaehlen, dann weiter klicken!");
            }
        });

    });

    jQuery(function ($) {

        $("#selectCity").bind("click", function () {
            selectCityClicked++;
            if (selectCityClicked == 2)
            {
                $("#divCine").toggle("fade");
                selectionCity = document.getElementById("selectCity");
                selectionValue = selectionCity.options[selectionCity.selectedIndex].value;
                console.log("Selection Value: " + selectionValue);

                $("#selectCine").empty(); //Leeren der Cine-Selection, sonst würden bei umwählen der Stadt immer mehr Kinos auftauchen
                selectCityClicked = 0; 

            }
            //dynamisches Anpassen der Cine-Selection je nach Stadt
            if (selectionValue == 1) //Düsseldorf
            {
                $('#selectCine').append($('<option>', {
                    id: 'defaultOption',
                    value: 0,
                    text: ''
                }));

                $('#selectCine').append($('<option>', {
                    value: 1,
                    text: 'UCI Medienhafen'
                }));



            }
            else if (selectionValue == 2) //Hamburg
            {
                $('#selectCine').append($('<option>', {
                    id: 'defaultOption',
                    value: 0,
                    text: ''
                }));

                $('#selectCine').append($('<option>', {
                    value: 2,
                    text: 'Cinemaxx Hamburg-Harburg'
                }));


            }
        });
    });


    jQuery(function ($) {

        $("#selectCine").bind("click", function () {
            selectCineClicked++;
            if (selectCineClicked == 2) {
                $("#next").toggle("fade");
                selectionCine = document.getElementById("selectCine");
                selectionCineValue = selectionCine.options[selectionCine.selectedIndex].value;
                console.log("selectCineValue:" + selectionCineValue);
                selectCineClicked = 0;
                console.log("selectionCine zurückgesetzt: " + selectCineClicked);

            }
            
        });
    });
    

    
    

};

init();