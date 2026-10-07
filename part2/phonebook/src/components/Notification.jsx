export default function Notification({ notification }) {
  if (!notification) return null
  return <p className={'notification ' + notification.type} role={notification.type === 'error' ? 'alert' : 'status'}>{notification.message}</p>
}

