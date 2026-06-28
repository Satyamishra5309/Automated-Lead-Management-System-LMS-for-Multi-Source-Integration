import Badge from "../ui/Badge";
import { useDispatch } from "react-redux";
import { updateLead } from "../../features/lead/leadSlice";

const LeadTable = ({ leads }) => {

  const dispatch = useDispatch();

  const handleStatusChange = (

    id,

    status,

    assignedTo

  ) => {

    dispatch(

      updateLead({

        id,

        data: {

          status,

          assignedTo
        }
      })
    );
  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 overflow-x-auto">

      <table className="w-full min-w-[750px]">

        <thead>

          <tr className="border-b text-left text-gray-500 text-sm md:text-base">

            <th className="pb-3">Lead</th>

            <th className="pb-3">Source</th>

            <th className="pb-3">Status</th>

            <th className="pb-3">Assigned</th>

            <th className="pb-3">Date</th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead)=>(

            <tr

             key={lead._id}

             className="border-b h-20"
            >

              <td className="py-3">

                <p className="font-semibold">

                  {lead.name}

                </p>

                <p className="text-xs md:text-sm text-gray-400">

                  {lead.email}

                </p>

              </td>

              <td>

                <Badge

                 type={lead.source}

                 text={lead.source}
                />

              </td>

              <td>

                <select

                 value={lead.status}

                 onChange={(e)=>

                   handleStatusChange(

                    lead._id,

                    e.target.value,

                    lead.assignedTo
                   )
                 }

                 className="border rounded-lg px-2 md:px-3 py-2 text-sm"
                >

                  <option value="new">New</option>

                  <option value="contacted">

                    Contacted

                  </option>

                  <option value="converted">

                    Converted

                  </option>

                  <option value="lost">

                    Lost

                  </option>

                </select>

              </td>

              {/* ASSIGN */}

              <td>

                <select

                 value={lead.assignedTo}

                 onChange={(e)=>

                   handleStatusChange(

                    lead._id,

                    lead.status,

                    e.target.value
                   )
                 }

                 className="border rounded-lg px-2 md:px-3 py-2 text-sm"
                >

                  <option>

                    Unassigned

                  </option>

                  <option>

                    Sales Team A

                  </option>

                  <option>

                    Sales Team B

                  </option>

                  <option>

                    Follow Up Team

                  </option>

                </select>

              </td>

              <td className="text-sm">

                {
                  new Date(

                    lead.createdAt

                  ).toLocaleDateString()
                }

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default LeadTable;