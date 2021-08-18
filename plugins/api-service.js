import ArticleRepository from "~/api/ArticleService";

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  inject('articleService', ArticleRepository(ctx.$axios)('posts'))
}
