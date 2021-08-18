<template>
 <section class="container">
   <breadcrumb />

   <a-button class="print float-right"
             type="primary"
             shape="circle"
             icon="download"
             size="large"
             @click="print" />

   <article class="article">
     <h4 v-text="$t('article_title')" />
     <h5 class="mb-3" v-text="article.title" />

     <img
       slot="cover"
       :alt="article.continent"
       :src="article.image"
       class="mb-3"
     />

     <p v-text="article.description" />
   </article>
 </section>
</template>

<script>
import Breadcrumb from "~/components/shared/Breadcrumb";

export default {
  name: 'ArticleDetail',

  components: { Breadcrumb },

  async asyncData ({ route, redirect, app }) {
    const { id } = route.params
    if (!id) redirect(app.localePath({ name: '404' }))

    const article = await app.$articleService.detail(id)
    return { article }
  },

  methods: {
    print () {
      window.print()
    }
  }
}
</script>
