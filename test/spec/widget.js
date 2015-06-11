describe("photonui.Widget", function() {

    beforeEach(function() {
        this.c = new DummyContainer();
        this.w = new DummyWidget();
    });

    afterEach(function() {
        this.c.destroy();
        this.w.destroy();
    });

    it("can be unparented", function() {
        this.c.child = this.w;
        this.w.unparent();

        expect(this.c.child).toBeNull();
        expect(this.c.childName).toBeNull();
        expect(this.c.containerNode.childNodes.length).toEqual(0);
    });

    it("is unparented when it is destroyed", function() {
        this.c.child = this.w;
        this.w.destroy();

        expect(this.c.child).toBeNull();
        expect(this.c.childName).toBeNull();
        expect(this.c.containerNode.childNodes.length).toEqual(0);
    });

    it("can be inserted and removed from any html element", function() {
        var div = document.createElement("div");

        photonui.domInsert(this.w, div);
        expect(div.childNodes).toContain(this.w.html);

        this.w.unparent();
        expect(div.childNodes).not.toContain(this.w.html);
    });

});
