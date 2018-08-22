import request from 'superagent'

request.get('https://api.github.com/users/DanRCoda')
  .then(response => {
    displayProfile(response.body)
  })

function displayProfile (results) {
  let output = `
    <div id="header_class">
    <h1>${results.name}</h1>
    </div>
    <div id="contact_class">
      <ul>
        <li>Name: ${results.name}</li>
        <li>City: ${results.location}</li>
        <li>Github: ${results.html_url}</li>
    </div>
    <div id="bio_class">
    <p>${results.bio}</p>
    <img src = "${results.avatar_url}" alt="${results.name}">
    </div>
    `
  document.getElementById('output').innerHTML = output
}
