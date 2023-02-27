
class View {
    _data;
    
    constructor(data) {
        this._data = data;
    }

    _render(position) {
        this._parentElement.insertAdjacentHTML(position === 'begin'? 'afterbegin':'beforeend', this._data.markup);
    }

    _printObject() {
        console.log(this);
    }

    removeSelf() {
        this._parentElement.removeChild(this._element);
    }

    // update(data) {
    //     // Data spread with current instance data (Former overwrites)
    //     this._data = {...this._data, ...data};
    // }
}

export default View;