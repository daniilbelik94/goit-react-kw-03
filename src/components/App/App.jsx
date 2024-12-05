import './App.css';
import { useState } from 'react';
// import LoginForm from './components/form';
// import { LangSwitcher}  from './components/form.jsx';

// const App = () => {

//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = (userData) => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };





// смена языка пример


// const App = () => {
//   const [lang, setLang] = useState("uk");

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };




// *radio buttons


// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//       <p>
//         <b>Selected size:</b> {coffeeSize}
//       </p>
//     </>
    
//   );
// };



// *checkboxes

// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
  
// };



// loginform example


// function App() {
//   return (
//     <div>
//       <h1>Login Form</h1>
//       <LoginForm />
//     </div>
//   );
// }




// import TaskList from '../TaskList/TaskList.jsx';
import initialTasks from '../tasks.json';
import Form from '../Form/Form';
// import Filter from '../Filter/Filter.jsx';
import css from './App.module.css';

export default function App() {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <div className={css.container}>
            <Form addTask={addTask} />
            {/* <Filter /> */}
            <TaskList tasks={tasks} />
        </div>
    );
}







