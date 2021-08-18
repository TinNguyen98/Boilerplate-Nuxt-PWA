<template>
  <a-result status="404" title="404" :sub-title="$t('title_404')">
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
  name: '404Page',
};
</script>
