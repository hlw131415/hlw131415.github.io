(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{IsWY:function(t,e,r){"use strict";r.r(e);var a=r("MT78"),o={name:"billChart",data:function(){return{myChart:null,interval:null}},props:{chartData:{default:{},type:Object}},watch:{chartData:function(t){this.initChart()}},methods:{toolTipAnima:function(t){this.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t})},initChart:function(){var t=this;this.myChart&&this.myChart.dispose&&this.myChart.dispose();var e=this.copySimple(this.chartData),r=this.$refs.billChart;this.myChart=a.b(r);e.color=["rgb(40, 103, 255)","rgb(255, 15, 6)","#00DDFF","#37A2FF"].slice(0,e.series.length);e.LinearGradient=[[{offset:0,color:"rgba(42, 77, 238, 0.6)"},{offset:1,color:"rgba(133, 213, 255, 0.04)"}],[{offset:0,color:"rgba(255, 6, 39, 0.6)"},{offset:1,color:"rgba(255, 88, 0, 0.04)"}],[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}],[{offset:0,color:"rgb(55, 162, 255)"},{offset:1,color:"rgb(116, 21, 219)"}]].slice(0,e.series.length);var o=void 0;o={color:e.color,tooltip:{trigger:"axis",axisPointer:{label:{backgroundColor:"#6a7985"}}},legend:{icon:"circle",padding:[2,0],textStyle:{fontSize:12,color:"rgb(96, 107, 128)"},data:e.legend},grid:{left:"1%",right:"1%",bottom:"1%",top:32,containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:e.xArr}],yAxis:[{type:"value",name:e.yName}]};var i=[];e.series.forEach((function(t,r){var o={name:t.name,data:t.data,type:"line",smooth:!0,lineStyle:{width:2,color:e.color[r]},showSymbol:!1,areaStyle:{color:new a.a.LinearGradient(0,0,0,1,e.LinearGradient[r])}};i.push(o)})),o.series=i,o&&this.myChart.setOption(o);var n=0,l=o.series[0].data.length;this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){t.toolTipAnima(n),n<l?n++:n=0}),4e3)}},mounted:function(){}},i=r("KHd+"),n=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"billChart"})}),[],!1,null,"942ea624",null);e.default=n.exports}}]);