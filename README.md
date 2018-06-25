# doz-searchfield
A search field component for DOZ

## Install
```
npm install doz-searchfield
```

## Usage

Globally
```javascript
import Doz from 'doz'
import 'doz-searchfield'

new Doz({
    root: '#app',
    template: `
        <doz-searchfield></doz-searchfield>
    `
})
```

Locally
```javascript
import Doz from 'doz'
import DozSearchfield from 'doz-searchfield'

Doz.component('my-wrapper', {
    components: {
        'also-a-custom-name': DozSearchfield
    },
    template() {
        return `
            <also-a-custom-name></also-a-custom-name>
        `
    }
});

new Doz({
    root: '#app',
    template: `
        <my-wrapper></my-wrapper>
    `
})
```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |
| name | | Input name |
| value| | value |
| show-button | false | if true show search button |
| button-label | Search | search button label |
| placeholder | Search here... | input placeholder |
| button-class | | css button class |
| input-class | | css input class |
| input-id | | input ID |
| show-clear-button | true | show clear button |

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
    template() {
        return `
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

#### CDN unpkg
```html
<script src="https://unpkg.com/doz-searchfield/dist/bundle.min.js"></script>
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-searchfield/blob/master/CHANGELOG.md">here</a>

## License
DozSearchfield is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>