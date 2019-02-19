
console.log("Hello from main.js");

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices',{role:'style'});
    data.addRows([
        ['Potatos', 3],
        ['Tomatoes', 80],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
        'title':'How Much Pizza I Ate Last Night',
        'width':400,
        'height':300,
        textStyle:{
            fontSize:80,
            italic:true
        }
    };

    //DEFINIMOS TIPO DE GRAFICO.
    type_chart_grafic = "Combo";
    // Instantiate and draw our chart, passing in some options.
    // PINTAMOS GRAFICO
    // PASAMOS, DATA, OPTION, TYPE GRAFIC
    type_chart_grafic += "Chart";
    dibujar(data,options);
}
function dibujar(data,options){
    chart=new google.visualization[type_chart_grafic](document.getElementById('chart_pie'));
    chart.draw(data, options);
}






console.log("Fin main.js");