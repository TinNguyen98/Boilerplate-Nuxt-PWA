<template>
  <a-result status="403" title="403" :sub-title="$t('title_403')">
    <template #extra>
      <a-button type="primary">
        <nuxt-link :to="localePath({ name: 'index' })"
                   class="text-decoration-none"
                   v-text="$t('back_home')"/>
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: '403Page',
};
</script>
