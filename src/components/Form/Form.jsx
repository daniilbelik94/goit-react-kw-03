// const LoginForm = ({ onLogin }) => {

//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Викликаємо пропс onLogin
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };


// import { useState } from "react";


// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   // Обработчик изменения полей
//   const handleChange = (evt) => {
//     setValues({
//       ...values, // Сохраняем текущие значения
//       [evt.target.name]: evt.target.value, // Обновляем поле с именем "name"
//     });
//   };

//   // Обработчик отправки формы
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     // Логируем значения формы
//     console.log("Submitted values:", values);

//     // Сбрасываем поля формы
//     setValues({
//       login: "",
//       password: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Login:
//         <input
//           type="text"
//           name="login"
//           value={values.login} // Значение из состояния
//           onChange={handleChange} // Обработчик изменения
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={values.password} // Значение из состояния
//           onChange={handleChange} // Обработчик изменения
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;




// *language changer*


// import { useId } from "react";

// export const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={(evt) => onSelect(evt.target.value)}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };


// export default LangSwitcher;



import css from './Form.module.css';

export default function Form({ addTask }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({
            id: Date.now(),
            name: e.target.elements.Name.value,
            number: e.target.elements.Numbers.value,
        });

        e.target.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} type="text" name="Name" required />
            <input className={css.input} type="number" name="Numbers" required />
            <button type="submit" className={css.btn}>Add contact</button>
        </form>
    );
}

        