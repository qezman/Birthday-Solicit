import { collection, getDocs } from "firebase/firestore";
import React from "react";

import { db } from "../firebase";

const Dashboard = () => {
  const [invites, setInvites] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const invites = [];
    getDocs(collection(db, "invites"))
      .then((docsSnap) => {
        docsSnap.forEach((doc) => {
          const data = doc.data();
          invites.push(data);
        });
      })
      .catch((error) => {
        window.alert("ERROR :>> " + error.message);
      })
      .finally(() => {
        setInvites(invites);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className={
        "p-3 bg-indigo-400 text-white h-screen text-center text-xs md:text-lg lg:text-xl"
      }
    >
      <h1
        className={
          "text-lg md:text-xl lg:text-2xl uppercase py-4 tracking-wider font-semibold"
        }
      >
        Invites Dashboard
      </h1>
      {loading ? (
        <h1 className="my-10 text-center text-2xl">Loading...</h1>
      ) : invites.length > 0 ? (
        <table className="border-separate  w-full border border-slate-400 ...">
          <thead>
            <tr className={"text-lg md:text-xl lg:text-2xl"}>
              <th className="border border-slate-300 ...">S/N</th>
              <th className="border border-slate-300 ...">Name</th>
              <th className="border border-slate-300 ...">Age</th>
              <th className="border border-slate-300 ...">Phone Number</th>
              <th className="border border-slate-300 ...">Companions</th>
              <th className="border border-slate-300 ...">Date Registered</th>
            </tr>
          </thead>
          <tbody>
            {invites.map((invite, id) => (
              <tr key={id}>
                <td className="border border-slate-300 ...">{id + 1}</td>
                <td className="border border-slate-300 ...">{invite.name}</td>
                <td className="border border-slate-300 ...">{invite.age}</td>
                <td className="border border-slate-300 ...">
                  {invite.contact}
                </td>
                <td className="border border-slate-300 ...">
                  {invite.companions || 0}
                </td>
                <td className="border border-slate-300 ...">
                  {new Date(invite.date || 0).toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="my-10 text-center text-2xl">
          There are no invites yet.
        </h1>
      )}
    </section>
  );
};

export default Dashboard;
