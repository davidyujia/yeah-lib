import { yeahLib } from '../index';
test('Padding Binary Test', () => {
    expect(yeahLib.paddingBinary('1', 0).toString()).toBe('1');
});