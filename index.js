import cmp from './src/main'

// expose component to global scope
if (typeof window !== 'undefined' && window.Doz) {
    Doz.component('doz-searchfield', cmp)
}

export default cmp