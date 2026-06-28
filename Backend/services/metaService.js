import axios from "axios";

const fetchMetaLeads =
 async()=>{

  try {

    const response =
      await axios.get(

      `https://graph.facebook.com/v22.0/${process.env.META_FORM_ID}/leads`,

      {

        params:{

          access_token:
            process.env.META_ACCESS_TOKEN
        }
      }
    );

    return response.data.data;

  } catch(error){

    throw new Error(
      error.message
    );
  }
};

export default fetchMetaLeads;


//the below code is used for testing with dummy api data

// export default fetchMetaLeads;

// import axios from "axios";

// const fetchMetaLeads =
//  async()=>{

//   const response =
//     await axios.get(
//       "https://dummyjson.com/users"
//     );

//   return response.data.users;
// };

