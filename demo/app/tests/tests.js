var NsVideoPlayer = require("nativescript-ns-video-player").NsVideoPlayer;
var nsVideoPlayer = new NsVideoPlayer();

describe("greet function", function() {
    it("exists", function() {
        expect(nsVideoPlayer.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nsVideoPlayer.greet()).toEqual("Hello, NS");
    });
});