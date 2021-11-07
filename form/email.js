const AWS = require("aws-sdk");
const appId = "275aeaff1c204626ad7b5d3d6f76ed03";
const pinpoint = new AWS.Pinpoint();

module.exports = {
  async customer(body) {
    const senderAddress = "o@matmail.me";
    const toAddress = body.email;
    const subject = "We have received your inquiry";
    const fname = body.fname;
    const lname = body.lname;
    const message = body.message;
    const date = body.date;
    const phone = body.phone;
    const bodytext = message;
    const bodyhtml = `<!DOCTYPE html>
        <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
        
        <head>
            <title></title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
                * {
                    box-sizing: border-box;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                }
        
                th.column {
                    padding: 0
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }
        
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }
        
                p {
                    line-height: inherit
                }
        
                @media (max-width:520px) {
                    .row-content {
                        width: 100% !important;
                    }
        
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
                }
            </style>
        </head>
        
        <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
                <tbody>
                    <tr>
                        <td>
                            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000;" width="500">
                                                <tbody>
                                                    <tr>
                                                        <th class="column" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td>
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #393d47; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;">Hi ${fname},&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px;">We have received your inquiry. Please see a copy for your records below.&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px;">If you need to contact us sooner, please call Laura on <a href="tel:+61422154110" target="_blank" title="tel:+61422154110" style="text-decoration: underline; color: #8a3b8f;" rel="noopener">0422 154 110</a></p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px;">Name:&nbsp;${fname}&nbsp;${lname}</p>
                                                                                <p style="margin: 0; font-size: 14px;">Email:&nbsp;${toAddress}</p>
                                                                                <p style="margin: 0; font-size: 14px;">Phone:&nbsp;${phone}</p>
                                                                                <p style="margin: 0; font-size: 14px;">Message:&nbsp;${message}</p>
                                                                                <p style="margin: 0; font-size: 14px;">Booking date:&nbsp;${date}</p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px;">Have a lovely day :)&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px;">- Laura from Farm Kitchen</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table><!-- End -->
        </body>
        
        </html>`;
    const charset = "UTF-8";

    const params = {
      ApplicationId: appId,
      MessageRequest: {
        Addresses: {
          [toAddress]: {
            ChannelType: "EMAIL",
          },
        },
        MessageConfiguration: {
          EmailMessage: {
            FromAddress: senderAddress,
            SimpleEmail: {
              Subject: {
                Charset: charset,
                Data: subject,
              },
              HtmlPart: {
                Charset: charset,
                Data: bodyhtml,
              },
              TextPart: {
                Charset: charset,
                Data: bodytext,
              },
            },
          },
        },
      },
    };
    try {
      await pinpoint.sendMessages(params).promise();
      return "Customer message sent";
    } catch (e) {
      console.log(e.message);
      return JSON.stringify(e);
    }
  },
  async store(body) {
    const senderAddress = "o@matmail.me";
    const toAddress = "lauramathias65@icloud.com";
    const fname = body.fname;
    const lname = body.lname;
    const email = body.email;
    const subject = `New inquiry - ${fname} ${lname}`;
    const message = body.message;
    const date = body.date;
    const phone = body.phone;
    const bodytext = message;
    const bodyhtml = `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            th.column {
                padding: 0
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            @media (max-width:520px) {
                .row-content {
                    width: 100% !important;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
            }
        </style>
    </head>
    
    <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
            <tbody>
                <tr>
                    <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000;" width="500">
                                            <tbody>
                                                <tr>
                                                    <th class="column" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td>
                                                                    <div style="font-family: sans-serif">
                                                                        <div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #393d47; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                            <p style="margin: 0; font-size: 14px;">Hi team,&nbsp;</p>
                                                                            <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                            <p style="margin: 0; font-size: 14px;">You have received a new website inquiry from ${fname} ${lname}.</p>
                                                                            <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                            <p style="margin: 0; font-size: 14px;">Name: ${fname} ${lname}</p>
                                                                            <p style="margin: 0; font-size: 14px;">Email: ${email}</p>
                                                                            <p style="margin: 0; font-size: 14px;">Phone: ${phone}</p>
                                                                            <p style="margin: 0; font-size: 14px;">Message: ${message}</p>
                                                                            <p style="margin: 0; font-size: 14px;">Booking date: ${date}</p>
                                                                            <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">&nbsp;</p>
                                                                            <p style="margin: 0; font-size: 14px;">Have a lovely day :)&nbsp;</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>
    
    </html>`;
    const charset = "UTF-8";

    const params = {
      ApplicationId: appId,
      MessageRequest: {
        Addresses: {
          [toAddress]: {
            ChannelType: "EMAIL",
          },
        },
        MessageConfiguration: {
          EmailMessage: {
            FromAddress: senderAddress,
            SimpleEmail: {
              Subject: {
                Charset: charset,
                Data: subject,
              },
              HtmlPart: {
                Charset: charset,
                Data: bodyhtml,
              },
              TextPart: {
                Charset: charset,
                Data: bodytext,
              },
            },
          },
        },
      },
    };
    try {
      await pinpoint.sendMessages(params).promise();
      return "Store message sent";
    } catch (e) {
      console.log(e.message);
      return JSON.stringify(e);
    }
  },
};
