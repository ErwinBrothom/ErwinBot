/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var text = {
    getLine : function() {
        return this.lines[0].getText();
    },
    lines : [
        Line("Dit is tekst"),
        Line("Dit is ook tekst"),
    ]
}

