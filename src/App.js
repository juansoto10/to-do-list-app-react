import './App.css';
import toDoIcon from './images/to_do_icon.svg';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='to-do-app'>
        <div className='title'>
          <h1>To-Do List</h1>
          <div className='title__icon-cont'>
            <img 
              src={toDoIcon}
              className='title__icon'
              alt='To-do icon'
            />
          </div>
        </div>
        <div className='list'>
          <h2>My tasks</h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
