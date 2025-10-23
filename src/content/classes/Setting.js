export class Setting
{
    constructor(name, value, type='', ableValues = [], handler) {
        this.name = name;
        this.value = value;
        this.type = type;
        this.ableValues = ableValues;
        this.handler = typeof handler === 'function' ? handler.bind(this) : null;
    }
}