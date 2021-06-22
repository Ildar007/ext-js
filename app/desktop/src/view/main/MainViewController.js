Ext.define('chart.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
 

  onDrawChart: function (button) {  
    var store = Ext.data.StoreManager.lookup('chartData');
    var items = store.data.items;
    var category=[];
    var dataM = [];
    var dataF = [];
    var both = [];
    var year = 0;

    //create category data as well as male, female and both sexes data
    for (var i=0;i<items.length;++i)
    {
        var sex = items[i].data.sex;
        var val = items[i].data.value;
        if (items[i].data.year>year)
        {
            year = items[i].data.year;
            category.push({label:year});
        }
        if (sex=="Male")
            dataM.push({value:val});
        else if (sex=="Female")
            dataF.push({value:val});
        else 
            both.push({value:val});
    }
    //create the dataset JSON
    var dataset = [{seriesname:"Male",data:dataM},
                   {seriesname:"Female",data:dataF},
                   {seriesname:"Both sexes",data:both}];
    //create dataSource
    var dataSource = {
        chart: {
        caption: "Pakistan: Life Expectancy at Birth in Years",
        subcaption: "Source: Global Health Observatory Resources",
        "yAxisName": "Life Expectancy",
        "xAxisName": "Year",
        theme: "fusion",
       },
       categories: [{category:category}],dataset};

    var chartType = "msspline";
    if (button.getText() == "Chart")
        chartType = "mscolumn2d";   
    //render chart   
    FusionCharts.ready(function() {
       var myChart = new FusionCharts({
        type: chartType,
        renderAt: "chartContainer",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource
     }).render();
    });  

  
  
  }
}) 

