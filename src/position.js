import Column from './column';

export default class Position {
    constructor(str) {
        this.str = str;
    }

    static of(str) {
        return new Position(str);
    }

    cell(reference) {
        let regex = new RegExp(/([a-z]+)(\d+)/);

        if (!regex.test(reference)) {
            throw new Error(`${reference} is a invalid cell reference.`);
        }

        let matches = regex.exec(reference);

        return {
            x: Column.toNumber(matches[1]),
            y: parseInt(matches[2])
        }
    }

    toObject() {
        if (!this.str.includes(':')) {
            return {
                start: this.cell(this.str),
                end: this.cell(this.str),
            }
        }

        let parts = this.str.split(':');

        return {
            start: this.cell(parts[0]),
            end: this.cell(parts[1]),
        }
    }
}