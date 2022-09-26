import Header from './components/header';
import StatusCard from './components/status-card';
import TaskDoneChart from './components/task-done-chart';
import Button from './components/button';
import {ReactComponent as EllipsisIcon} from './assets/icons/ellipsis.svg'
import {ReactComponent as SettingsIcon} from './assets/icons/settings.svg'
import Schedule from './components/schedule';
import ProgressBar from './components/progress-bar';
import { menu, statuses, taskList } from './constants';
import './sass/main.scss'

const TaskList = () => (
  <div className='tasklist'>
    <div className='tasklist__header'>
      <h3>Task</h3>
    </div>
    <div className='tasklist__table'>
      <table>
        <thead>
          <tr>
            {['name of task', 'start date', 'end date', 'hours', 'progress', ''].map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {taskList.map(task => (
            <tr key={task.name}>
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
          key={status.taskTitle}
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
          <li key={option.name}>{option.icon}</li>
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
