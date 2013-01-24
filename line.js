/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var Line = function(params) {
   
    if (typeof params == 'string' || params instanceof String) {
        //Params was found to be a string, turn into object with text param
        params = {
            text : params
        }
    }
    
    var output = {}
    output.getText = function() {
            return this.text;
        }
    output.text = params.text;
    
    if (isUndefined(params.filterFunc)) {
        output.filterFunc = function() {
            return true;
        }
    } else {
        output.filterFunc = params.filterFunc;
    }
    
    return output;
}


var isUndefined = function(obj) {
    return (typeof obj === "undefined") 
}