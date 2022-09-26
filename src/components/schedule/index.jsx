import { Children, useRef, useState, useEffect, useCallback } from "react"
import Button from "../button"
import InputField from "../inputfield"
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg"
import { ReactComponent as BackwardIcon } from "../../assets/icons/back.svg"

const emoji = [
  '😀','🔥','😘','😁','😍','😎','😉','😜','👩','🌻','👌','👍','👎','😡'
]

const collaborators = [
  { name: 'angela', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0kVcGAssgt4Y5kRRKDy7n7K8Wsy2XE1N3BK7DkoopuDuhTuk3FF_U0aBtvypkCPSysc&usqp=CAU' },
  { name: 'chris', imgurl: 'https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg' }
]

const messages = [
  { senderName: 'sun hyo hung', message: 'Hi Michael! How are You?', imgurl: 'https://media.istockphoto.com/photos/young-handsome-indian-man-wearing-tshirt-over-isolated-red-background-picture-id1167771770?b=1&k=20&m=1167771770&s=170667a&w=0&h=BvwrZ2feVbqd8tp3eAJn8XcGBVgL_WC5LaLf0ybg-Ss=' },
  { senderName: 'tyler young', message: 'Do you need that design?', imgurl: 'https://media.istockphoto.com/photos/funky-young-girl-against-yellow-background-picture-id1225068819?k=20&m=1225068819&s=612x612&w=0&h=-mudsCxJbFfunKlV3acOysybhrGvSxSxRARno2_aUew=' }
]

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
        {emoji.map(smiley => <li>{smiley}</li>)}
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
            <span className="collaborators__list__pill">
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
            <div className="messages__container__message">
              <div className="messages__container__message__img">
                <img src={msg.imgurl} alt='sender image' />
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
