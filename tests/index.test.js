import {Column, Position} from '../index';

test('index exports', () => {
   expect(new Column()).toBeInstanceOf(Column);
   expect(new Position()).toBeInstanceOf(Position);
});