import react from "react";
import { useForm } from "react-hook-form";
function Form({ handleSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleformsubmit = (data) => {
    handleSubmitData(data);
    reset();
  };
  return (
    <>
      <div className="mt-5">
        <form onSubmit={handleSubmit(handleformsubmit)}>
          <input
            {...register("name")}
            className="outline-none px-2 m-2 py-2 text-semibold w-[20vw]"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            {...register("email")}
            className="outline-none px-2 m-2 py-2 text-semibold w-[20vw]"
            type="email"
            name="email"
            placeholder=" email"
          />
          <input
            {...register("image")}
            className="outline-none px-2 m-2 py-2 text-semibold w-[20vw]"
            type="text"
            name="image"
            placeholder="image url"
          />
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
