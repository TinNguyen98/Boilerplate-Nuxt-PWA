import * as moment from 'moment-timezone'
import { forEach } from 'lodash-es'

/**
 * Convert date by format
 *
 * @param date
 * @param format
 * @returns {string}
 */
export const formatDate = (date, format = '') => {
  let convertDate = date
  if (!moment(convertDate, 'YYYY-MM-DD HH:mm:ss').isValid()) return ''

  // Convert obj moment to string date
  if (convertDate instanceof Object) {
    const d = new Date(date)
    let objDate = {
      year: d.getFullYear(),
      month: (d.getMonth() + 1),
      day: d.getDate(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    }

    forEach(objDate, (value, index) => {
      if (value.toString().length < 2) { objDate[index] = '0' + value }
    })

    const time = [objDate.hour, objDate.minute, objDate.second].join(':')
    convertDate = [objDate.year, objDate.month, objDate.day].join('-') + ' ' + time
  }
  return moment(convertDate.toString(), 'YYYY-MM-DD HH:mm:ss').format(format)
}

/**
 * Convert file to base64
 *
 * @param file
 * @returns {Promise<unknown>}
 */
export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

/**
 * Catch action user leave page
 *
 * @param $event
 * @returns {string}
 */
export const beforeLeavePage = ($event) => {
  $event.returnValue = 'beforeunload'
  return $event.returnValue
}

export default {
  formatDate,
  toBase64,
  beforeLeavePage
}
