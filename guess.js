var fs = require('fs'),
    __ = require('lodash'),
    synaptic = require('synaptic'),
    Converter = require('csvtojson').Converter,
    JSONparse = require('./arrayParse');

var net = synaptic.Network.fromJSON(JSON.parse(fs.readFileSync('./Network_Jsons/14_7_1__.json'))), converter = new Converter({}), testAr = [];

converter.on('end_parsed', function(JSONarray){
    testAr = JSONparse.parseStats(JSONarray, true);
});

converter.fromFile("./2016.csv", function(err, result){

});

setTimeout(function(){
    testAr.forEach(function(year){
        if(net.activate(year.input) >= 1){
            console.log(year.output)
        }
    });
}, 2000);
