import { TodoList } from './components/TodoList';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {import.meta.env.VITE_APP_TITLE}
      </h1>
      <div>hello world</div>
      <TodoList />
    </div>
  );
}

export default App;
