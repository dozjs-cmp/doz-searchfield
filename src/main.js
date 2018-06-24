import './style.css'

export default {

    props: {
        name: '',
        value: '',
        showButton: false,
        buttonLabel: 'Search',
        placeholder: 'Search here...',
        buttonClass: '',
        inputClass: '',
        inputId: 'search-field-id',
        showClearButton: false,
        _showCross: false
    },

    template() {
        return `
            <input
                placeholder="${this.props.placeholder}"
                class="${this.props.inputClass}"
                type="text"
                name="${this.props.name}"
                value="${this.props.value}"
                oninput="this.$onInput()"
                onkeydown="this.$onKeyDown()"
                d-bind="value"
                id="${this.props.inputId}"
            >
            <button 
                class="${this.props.buttonClass}" 
                style="display: ${this.props._showCross ? 'inline' : 'none'}" 
                onclick="this.$clear()"
            >X</button>
            
            <button 
                class="${this.props.buttonClass}" 
                style="display: ${this.props.showButton ? 'inline' : 'none'}" 
                onclick="this.$search()"
            >${this.props.buttonLabel}</button>
        `
    },

    onCreate() {
        this.props._showCross = this.$canCross();
    },

    $isSearching: false,

    $canCross() {
        return this.props.value.length > 0 && this.props.showClearButton;
    },

    $onInput() {
        this.props._showCross = this.$canCross();
        if (this.props.value.length === 0 && this.$isSearching)
            this.$clear();
    },

    $onKeyDown(e) {
        if (e.keyCode === 13) {
            this.$search();
        }
    },

    $search() {
        this.emit('search', {search: this.props.value});
        this.$isSearching = true;
    },

    $clear() {
        this.props.value = '';
        this.props._showCross = false;
        this.emit('clear', {search: ''});
        this.$isSearching = false;
    }

};