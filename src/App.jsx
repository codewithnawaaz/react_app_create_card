import React, { useState } from "react";
import Cards from "./assets/component/cards";
import Form from "./assets/component/form";

function App() {
  const [user, setUser] = useState([]);
  const handleSubmitData = (data) => {
    setUser([...user, data]);
  };

  const handelRemover = (id) => {
    return setUser(() => user.filter((item, index) => index != id));
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center flex-col">
        <Cards user={user} handelRemover={handelRemover} />
        <Form handleSubmitData={handleSubmitData} />
      </div>
    </>
  );
}

export default App;
