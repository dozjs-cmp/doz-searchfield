import cmp from './lib'

// expose component to global scope
if (typeof Doz !== 'undefined') {
    Doz.component('doz-searchfield', cmp)
}

export default cmp