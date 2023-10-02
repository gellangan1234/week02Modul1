console.log("------ Inheritance ------");

class Gadget {
    constructor(name) {
        this.name = name;
    }

    present() {
        return "Saya Punya Hp merknya " + this.name;
    }
}

class Handphone extends Gadget {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ", tipenya adalah " + this.model;
    }
}

let handphone = new Handphone("XIAOMI", "POCO F4");

console.log(handphone.show());
