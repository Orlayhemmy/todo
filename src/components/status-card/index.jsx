import { ReactComponent as WavyIcon } from '../../assets/icons/wavy-dash.svg'

const StatusCard = ({ taskTitle, taskIcon, taskAmount, taskAccomplishmentDescription, taskColor }) => {
  return (
    <div className='status-card'>
      <div className='status-card__header'>
        <span>{taskIcon}</span>
        <h4>{taskTitle}</h4>
        <span>{taskAmount}</span>
      </div>
      <div className='status-card__footer'>
        <div>
          <WavyIcon fill={taskColor}/>
        </div>
        <div>
          <p>
            <span className='status-card__footer__task-completed'>
              {taskAccomplishmentDescription}+
            </span>
            <span> more</span>
          </p>
          <p>from last week</p>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
