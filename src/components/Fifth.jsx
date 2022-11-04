import { BiUser } from 'react-icons/all'

const Fifth = ({ form, setForm, handlePageChange }) => {
  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>4.</p>
        <form onSubmit={e => {
          e.preventDefault()
          handlePageChange('forward')
        }}>
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
             <button className={"bg-red-500 w-8/12 mx-5 mt-6 text-center text-lg text-white py-2 md:text-xl md:my-6 md:w-5/12"}>
                Submit
              </button>
        </form>
      </div>
    </section>
  )
}
export default Fifth