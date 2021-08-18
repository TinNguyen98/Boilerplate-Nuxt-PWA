import Vue from 'vue'
import { formatDate } from '@/utils/helper'
import * as moment from 'moment-timezone'

/**
 * Convert date by format
 *
 * @param date
 * @param format
 * @returns {string}
 */
Vue.filter('filterFormatDate', function (value, format = '') {
  let date = moment(value)
  if (!date.isValid()) return ''
  return formatDate(date, format)
})

/**
 * remove all html tas but <br>
 *
 * @param text
 * @returns {string}
 */
Vue.filter('stripHtmlTags', function (text) {
  if (!(typeof text === 'string') && !(text instanceof String)) return ''

  return text.replace(/(<((?!br)[^>]+)>)/gm, '')
})
