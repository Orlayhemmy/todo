import logo from './logo.svg';
import Header from './components/header';
import StatusCard from './components/status-card';
import {ReactComponent as StarIcon} from './assets/icons/star.svg'
import {ReactComponent as FileIcon} from './assets/icons/file.svg'
import {ReactComponent as ClipboardIcon} from './assets/icons/clipboard.svg'
import TaskDoneChart from './components/task-done-chart';
import Button from './components/button';
import {ReactComponent as EllipsisIcon} from './assets/icons/ellipsis.svg'
import {ReactComponent as DashboardIcon} from './assets/icons/dashboard.svg'
import {ReactComponent as BookIcon} from './assets/icons/book.svg'
import {ReactComponent as SettingsIcon} from './assets/icons/settings.svg'
import {ReactComponent as MessageIcon} from './assets/icons/message.svg'
import {ReactComponent as FolderIcon} from './assets/icons/folder.svg'
import Schedule from './components/schedule';

import './sass/main.scss'
import ProgressBar from './components/progress-bar';

const menu = [
  { name: 'dashboard', icon: <DashboardIcon /> },
  { name: 'book', icon: <BookIcon /> },
  { name: 'settings', icon: <SettingsIcon /> },
  { name: 'message', icon: <MessageIcon /> },
  { name: 'folder', icon: <FolderIcon /> },
]
const statuses = [
  {
    taskTitle: 'task completed',
    taskIcon: <StarIcon />,
    taskAmount: '08',
    taskAccomplishmentDescription: '08',
    taskColor: '#4ba8a8'
  },
  {
    taskTitle: 'new task',
    taskIcon: <FileIcon />,
    taskAmount: '10',
    taskAccomplishmentDescription: '10',
    taskColor: '#f8b400'
  },
  {
    taskTitle: 'project done',
    taskIcon: <ClipboardIcon />,
    taskAmount: '10',
    taskAccomplishmentDescription: '10',
    taskColor: '#e07f31'
  },
]

const taskList = [
  {
    name: 'user journey of the project',
    startDate: '01/31/2022',
    endDate: '01/31/2022',
    hours: 80,
    progress: 50
  },
  {
    name: 'wireframing the project',
    startDate: '02/01/2022',
    endDate: '02/28/2022',
    hours: 80,
    progress: 90
  },
  {
    name: 'user interface design',
    startDate: '03/01/2022',
    endDate: '03/31/2022',
    hours: 80,
    progress: 40
  },
]

const TaskList = () => (
  <div className='tasklist'>
    <div className='tasklist__header'>
      <h3>Task</h3>
    </div>
    <div className='tasklist__table'>
      <table>
        <thead>
          {['name of task', 'start date', 'end date', 'hours', 'progress', ''].map((title) => (
            <th>{title}</th>
          ))}
        </thead>
        <tbody>
          {taskList.map(task => (
            <tr>
              <td>{task.name}</td>
              <td>{new Date(task.startDate).toDateString().slice(4)}</td>
              <td>{new Date(task.endDate).toDateString().slice(4)}</td>
              <td>{task.hours}</td>
              <td>
                <ProgressBar completed={task.progress} />
              </td>
              <td>
                <Button handleClick={() => {}}>
                  <EllipsisIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const TaskStatus = () => (
  <div className='chart__summary'>
    {
      statuses.map(status => (
        <StatusCard
          taskTitle={status.taskTitle}
          taskIcon={status.taskIcon}
          taskAmount={status.taskAmount}
          taskAccomplishmentDescription={status.taskAccomplishmentDescription}
          taskColor={status.taskColor}
        />
      ))
    }
  </div>
)

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <SettingsIcon />
        <span>to-do</span>
      </div>
      <ul className='sidebar__menu'>
        {menu.map(option => (
          <li>{option.icon}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className='dashboard__content'>
        <Header />
        <div className='dashboard__tasks-container'>
          <div className='chart'>
            <TaskStatus />
            <TaskDoneChart />
            <TaskList />
          </div>
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default App;
