import React, { useState } from 'react'

const ControlledForms = () => {

  const [data, setData] = useState({
    email: "",
    pass: "",
  })
  const [confirmData, setConfirmData] = useState({
    confirmEmail: "",
    confirmPass: "",

  })
  const [condition, setCondition] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [confirm, setConfirm] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
    setData(() => ({
      email: "",
      pass: ""
    }))
    setCondition(false);
    setConfirm(true)
  }

  function logIn(e) {
    e.preventDefault();
    localStorage.setItem("confirmData", JSON.stringify(confirmData));

    const q = JSON.parse(localStorage.getItem("confirmData"));
    const r = JSON.parse(localStorage.getItem("data"));

    const x = q.confirmEmail;
    const y = q.confirmPass;

    const a = r.email;
    const b = r.pass;

    if (x === a && y === b) {
      setIsLogedIn(true);
      setConfirm(false);

    } else {
      alert("Wrong Details");
    }
  }

  return (
    <div>
      {condition && <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter Your Email' value={data.email} onChange={(e) => { setData((prev) => ({ ...prev, email: e.target.value })) }}></input> <br /> <br />
        <input type='password' placeholder='Enter Your Password' value={data.pass} onChange={(e) => { setData((prev) => ({ ...prev, pass: e.target.value })) }}></input> <br /> <br />
        <button type='submit'>Sign In</button>
        <></>
      </form>}
      {confirm && <form onSubmit={logIn}>
        <input type='email' placeholder='Confirm Your Email' value={confirmData.confirmEmail} onChange={(e) => { setConfirmData((prev) => ({ ...prev, confirmEmail: e.target.value })) }}></input> <br /> <br />
        <input type='password' placeholder='Confirm Your Password' value={confirmData.confirmPass} onChange={(e) => { setConfirmData((prev) => ({ ...prev, confirmPass: e.target.value })) }}></input> <br /> <br />
        <button type='submit'>Log In</button>

      </form>}
      {isLogedIn && <h1>Welcome {confirmData.confirmEmail}</h1>}

    </div>
  )
}

export default ControlledForms;
