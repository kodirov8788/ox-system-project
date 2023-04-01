import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <a href="/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">back to login</a>

      <p class="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white">
        Wellcome to OX system
      </p>

      <Link to="/admin">
        <p class="max-w-lg text-3xl font-semibold leading-relaxed text-blue-600 underline">
          Enter to Admin
        </p>
      </Link>

    </div>
  );
}

export default App;
