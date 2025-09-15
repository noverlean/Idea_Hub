export class Setting
{
    constructor(name, value, ableValues = []) {
        this.name = name;
        this.value = value;
        this.ableValues = ableValues;
    }
}