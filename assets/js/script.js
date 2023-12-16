function fetchData(url) {
  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((myResponse) => {
      console.log(myResponse);
      handleSuccess(myResponse);
    })
    .catch((err) => {
      console.log(err);
      handleError(err.message);
    });
}

// success Callback
function handleSuccess(response) {
  const items = document.querySelectorAll(".dynamic-items");

  setTimeout(() => {
    spin.remove();
    for (const index in response) {
      items[index].innerHTML += `<div class="col col-12 col-md ms-lg-4">
                          <h3 class="title">
                           ${response[index].title}
                          </h3>
                          <p class="mb-4 mb-md-3 description">
                          ${response[index].description}
                          </p>
                        </div>
                        <div class="col col-12 col-md-5 me-lg-4">
                          <div class="img">
                            <img
                              class="rounded-circle image"
                              src="${response[index].image}"
                              alt="Rock musician"
                            />
                          </div>
                        </div>`;
    }
  }, 2000);
}

// error Callback
function handleError(message) {
  spin.remove();
  alert(`There was a problem with the request. Status: ${message}`);
}

window.addEventListener("load", () => {
  fetchData(
    "https://my-json-server.typicode.com/zoelounge/menupizza/dataLanding"
  );
});
