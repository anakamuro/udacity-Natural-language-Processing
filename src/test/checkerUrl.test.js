import { checkerUrl } from "../client/js/checkerUrl";

describe("Test: 'checkerUrl()'", () => {
    test('Should be defined', () => {
        expect(checkerUrl).toBeDefined();
    });


    test("it returns true when valid urls are entered", () => {
        const urls = [
            "https://example.com",
            "http://example.com",
            "example.com",
            "example.com/path",
            "https://www.example.com",
            "www.example.com"
        ];

        urls.forEach(url => {
            expect(checkerUrl(url)).toBeTruthy;
        });
    });

    test('It should be return false if invalid URL is passed into it', () => {
        expect(checkerUrl("google.")).toBeFalsy();
    });
});