import {db, firebaseConfig} from '../../firebase'

export class AuthService {
    constructor() {
        this.dbURL = firebaseConfig.databaseURL + '/users.json'
    }

    addUser(name, password) {
        //Bad practice to store password as plaintext, but this is just an example
        db
        .ref('/users')
        .push({name: name, pass: password})
    }

    userExists(name, password) {
        return fetch(this.dbURL)
        .then((response) => response.json())
        .then((response) => {
            let keys = Object.keys(response)
            console.log(response);
            for (let k in keys) {
                k = keys[k]
                if (response[k].name == name && response[k].pass == password) {
                    // User exists in db, return whatever you need
                    // User exists in db, return whatever you need
                    // User exists in db, return whatever you need
                    // User exists in db, return whatever you need
                    // User exists in db, return whatever you need
                    console.log('Valid')
                }
            }
        })
    }
    
}