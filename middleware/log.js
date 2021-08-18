export default function (context) {
  console.log(
    "[middleware log]",
    context.store.getters['isAuthenticated']
  )

  if (context.store.getters['isAuthenticated']) {
    console.log(context)
    // context.redirect('/index')
  }
}
