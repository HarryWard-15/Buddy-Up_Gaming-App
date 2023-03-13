const requestBtnHandler = async (event) => {
  event.preventDefault();

  const consoleDB = document.querySelector("#console-request").value;
  console.log(consoleDB);
  const game = document.querySelector("#game-request").value;
  console.log(game);
  const dateTime = document.querySelector("#meeting-time").value;
  console.log(dateTime);

  if (consoleDB && game && dateTime) {
    const response = await fetch(`/requests`, {
      method: "POST",
      body: JSON.stringify({ consoleDB, game, dateTime }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("response ok");
      document.location.replace("/requests");
    } else {
      alert("Failed to create request - please try again.");
    }
  } else {
    alert("Please ensure you have all the sections.");
  }
};

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", requestBtnHandler);
