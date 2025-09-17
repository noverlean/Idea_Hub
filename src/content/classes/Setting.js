export class Setting
{
    
    constructor(name, value, switchType='', ableValues = []) {
        this.name = name;
        this.value = value;
        this.switchType = switchType;
        this.ableValues = ableValues;
    }
}