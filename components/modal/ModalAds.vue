<template>
  <a-modal
    v-model="isModal"
    :width="width + '%'"
    :footer="null"
    centered
  >
    <video controls>
      <source src="https://youtu.be/lqAeYl05V2k" type="video/mp4">
      <source src="https://youtu.be/lqAeYl05V2k" type="video/ogg">
      Your browser does not support the video tag.
    </video>
  </a-modal>
</template>

<script>
export default {
  name: 'ModalAds',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: { type: Boolean, required: true, default: false },
    width: { type: [String, Number], default: 70 }
  },

  computed: {
    isModal: {
      get() {
        return this.$props.value
      },
      set(value) {
        this.$emit('change', value)
      }
    },
  }
}
</script>

<style scoped>
video {
  width: 100%;
  height: 350px;
}
</style>
