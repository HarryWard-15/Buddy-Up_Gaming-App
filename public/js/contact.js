// // all emails are catched by ethereal.email
// var mailConfig = {
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'ethereal.user@ethereal.email',
//             pass: 'verysecret'
//         }}

// const contactSubmitBtnHandler = async (event) =>{
//     event.preventDefault();

//     const contactName = document.querySelector("#inputName").value;
//     const contactDiscordLink = document.querySelector("#inputDiscord").value;
//     const contactMessage = document.querySelector("#inputTextArea").value;
//     // const contactId = req.params.id

//     // clg used for debugging
//     console.log("Contact Name:");
//     console.log(contactName);
//     console.log("Contact Discord link:");
//     console.log(contactDiscordLink);
//     console.log("Contact Message:");
//     console.log(contactMessage);
//     // console.log("Contact ID:");
//     // console.log(contactId);

//     if(contactName && contactDiscordLink && contactMessage){
//         const response = await email.send({
//             Host: 'smtp.ethereal.email',
//             Username:'ethereal.user@ethereal.email',
//             Password: 'verysecret',
//             // To:
//         });

//         if(response.ok) {
//             console.log("response ok"); //used for debugging
//             // document.location.replace(FIXME:)
//         }else{
//             alert("Failed to send a message - please try again.");
//         }
//     }else{
//         alert("Please ensure you have all the sections.");
//     }
// };

// const contactSubmitBtn = document.querySelector("#submit");
// contactSubmitBtn.addEventListener("click", contactSubmitBtnHandler);

const sendEmailHandler = async (event) => {
  event.preventDefault();

  // get contact details from form

  const contactName = document.querySelector("#inputName").value;
  const contactDiscordLink = document.querySelector("#inputDiscord").value;
  const contactMessage = document.querySelector("#inputTextArea").value;

  console.log("Contact Name:");
  console.log(contactName);
  console.log("Contact Discord link:");
  console.log(contactDiscordLink);
  console.log("Contact Message:");
  console.log(contactMessage);

  // get request data from database
  if (contactName && contactDiscordLink && contactMessage) {
    const response = await fetch(`/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("response ok"); //used for debugging

      console.log("Requests:");
      console.log(requests);
      console.log("Games:");
      console.log(games);
      console.log("Consoles:");
      console.log(consoles);
    } else {
      alert("Failed to send a message - please try again.");
    }
  } else {
    alert("Please ensure you have all the sections.");
  }

  // // send email
  // Email.send({
  //     Host : "smtp.mailtrap.io",
  //     Username : "8dac9b26b2311f>",
  //     Password : "c46e63051c2572",
  //     To : 'recipient@example.com',
  //     From : "sender@example.com",
  //     Subject : "Test email",
  //     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  //   }).then(
  //     message => alert(message)
  //   );
};

const contactSubmitBtn = document.querySelector("#submit");
contactSubmitBtn.addEventListener("click", sendEmailHandler);
