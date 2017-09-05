/**
 * A-Frame Wrapper for THREE.JS RectAreaLight
 * @author Mo Kargas (DEVLAD) mo@devlad.com
 */

/* global AFRAME */
/* global THREE */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

if (typeof THREE === 'undefined') {
  throw new Error('Component attempted to register before THREE was available.')
}

AFRAME.registerComponent('area-light', {
  schema: {
    intensity: {
      type: 'number',
      default: 1.0
    },
    color: {
      type: 'color',
      default: '#FFFFFF'
    },
    width: {
      type: 'number',
      default: 2.0
    },
    height: {
      type: 'number',
      default: 2.0
    },
    helperColor: {
      type: 'color',
      default: undefined
    },
    showHelper: {
      type: 'boolean',
      default: true
    },
  },

  init: function() {
    this.setHelperColor = this.setHelperColor.bind(this)

    this.rectLight = new THREE.RectAreaLight(this.data.color, this.data.intensity, this.data.width, this.data.height)
    this.rectLight.position.set(this.data.width / 2, 0, 0)
    this.el.object3D.add(this.rectLight)

    //Helper set, assign to scene
    if (this.data.showHelper) {

      this.rectLightHelper = new THREE.RectAreaLightHelper(this.rectLight)
      this.rectLightHelper.position.set(this.rectLight.position.x, 0, 0)
      this.el.object3D.add(this.rectLightHelper)

      //Determine if we have a different helperColor set
      if (this.data.helperColor !== undefined) {
        this.setHelperColor(this.data.helperColor)
      } else {
        this.setHelperColor(this.data.color)
      }
    }

  },

  setHelperColor: function(color) {
    //Set helper material color if enabled
    //NOTE: RectLightHelper consists of submeshes https://github.com/mrdoob/three.js/blob/master/src/helpers/RectAreaLightHelper.js
    this.rectLightHelper.children.forEach(node => node.material.color.set(color))
  },

  update: function(oldData) {

    //Update light values
    this.rectLight.intensity = this.data.intensity
    this.rectLight.width = this.data.width
    this.rectLight.height = this.data.height
    this.rectLight.color.set( this.data.color )

    if (this.rectLightHelper !== undefined) {
      this.rectLightHelper.visible = this.data.showHelper

      //Update, as child light may have changed dimensions
      this.rectLightHelper.update()

      if (this.data.helperColor !== undefined) {
        this.setHelperColor(this.data.helperColor)
      } else {
        this.setHelperColor(this.data.color)
      }


    }
  }
});
