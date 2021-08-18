<template>
  <a-modal
    v-model="isModal"
    :width="width + '%'"
    :footer="null"
    centered
  >
   <p class="text-center" v-text="$t('greeting')" />
  </a-modal>
</template>

<script>
export default {
  name: 'ModalHome',

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
