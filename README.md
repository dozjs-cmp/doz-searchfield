# doz-searchfield
A search field component for DOZ

## Install
```
npm install doz-searchfield --save
```

Live <a href="https://dozjs-cmp.github.io/doz-searchfield/example/index.html">here</a>

## Usage

Globally
```javascript
import Doz from 'doz'
import 'doz-searchfield'

new Doz({
    root: '#app',
    template(h) {
        return h`
            <doz-searchfield></doz-searchfield>
        `
    } 
})
```

Locally
```javascript
import Doz from 'doz'
import DozSearchfield from 'doz-searchfield/lib'

Doz.component('my-wrapper', {
    components: {
        'also-a-custom-name': DozSearchfield
    },
    template(h) {
        return h`
            <also-a-custom-name></also-a-custom-name>
        `
    }
});

new Doz({
    root: '#app',
    template(h) { 
        return h`
            <my-wrapper></my-wrapper>
        `
    } 
})
```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |
| name | | Input name |
| value| | value |
| show-button | false | If true show search button |
| button-label | Search | Search button label |
| placeholder | Search here... | Input placeholder |
| button-class | | CSS button class |
| input-class | | CSS input class |
| input-id | | Input ID |
| show-clear-button | true | Show clear button |
| typeahead | 0 | Chars number to start to searching, if 0 it's disabled |
| force-search | false | Force search event if value is already searched |

## Events

| Name | Args | Description |
| ---- | ------- | ----------- |
| search | value | Triggered when search |
| clear | | Triggered when clear value |

### Example
```javascript
Doz.component('app-wrapper', {
    props: {
        log: ''
    },
    template(h) {
        return h`
            <div>
                <doz-searchfield
                    d:on-search="$onSearch"
                    d:on-clear="$onClear"
                ></doz-searchfield>
                <p><strong>Log:</strong> ${this.props.log}</p>
            </div>
        `
    },

    $onSearch(value) {
        this.props.log = value;
    },

    $onClear() {
        this.props.log = '';
    }
});
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-searchfield/blob/master/CHANGELOG.md">here</a>

## License
DozSearchfield is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>
