import {ReactComponent as StarIcon} from './assets/icons/star.svg'
import {ReactComponent as FileIcon} from './assets/icons/file.svg'
import {ReactComponent as ClipboardIcon} from './assets/icons/clipboard.svg'
import {ReactComponent as DashboardIcon} from './assets/icons/dashboard.svg'
import {ReactComponent as BookIcon} from './assets/icons/book.svg'
import {ReactComponent as MessageIcon} from './assets/icons/message.svg'
import {ReactComponent as FolderIcon} from './assets/icons/folder.svg'
import {ReactComponent as SettingsIcon} from './assets/icons/settings.svg'

export const menu = [
  { name: 'dashboard', icon: <DashboardIcon /> },
  { name: 'book', icon: <BookIcon /> },
  { name: 'settings', icon: <SettingsIcon /> },
  { name: 'message', icon: <MessageIcon /> },
  { name: 'folder', icon: <FolderIcon /> },
]
export const statuses = [
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

export const taskList = [
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

export const chartData = [
  {
    "name": "May",
    "uv": 90,
    "pv": 60,
  },
  {
    "name": "Jun",
    "uv": 110,
    "pv": 200,
  },
  {
    "name": "Jul",
    "uv": 380,
    "pv": 305,
  },
  {
    "name": "Aug",
    "uv": 265,
    "pv": 195,
  },
  {
    "name": "Sep",
    "uv": 215,
    "pv": 310,
  },
  {
    "name": "Oct",
    "uv": 170,
    "pv": 215,
  },
  {
    "name": "Nov",
    "uv": 320,
    "pv": 380,
  },
  {
    "name": "Dec",
    "uv": 290,
    "pv": 70,
  },
  {
    "name": "Jan",
    "uv": 170,
    "pv": 80,
  },
  {
    "name": "Feb",
    "uv": 120,
    "pv": 90,
  },
  {
    "name": "Mar",
    "uv": 180,
    "pv": 150,
  },
  {
    "name": "Apr",
    "uv": 90,
    "pv": 100,
  }
]

export const emoji = [
  '😀','🔥','😘','😁','😍','😎','😉','😜','👩','🌻','👌','👍','👎','😡'
]

export const collaborators = [
  { name: 'angela', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0kVcGAssgt4Y5kRRKDy7n7K8Wsy2XE1N3BK7DkoopuDuhTuk3FF_U0aBtvypkCPSysc&usqp=CAU' },
  { name: 'chris', imgurl: 'https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg' }
]

export const messages = [
  { senderName: 'sun hyo hung', message: 'Hi Michael! How are You?', imgurl: 'https://media.istockphoto.com/photos/young-handsome-indian-man-wearing-tshirt-over-isolated-red-background-picture-id1167771770?b=1&k=20&m=1167771770&s=170667a&w=0&h=BvwrZ2feVbqd8tp3eAJn8XcGBVgL_WC5LaLf0ybg-Ss=' },
  { senderName: 'tyler young', message: 'Do you need that design?', imgurl: 'https://media.istockphoto.com/photos/funky-young-girl-against-yellow-background-picture-id1225068819?k=20&m=1225068819&s=612x612&w=0&h=-mudsCxJbFfunKlV3acOysybhrGvSxSxRARno2_aUew=' }
]
