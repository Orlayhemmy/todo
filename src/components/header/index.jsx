import InputField from '../inputfield'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg'
import { ReactComponent as DownIcon } from '../../assets/icons/back.svg'

const Header = () => {
  return (
    <div className="navbar">
      <div></div>
      <div className='navbar__search'>
        <InputField placeholder='Search anything...' icon={<SearchIcon />} />
      </div>
      <div className='navbar__user'>
        <div className='navbar__user__notifications'>
          <BellIcon />
          <span>2</span>
        </div>
        <div className='navbar__user__options'>
          <span className='navbar__user__options__avatar'>
            <img src='https://miro.medium.com/fit/c/176/176/2*-cdwKPXyVI0ejgxpWkKBeA.jpeg' alt='user-img' />
          </span>
          <span className='navbar__user__options__down-icon'>
            <DownIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
