import { get, filter, reduce } from "lodash-es";

export default {
  data () {
    return {
      isSubmitBtn: false
    }
  },

  methods: {
    /**
     * Action Success
     *
     * @param mess
     * @param des
     */
    onSuccess (mess, des) {
      this.$notification.success({
        message: mess,
        description: des
      })
    },

    /**
     *  Action Error
     *
     * @param mess
     * @param des
     */
    onError (mess, des) {
      this.$notification.error({
        message: mess,
        description: des
      })
    },

    /**
     * Scroll to place error field on form
     *
     * @param refName
     * @param errorsResponse
     */
    onErrorHandleScroll (refName = 'observer', errorsResponse) {
      this.isSubmitBtn = false

      const errorsArray = this.$refs[refName].errors
      const responseError = get(errorsResponse, 'response.data')

      // map error from Server
      filter(errorsArray, (item, key) => {
        if (responseError && responseError.error[key]) {
          item.push(responseError.error[key][0])
        }
      })

      const errors = reduce(errorsArray, (result, value, key) => {
        if (value.length) {
          result.push(key)
        }

        return result
      }, [])

      if (errors[0]) {
        this.$refs[refName].refs[errors[0]].$el.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }
    }
  }
}
