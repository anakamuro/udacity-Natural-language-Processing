import { checkerForName } from '../client/js/nameChecker'


describe('Test, the function "checkerForName()" should exist' , () => {
    test('It should return true', async () => {
        expect(checkerForName).toBeDefined();
    });
});
describe('Test, the function "checkerForName()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof checkerForName).toBe("function");
    });
