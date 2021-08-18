<template>
  <nav class="mb-3" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, i) in crumbs"
          :key="i"
          class="breadcrumb-item">
        <nuxt-link v-if="!crumb.disabled"
                   :to="crumb.redirect">
          <span property="name" v-text="crumb.name"/>
        </nuxt-link>

        <span v-else v-text="crumb.name"/>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',

  computed: {
    crumbs () {
      const { fullPath } = this.$route
      const params = fullPath.substring(1).split('/')
      // Remove params id or slug
      if (params.some(i => !isNaN(i) || i.includes('-'))) params.pop()

      const crumbs = []
      let path = ''

      params.forEach((param, index, { length }) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== 'index') {
          if (index === length - 1) {
            crumbs.push({
              name: path.replace(/\//g, '-').slice(1),
              disabled: true,
            })
          } else {
            crumbs.push({
              name: path.replace(/\//g, '-').slice(1),
              disabled: false,
              redirect: path + '/',
            })
          }
        }
      })
      return crumbs
    },
  }
}
</script>

<style lang="scss">
.breadcrumb {
  background: transparent;
  padding: 0;

  &-item {
    font-size: 14px;
    text-transform: capitalize;
    word-break: break-all;
    & + .breadcrumb-item {
      &::before {
        color: #cccccc;
      }
    }
    a {
      font-weight: 600;
      text-decoration: none;
      text-transform: capitalize;
    }
  }
}
</style>
