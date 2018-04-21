import Position from '../src/position';

test('cell position', () => {
   expect(Position.of().cell('a1')).toEqual({
       x: 1, y: 1
   });

    expect(() => {
        Position.of().cell('no')
    }).toThrowError();
});

test('single cell', () => {
    expect(Position.of('a1').toObject()).toEqual({
        start: {
            x: 1,
            y: 1,
        },
        end: {
            x: 1,
            y: 1
        }
    });
});

test('row range', () => {
    expect(Position.of('a1:c1').toObject()).toEqual({
        start: {
            x: 1,
            y: 1,
        },
        end: {
            x: 3,
            y: 1
        }
    });
});

test('column range', () => {
    expect(Position.of('a1:a3').toObject()).toEqual({
        start: {
            x: 1,
            y: 1,
        },
        end: {
            x: 1,
            y: 3
        }
    });
});

test('row & column range', () => {
    expect(Position.of('a1:b3').toObject()).toEqual({
        start: {
            x: 1,
            y: 1,
        },
        end: {
            x: 2,
            y: 3
        }
    });
});