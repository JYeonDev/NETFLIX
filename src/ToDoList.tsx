import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: /^[A-Za-z0-9._%+-]+@naver.com$/,
          })}
          placeholder='Email'
        />
        <span>{errors?.Email?.message}</span>
        <input {...(register("a"), { required: true })} placeholder='Email' />
        <input {...(register("b"), { required: true })} placeholder='Email' />
        <input {...(register("c"), { required: true })} placeholder='Email' />
        <input {...(register("d"), { required: true })} placeholder='Email' />
        <input {...(register("e"), { required: true })} placeholder='Email' />
        <input {...(register("f"), { required: true })} placeholder='Email' />
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
