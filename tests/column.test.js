import Column from '../src/column';

test('single letters', () => {
    expect(Column.toNumber('a')).toBe(1);
    expect(Column.toNumber('A')).toBe(1);
    expect(Column.toNumber('z')).toBe(26);
});

test('invalid characters', () => {
    expect(() => {
        Column.toNumber('>');
    }).toThrowError();
});

test('multi letters', () => {
    expect(Column.toNumber('aa')).toBe(27);
    expect(Column.toNumber('AA')).toBe(27);
    expect(Column.toNumber('AH')).toBe(34);
    expect(Column.toNumber('zz')).toBe(702);
    expect(Column.toNumber('aac')).toBe(705);
});