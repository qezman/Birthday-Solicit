import {BiCheck} from "react-icons/all";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useState} from "react";
import app from "../Firebase";

const Third = ({ form, setForm, handlePageChange }) => {
  const [age, setAge] = useState("")

  const auth = getAuth(app)
  const signup = () => {
    createUserWithEmailAndPassword(auth, age)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        alert("Successfully created an acct")
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message
        console.log(errorCode)
      })
  }

  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>3.</p>
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>What is your age?</p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        handlePageChange('forward')
      }} className={"mt-8 text-start mx-6 md:text-2xl"}>
        <input
          type="number" // Changed the type to a number
          placeholder={"Type your answer here"}
          onChange={({target: {value}}) => {
            setForm(prevState => ({
              ...prevState,
              age: value
            }))
          }}
          name={"inviteeAge"}
          required
          value={form?.age || ""}
          className={"outline-none text-gray-800 py-2 border-b border-indigo-700 text-white bg-[#C3C6FF]"}

        />

        <div>
          <button
             className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-6 px-3 w-16 text-white md:text-xl md:w-20"}
          >
            OK <BiCheck className={"ml-2 text-xl md:text-3xl"} /></button>
        </div>
      </form>
    </section>
  )
}
export default Third