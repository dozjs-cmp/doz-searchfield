import './style.css'

export default {

    props: {
        name: 'DOZ'
    },

    template() {
        return `
            <div>
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