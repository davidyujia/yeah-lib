import { Hello } from '../index';
test('My Greeter', () => {
    expect(Hello('World')).toBe('Hello World!!');
});