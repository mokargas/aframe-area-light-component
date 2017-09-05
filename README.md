## aframe-area-light-component

[![Version](http://img.shields.io/npm/v/aframe-area-light-component.svg?style=flat-square)](https://npmjs.org/package/aframe-area-light-component)
[![License](http://img.shields.io/npm/l/aframe-area-light-component.svg?style=flat-square)](https://npmjs.org/package/aframe-area-light-component)

Add Area Lights to an A-Frame entity. Uses THREE.RectAreaLight at the core.

For [A-Frame](https://aframe.io).

### Examples

* [Basic](https://mokargas.github.io/aframe-area-light-component/examples/basic)
* [Animation](https://mokargas.github.io/aframe-area-light-component/examples/Animation)

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|    intensity      |   intensity of the light output          |      1.0         |
|    color      |   color of the light output (and helper if enabled)          |      1.0         |
|    width      |   width of the light output          |      2.0         |
|    height      |   height of the light output          |      2.0         |
|    showHelper      |   Show the RectAreaLightHelper. Useful for positioning lights in the Inspector, or as a quick panel light (Note that the helper is single sided)       |      true        |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-area-light-component/dist/aframe-area-light-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity area-light="intensity:4; width:1; height:1; color: #FFFFFF;"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-area-light-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-area-light-component
```

Then require and use.

```js
require('aframe');
require('aframe-area-light-component');
```

#### Recommended enhancements

* Combine with [A-Frame Effects](https://github.com/wizgrav/aframe-effects) post-processing effects like Bloom and `showHelper:true` for a neat glow effect

#### TODO

* Add tests :)
