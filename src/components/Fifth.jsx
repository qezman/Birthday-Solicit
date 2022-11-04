import { collection, addDoc } from 'firebase/firestore'
import React from 'react'
import { BiUser } from 'react-icons/all'

import {db} from '../firebase'

const Fifth = ({ form, setForm, handlePageChange }) => {

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault()
    if (
      form?.canMakeIt === true &&
      form?.name &&
      form?.age &&
      form?.contact
    ) {
      try {
        setLoading(true)
        const date = new Date().toString();
        const docRef = await addDoc(collection(db, 'invites'), {...form, date})
        handlePageChange('forward')
      } catch (error) {
        console.log({ error })
        window.alert('Failed to add invite, we\'d love to have your here. Please try again!')
      } finally {
        setLoading(false)
      }
    } else {
      window.alert('Failed to reply, we\'d love to have your here. Please try again!')
    }
  }, [form])

  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>4.</p>
        <form onSubmit={handleSubmit}>
          <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>Will you be bringing anybody, how many?
            <input
              type="number"
              onChange={({target: { value }}) => {
                setForm(prevState => ({
                  ...prevState,
                  companions: value
                }))
              }}
              name={"inviteePartner"}
              // className={"outline-none text-gray-800 py-2 border-b border-indigo-700 text-white bg-[#C3C6FF]"}

              className={"ml-3 outline-none text-gray-700 p-1 border-b border-indigo-700 rounded-sm w-20 bg-[#C3C6FF]"}
              value={form?.companions || ""}
             /></p>
             <button 
                type="submit" 
                className={`${loading ? "bg-gray-500" : "bg-red-500"} w-8/12 mx-5 mt-6 text-center text-lg text-white py-2 md:text-xl md:my-6 md:w-5/12`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
        </form>
      </div>
    </section>
  )
}
export default Fifth