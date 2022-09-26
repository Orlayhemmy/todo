import { useRef, useCallback } from "react"
import Button from "../button"
import InputField from "../inputfield"
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg"
import { ReactComponent as BackwardIcon } from "../../assets/icons/back.svg"
import { collaborators, emoji, messages } from "../../constants"

const Emojis = () => {
  const emojiRef = useRef()

  const handleUserKeyPress = useCallback((direction) => {
    if (direction === 'left') {
      emojiRef.current.scrollTo({ left: 0, behaviour: 'smooth' })
    } else {
      emojiRef.current.scrollTo({ left: 280, behaviour: 'smooth' })
    }
}, [emojiRef]);

  return (
    <div className="emoji-container">
      <BackwardIcon onClick={() => handleUserKeyPress('left')} />
      <ul className="emoji-container__emojis" ref={emojiRef}>
        {emoji.map(smiley => <li key={smiley}>{smiley}</li>)}
      </ul>
      <BackwardIcon onClick={() => handleUserKeyPress('right')} />
    </div>
)}

const Collaborators = () => {
  return (
    <div className="collaborators">
      <p>Add Collaborators</p>
      <div className="collaborators__list">
        {
          collaborators.map(collab => (
            <span key={collab.name} className="collaborators__list__pill">
              <img src={collab.imgurl} alt='collab_image' />
              <span>{collab.name}</span>
              <span className="collaborators__list__pill__close">&#10799;</span>
            </span>
          ))
        }
        <span className="collaborators__list__add">+</span>
        <span className="collaborators__list__more"><BackwardIcon /></span>
      </div>
    </div>
  )
}

const Duration = () => {
  return (
    <div className="duration">
      <p>time to complete</p>
      <InputField placeholder={'Start date'} icon={<CalendarIcon />} />
      <br />
      <InputField placeholder={'End Date'} icon={<CalendarIcon />} />
      <hr />
      <p>hours budgeted</p>
      <InputField placeholder={'Enter Hours'} />
      <div className="duration__save">
        <Button>Save</Button>
      </div>
    </div>
  )
}

const Messages = () => {
  return (
    <div className="messages">
      <h3>messages</h3>
      <div className="messages__container">
        {
          messages.map(msg => (
            <div key={msg.message} className="messages__container__message">
              <div className="messages__container__message__img">
                <img src={msg.imgurl} alt='sender' />
              </div>
              <div>
                <p>{msg.senderName}</p>
                <span>{msg.message}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const Schedule = () => {
  return (
    <div className="schedule">
      <div>
        <h3>Today's Schedule</h3>
      </div>
      <br />
      <div className="schedule__new-task">
        <h3>New Task</h3>
        <p>
          task title
        </p>
        <InputField placeholder={'Create new'} />
        <Emojis />
        <Collaborators />
        <Duration />
        <Messages />
      </div>
    </div>
  )
}

export default Schedule
