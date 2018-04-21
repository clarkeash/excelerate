export default class Column {
    static toIndex(letter) {
        const alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];

        let index = alphabet.indexOf(letter.toLowerCase());

        if (index === -1) {
            throw new Error(`${letter} is an invalid letter.`);
        }

        return index + 1;
    }

    static toNumber(str) {
        let letters = str.split('');

        let numbers = letters.reverse().map((letter, index) => {
            return this.toIndex(letter) * Math.pow(26, index);
        });

        return numbers.reduce((a, b) => a + b);
    }
}