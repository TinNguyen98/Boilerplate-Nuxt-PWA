<template>
  <header>
    <div class="d-flex justify-content-between align-items-center">
      <nuxt-link
        :to="localePath({ name: 'index' })"
        tag="h1"
        class="mb-0"
        v-text="$t('header')"/>


     <div class="d-flex align-items-center">
       <p
         v-if="$store.getters['token']"
         class="language-control text-white mb-0 mr-2"
         v-text="$store.getters['userInfo'].nickname"/>

       <nuxt-link
         v-for="locale in availableLocales"
         :key="locale.code"
         :to="switchLocalePath(locale.code)"
         class="language-control mr-2"
         v-text="locale.name" />

       <a
         v-if="displayLogin"
         class="language-control text-white mb-0 mr-2"
         @click="toggleAction(toggleText)"
         v-text="$t(toggleText)"/>
     </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    displayLogin () {
      return !this.$route.name.startsWith('login')
    },

    toggleText () {
      return !this.$store.getters['token'] ? 'login' :'logout'
    },

    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },

  methods: {
     async toggleAction (type) {
      if (type === 'login') {
        await this.$router.push(this.localePath('login'))
      } else {
        if (await this.$store.dispatch('logout')) {
          this.$notification.success({
            message: this.$t('logout_success')
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 15px;
  background-color: #3d4347;

  h1, a {
    font-size: 20px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
  }

   .language-control {
     font-size: 12px;
   }
}
</style>
