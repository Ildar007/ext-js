Ext.define('chart.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  items: [
    {
      xtype: 'component',
      html: '<h1> ExtJS Fusion Charts Demo </h1>'
    },
    {
      xtype: 'button',
      text: 'Chart',
      handler: 'onDrawChart'
    },
    {
      xtype: 'button',
      text: 'Spline',
      handler: 'onDrawChart'
    },    
    {
       xtype: "component",
       id: "chartContainer",
       tag: 'div',
       height:500,
       width:600
     },
  ],
  viewModel: {
    stores: {
      chartDataStore: {
        type: 'store',
        id: 'chartData',
        autoLoad: true,
        fields: [
        { name: 'sex', type: 'string',mapping: 'dim.SEX' },
        { name: 'year', type: 'string',mapping: 'dim.YEAR' },
        { name: 'value', type: 'string',mapping: 'Value'}   
    ],        
      proxy: {
        type: 'jsonp',
        url: 'https://apps.who.int/gho/athena/api/GHO/WHOSIS_000001.json?filter=COUNTRY:PAK&profile=simple',
        reader: {
            type: 'json',
            rootProperty: 'fact',
        }}
     }
   }
  },
})
