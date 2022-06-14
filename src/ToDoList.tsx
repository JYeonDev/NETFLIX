import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", { required: true, minLength: 10 })}
          placeholder='Email'
        />
        <input {...(register("1"), { required: true })} placeholder='Email' />
        <input {...(register("2"), { required: true })} placeholder='Email' />
        <input {...(register("3"), { required: true })} placeholder='Email' />
        <input {...(register("4"), { required: true })} placeholder='Email' />
        <input {...(register("5"), { required: true })} placeholder='Email' />
        <input {...(register("6"), { required: true })} placeholder='Email' />
        <button>Add</button>
      </form>
    </div>
  );
}

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(todo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder='Write a to do' />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
