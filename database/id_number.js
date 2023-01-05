class Id_Number {
    constructor(value = 0) {
        this.language_id = value;
    }

    get_and_increment() {
        return this.language_id++;
    }
}