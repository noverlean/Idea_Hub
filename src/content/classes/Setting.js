export class Setting
{
    
    constructor(name, value, type='', ableValues = []) {
        this.name = name;
        this.value = value;
        this.type = type;
        this.ableValues = ableValues;
    }
}