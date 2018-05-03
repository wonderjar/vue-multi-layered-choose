# vue-multi-layered-choose

Developing...

A Vue.js component that choose item from a multiple layered structure. eg. Choose a person from an organization structure, or choose a file from a file system

## Installation

```js
npm i --save-dev vue-multi-layered-choose
```

### Browser

Include the script file, then install the component with `Vue.use(VueMultiLayeredChoose);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-multi-layered-choose/vue-multi-layered-choose.min.js"></script>
<script type="text/javascript">
  Vue.use(VueMultiLayeredChoose);
</script>
```

### Module

```js
import VueMultiLayeredChoose from 'vue-multi-layered-choose';
```

Once installed, it can be used in a template as simply as:

```html
<multi-layered-choose></multi-layered-choose>
```

## Usage

### Properties

Prop | Type | Description
------------ | ------------ | -------------
initialPathItems | Array | Initial path items which will be displayed on the top
contentItems | Array | The content items which will be displayed on the body. You need change this after every path change
displayProp | String | The name of the property in path item and content item which is used to display, eg. 'name' of person object
isEnterable | Function | A function to judge whether a item is enterable

### Events
