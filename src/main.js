import './style.css'

export default {

    props: {
        name: 'DOZ'
    },

    template() {
        return `
            <div class="my-component">
                hello ${this.props.name}
            </div>
        `
    },

    onCreate() {

    },

    onMount() {

    },

    onUpdate() {

    },

    onDestroy() {

    }

};