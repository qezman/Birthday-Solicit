const Dashboard = () => {
  return (
    <section className={"p-3 bg-indigo-400 text-white h-screen text-center text-xs md:text-lg lg:text-xl"}>
      <h1 className={"text-lg md:text-xl lg:text-2xl uppercase py-4 tracking-wider font-semibold"}>Invites Dashboard</h1>
      <table className="border-separate  w-full border border-slate-400 ...">
        <thead>
        <tr  className={"text-lg md:text-xl lg:text-2xl"}>
          <th className="border border-slate-300 ...">Name</th>
          <th className="border border-slate-300 ...">Age</th>
          <th className="border border-slate-300 ...">Number</th>
          <th className="border border-slate-300 ...">Invites</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="border border-slate-300 ...">Sarah</td>
          <td className="border border-slate-300 ...">3</td>
          <td className="border border-slate-300 ...">934803</td>
          <td className="border border-slate-300 ...">5</td>
        </tr>
        <tr>
          <td className="border border-slate-300 ...">David</td>
          <td className="border border-slate-300 ...">7</td>
          <td className="border border-slate-300 ...">934803</td>
          <td className="border border-slate-300 ...">5</td>

        </tr>
        <tr>
          <td className="border border-slate-300 ...">Dan</td>
          <td className="border border-slate-300 ...">2</td>
          <td className="border border-slate-300 ...">934803</td>
          <td className="border border-slate-300 ...">5</td>

        </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Dashboard