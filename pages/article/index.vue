<template>
  <section class="container">
    <breadcrumb />

    <template v-if="!$fetchState.pending">
      <a-button type="primary"
                @click="$fetch()"
                class="mb-3"
                v-text="$t('refresh')" />

      <a-row :gutter="16">
        <a-col v-for="(article, i) in articleList"
               :key="i"
               :span="8">
          <nuxt-link :to="localePath({ name: 'article-detail-id',  params: { id: article.id } })" >
            <a-card hoverable>
              <img
                loading="lazy"
                slot="cover"
                :alt="article.continent"
                :src="article.image"
              />
              <a-card-meta :title="article.title">
                <template slot="description">
                  {{ article.height }}
                </template>
              </a-card-meta>
            </a-card>
          </nuxt-link>
        </a-col>
      </a-row>
    </template>

    <loading v-else />
  </section>
</template>

<script>
import Loading from "~/components/shared/Loading";
import Breadcrumb from "~/components/shared/Breadcrumb";

export default {
  name: 'ArticleList',

  components: { Breadcrumb, Loading },

  head () {
    return {
      title: 'Article List',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Article List'
        }
      ]
    }
  },

  data () {
    return {
      articleList: []
    }
  },

  async fetch() {
    this.articleList = await this.$articleService.list()
  }
}
</script>
