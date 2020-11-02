import { notification } from 'antd';

const _placement = 'bottomRight';
const notificationTypes = ['info', 'error', 'success', 'warn', 'warning'];

export const notify = (type, message) => {
  // if(notificationTypes.findIndex(type) === -1 || type == null) {
  //   type = 'info';
  // }
  notification[type]({
    message,
    placement: _placement
  })
}