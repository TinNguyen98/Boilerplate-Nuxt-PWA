<template>
  <form class="container"
        onsubmit="return false"
        @submit="handleSubmit">
    <div class="form-group">
      <label for="exampleInputEmail1" v-text=" 'Email' " />
      <input type="email"
             class="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="email"
             v-model="form.email">
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1"
             v-text="$t('password')" />
      <input type="password"
             class="form-control"
             id="exampleInputPassword1"
             placeholder="password"
             v-model="form.password">
    </div>

    <div class="form-check mb-2">
      <input type="checkbox"
             class="form-check-input"
             id="exampleCheck1"
             v-model="isRemember">
      <label class="form-check-label"
             for="exampleCheck1"
             v-text="$t('remember_account')" />
    </div>
    <button type="submit"
            class="btn btn-primary"
            v-text=" 'Submit' " />
  </form>
</template>

<script>
export default {
  name: 'Login',

  middleware: ['log'],

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      isRemember: false
    }
  },

  created() {
    // this.form.email = localStorage.getItem('email')
    // this.isRemember = !!localStorage.getItem('email')
  },

  methods: {
    async handleSubmit () {
      // clear storage
      await localStorage.clear()
      if (this.isRemember) { localStorage.setItem('email', this.form.email) }

      const statusLogin = await this.$store.dispatch('login', this.form)
      if(statusLogin) {
        await this.$router.push(this.localePath('index'))
      } else {
        this.$notification.error({
          message: this.$t('login_fail')
        })
      }
    },
  }
}
</script>
