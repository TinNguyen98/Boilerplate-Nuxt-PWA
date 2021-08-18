<template>
  <a-collapse v-model="activeKey"
              :expand-icon-position="expandIconPosition"
              :accordion="accordion">
    <a-collapse-panel key="1" :header="$t('question') + 1">
      <p v-text="$t('dummy_answer')" />
    </a-collapse-panel>
    <a-collapse-panel key="2" :header="$t('question') + 2">
      <p v-text="$t('dummy_answer')" />
    </a-collapse-panel>
    <a-collapse-panel key="3" :header="$t('question') + 3">
      <p v-text="$t('dummy_answer')" />
    </a-collapse-panel>
  </a-collapse>
</template>
<script>

export default {
  name: 'TabList',

  props: {
    accordion: { type: Boolean, default: false }
  },

  data() {
    return {
      text: this.$t('dummy_answer'),
      activeKey: ['1'],
      expandIconPosition: 'right',
    }
  }
}
</script>

