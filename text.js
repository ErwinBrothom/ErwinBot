/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var text = {
    getLine : function() {
        return this.getRandomLine().getText();
    },
    lines : [
        Line("Dit is tekst"),
        Line("Dit is ook tekst"),
    ],
    getRandomLine : function() {
        counter = 0, foundLine = null;
        while ( counter < 5 && foundLine === null) {
            randno = Math.floor ( Math.random() * this.lines.length);
            if(this.lines[randno].filterFunc()) {
                foundLine = this.lines[randno];
            }
        }
        if (foundLine == null) {
            foundLine = Line("Sorry, ik sta met mijn mond vol tanden");
        }
        return foundLine;
    }
}

