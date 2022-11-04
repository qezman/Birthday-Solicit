import React from 'react';

const End = ({ form, handlePageChange }) => {
  React.useEffect(() => {
    if (
      form?.canMakeIt === true &&
      form?.name &&
      form?.age &&
      form?.contact
    ) {
      // Don't really do anything
    } else {
      window.alert('Failed to reply, we\'d love to have your here. Please try again!')
      handlePageChange('start')
    }
  }, [form])
  return (
    <section 
      className={"flex flex-col justify-center items-center px-4 text-indigo-700"}
    >
      <p className={"text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold"}>
        SEE YOU ON FRIDAY, THE 4TH
      </p>
      <p 
        className={"w-9/12 mx-auto text-center py-2 md:w-4/12 md:text-xl lg:w-3/12"}
      >
        That's it <u className={"font-semibold"}>{form?.name || ""}</u>.
        You're on the list with {
          form?.companions ? <u className={"font-semibold"}>{`${form.companions} companions`
        }</u> : "no companions"}.
      </p>
    </section>
  )
}
export default End