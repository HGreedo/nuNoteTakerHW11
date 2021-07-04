const util = require('util');
const fs = require('fs');
const bcrypt = require('bcrypt');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class NoteMngr {
    readNotes() {
    return readFileAsync = util.promisify(fs.readFile);    

    }
    writeSingleNote(note) {

        return writeFileAsync =("db/db.json", JSON.stringify(note));

    };

    returnAllNotes(){
        return this.readNotes().then((notes) => {
       let parsedNotes = []; 
        
       try {
            parsedNotes = [].concat(JSON.parse(note));
            
       } catch (err) { 
        parsedNotes = [];
}
return parsedNotes;
});
    };
    
    
    addNote(note) {
    const {title, text} = note;
       
       const newNotes = {title, text, id: bcrypt() };

       return this.returnAllNotes().then((notes) => [...notes, newNotes]).then((returnAllNotes) => this.writeSingleNote(returnAllNotes)).then(() => newNotes)
    }
    removeNote(note) {
        return this.returnAllNotes().then((parsedNotes) => parsedNotes.filter((note) => note.id !== note ))
.then((newNotes) => this.writeSingleNote(newNotes))
    };
    };


module.exports = new NoteMngr();




