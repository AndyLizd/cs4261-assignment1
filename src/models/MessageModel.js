import {db} from '../../firebase'

export class MessageModel {
    constructor(msg) {
        this.msg = msg
    }

    toJSON() {
        let ts = Date.now();
        return {
            timestamp: ts,
            text: this.msg
        }
    }

    saveToFirebase() {
        db
        .ref('/messages')
        .push(this.toJSON(this.msg))
    }
}