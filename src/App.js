import './App.css';
import {Routes,Route} from 'react-router-dom';
import { TimeTable } from './components/TimeTable/TimeTable';
import {Form} from './components/Form/Form'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/form/:id" element={<Form></Form>}>
        </Route>
        <Route path="/" element={<TimeTable></TimeTable>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
