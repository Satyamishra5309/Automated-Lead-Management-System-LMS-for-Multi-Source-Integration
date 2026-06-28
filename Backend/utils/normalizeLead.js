const normalizeWebsiteLead = (lead) => {

  return {

    name: lead.name || "Unknown",

    email: lead.email || "",

    phone: lead.phone || "9999999999",

    service: lead.service || "",

    source: "website",

    campaign: "",

    keyword: "",

    status: "new"
  };
};


const normalizeMetaLead =
 (lead)=>{

  return {

    name:
      lead.firstName || "Unknown",

    email:
      lead.email || "",

    phone:
      lead.phone || "",

    service:"",

    source:"facebook",

    campaign:"",

    keyword:"",

    status:"new"
  };
};


const normalizeGoogleLead =
 (lead)=>{

  return {

    name:
      lead.name.first || "Unknown",

    email:
      lead.email || "",

    phone:
      lead.phone || "",

    service:"",

    source:"google",

    campaign:"",

    keyword:"",

    status:"new"
  };
};


export {

  normalizeWebsiteLead,

  normalizeMetaLead,

  normalizeGoogleLead
};