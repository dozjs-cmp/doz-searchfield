import cmp from './src/main'

// expose component to global scope
if (typeof window !== 'undefined' && window.Doz) {
    Doz.component('your-component-tag', cmp)
}

export default cmp