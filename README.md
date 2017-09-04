## aframe-area-light-component

[![Version](http://img.shields.io/npm/v/aframe-area-light-component.svg?style=flat-square)](https://npmjs.org/package/aframe-area-light-component)
[![License](http://img.shields.io/npm/l/aframe-area-light-component.svg?style=flat-square)](https://npmjs.org/package/aframe-area-light-component)

A-Frame wrapper for Three.js Rect Area Light

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-area-light-component/dist/aframe-area-light-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity area-light="foo: bar"></a-entity>
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
