<template>
  <v-slider data-app v-model="value" :label="label" :track-color="color" thumb-label="always"></v-slider>
</template>

<script>
export default {
    props: ["val", "label", "color"],
    data () {
        return {
            val: null
        }
    },
computed: {
    sliderValue:  {
        get () { return this.val },
        set (newValue) { null }
        }
    }
}
</script>

<style>
</style>