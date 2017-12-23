const addbtn = document.querySelector("#add");

add.addEventListener('click', addToPlaylist);

function addToPlaylist (id) {
   // e.preventDefault();
    axios.post(`${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}