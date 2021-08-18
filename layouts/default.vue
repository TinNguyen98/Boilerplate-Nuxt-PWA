<template>
  <div id="default">
    <header-component ref="mainHeader" />

    <main ref="mainContent"
          class="pt-3 pb-3"
          :style="{ 'min-height': 'calc(100vh - ' + headerAndFooterHeight + 'px)' }">
      <nuxt />
    </main>

    <footer-component ref="mainFooter" />

    <modal-home v-model="isModal" />
  </div>
</template>

<script>
import HeaderComponent from "~/components/shared/Header";
import FooterComponent from "~/components/shared/Footer";
import ModalHome from "~/components/modal/ModalHome";

export default {
  name: 'MainLayout',

  components: {
    HeaderComponent,
    FooterComponent,
    ModalHome
  },

  data () {
    return {
      headerAndFooterHeight: 0,
      isModal: false
    }
  },

  async mounted () {
    await this.$nextTick()
    this.headerAndFooterHeight = this.$refs.mainHeader.$el.scrollHeight + this.$refs.mainFooter.$el.scrollHeight

    // Show modal ads only one time
    const isShowPopup = sessionStorage.getItem('isShowPopup')
    if (!isShowPopup) {
      this.isModal = true
      sessionStorage.setItem('isShowPopup', true)
    }
  }
}
</script>
