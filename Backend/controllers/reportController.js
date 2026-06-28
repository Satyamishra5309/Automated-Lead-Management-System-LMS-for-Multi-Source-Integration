import Lead from "../model/Lead.js";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";


export const exportExcelReport =
 async (req,res)=>{

  try {

    const leads =
      await Lead.find();


    const workbook =
      new ExcelJS.Workbook();

    const worksheet =
      workbook.addWorksheet(
        "Leads Report"
      );


    worksheet.columns = [

      {
        header:"Name",
        key:"name",
        width:20
      },

      {
        header:"Email",
        key:"email",
        width:25
      },

      {
        header:"Phone",
        key:"phone",
        width:20
      },

      {
        header:"Source",
        key:"source",
        width:15
      },

      {
        header:"Status",
        key:"status",
        width:15
      },

      {
        header:"Campaign",
        key:"campaign",
        width:20
      }
    ];


    leads.forEach((lead)=>{

      worksheet.addRow({

        name:lead.name,

        email:lead.email,

        phone:lead.phone,

        source:lead.source,

        status:lead.status,

        campaign:lead.campaign
      });
    });


    res.setHeader(

      "Content-Type",

      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );


    res.setHeader(

      "Content-Disposition",

      "attachment; filename=leads-report.xlsx"
    );


    await workbook.xlsx.write(
      res
    );

    res.end();

  } catch(error){

    res.status(500).json({

      message:error.message
    });
  }
};





export const exportPDFReport =
 async (req,res)=>{

  try {

    const leads =
      await Lead.find();


    const doc =
      new PDFDocument();


    res.setHeader(

      "Content-Type",

      "application/pdf"
    );


    res.setHeader(

      "Content-Disposition",

      "attachment; filename=leads-report.pdf"
    );


    doc.pipe(res);


    doc.fontSize(20)
       .text(
         "Leads Report"
       );


    doc.moveDown();


    leads.forEach((lead)=>{

      doc.text(

       `Name: ${lead.name}
        | Phone: ${lead.phone}
        | Source: ${lead.source}
        | Status: ${lead.status}`

      );

      doc.moveDown();
    });


    doc.end();

  } catch(error){

    res.status(500).json({

      message:error.message
    });
  }
};