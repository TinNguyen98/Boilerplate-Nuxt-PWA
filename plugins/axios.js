// expose the store, axios client and redirect method from the Nuxt context
// https://nuxtjs.org/api/context/
// import cookie from 'js-cookie'

export default function ({ store, app: { $axios, i18n, localePath }, redirect }) {
  $axios.onRequest((config) => {
    config.headers['Accept'] = "application/json"
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    // set locale for request
    config.headers['App-Locale'] = i18n.locale

    // check if the user is authenticated
    if (store.state.token) {
      // set the Authorization header using the access token
      config.headers.Authorization = "Bearer " + store.state.token
    }
    return config
  })

  $axios.onResponse(response => {
    return response
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    // const strategy = cookie.get('auth.strategy')
    // const routePage = strategy === 'company'
    //   ? localePath({ name: 'company-login' })
    //   : localePath({ name: 'account-login' })

    switch (code) {
      case 401:
      case 421:
      case 400:
        redirect(localePath({ name: 'index' }))
        break
      case 404:
        redirect(localePath({ name: '404' }))
        break
      case 403:
        redirect(localePath({ name: '403' }))
    }
  })
}
