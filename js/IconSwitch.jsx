export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className='material-icons icon-switch' onClick={onSwitch}>{icon}</div>
  )
}