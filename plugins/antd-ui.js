import Vue from 'vue'

// Component
import {
  Pagination,
  Tooltip,
  Progress,
  Table,
  Button,
  Popconfirm,
  Collapse,
  Col,
  Row,
  Card,
  notification,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Modal,
  Transfer,
  Empty,
  Spin,
  Radio,
  Checkbox,
  Rate,
  message,
  Popover,
  Switch,
  AutoComplete,
  Result,
  Breadcrumb
} from "ant-design-vue"

Vue.use(AutoComplete)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(Button)
Vue.use(Popconfirm)
Vue.use(Collapse)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Input)
Vue.use(Select)
Vue.use(Modal)
Vue.use(Transfer)
Vue.use(Progress)
Vue.use(Empty)
Vue.use(Spin)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Rate)
Vue.use(Popover)
Vue.use(Result)
Vue.use(Breadcrumb)

Vue.prototype.$notification = notification
Vue.prototype.$message = message
