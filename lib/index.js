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
        inputId: '',
        showClearButton: true,
        typeahead: 0
    },

    template() {
        return `
            <input
                placeholder="${this.props.placeholder}"
                class="${this.props.inputClass}"
                type="${this.props.showClearButton ? 'search' : 'text'}"
                name="${this.props.name}"
                value="${this.props.value}"
                oninput="this.$onInput()"
                onkeyup="this.$onKeyUp()"
                d-ref="input"
                d-bind="value"
                id="${this.props.inputId}"
            >
            <button 
                class="${this.props.buttonClass}" 
                style="display: ${this.props.showButton ? 'inline' : 'none'}" 
                onclick="this.$search()"
            >${this.props.buttonLabel}</button>
        `
    },

    onCreate() {
        this.$isSearching = false;
        this.$lastValue = '';
        this.$overTypehead = false;
    },

    $onInput() {
        if (this.props.value.length === 0 && this.$isSearching)
            this.$clear();
        if (this.props.typeahead && this.props.value.length >= this.props.typeahead)
            this.$overTypehead = true;
    },

    $onKeyUp(e) {
        if (e.keyCode === 13
            || (e.keyCode === 8 && this.props.typeahead && this.$overTypehead)
            || (this.props.typeahead && this.props.value.length >= this.props.typeahead)
        ) {
            this.$search();
        }
    },

    $search(value) {
        if (typeof value !== 'undefined') {
            this.$lastValue = null;
            this.props.value = value;
            setTimeout(() => {
                this.ref.input.value = value;
            }, 10)
        }

        if (this.$lastValue === this.props.value) return;
        this.$lastValue = this.props.value;
        this.$isSearching = true;
        this.emit('search', this.props.value);
    },

    $clear() {
        this.props.value = '';
        this.$lastValue = '';
        this.$overTypehead = false;
        this.$isSearching = false;
        this.emit('clear');
    }

};