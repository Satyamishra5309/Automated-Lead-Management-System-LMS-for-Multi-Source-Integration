import axios from "axios";

const fetchWebsiteLeads =
  async () => {

  try {

    const response =
      await axios.get(

        process.env.WEBSITE_API_URL

      );

    return response.data;

  } catch(error){

    throw new Error(
      error.message
    );
  }
};

export default fetchWebsiteLeads;