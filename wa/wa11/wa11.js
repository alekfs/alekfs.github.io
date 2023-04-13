

document.getElementById('githubForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('githubUsername').value; // Get GitHub username input value for example alekfs
    // Fetch user profile data from GitHub API
    const endpoint = "https://api.github.com/users/"
    fetch(endpoint + username) // will fetch the Github API for if user enters alekfs: https://api.github.com/users/alekfs
    .then(response => response.json())
      .then(data => {
        var profile = document.getElementById('profileContainer');
        profile.innerHTML = `
          <h2>${data.login}</h2>
          <img src="${data.avatar_url}" alt="Avatar">
          <p>Name: ${data.name} </p>
          <p>ID: ${data.id}</p>
          <p>Bio: ${data.bio}</p>
          <p>Location: ${data.location}</p>
          <p>Public Repos: ${data.public_repos}</p>
          <p>Followers: ${data.followers}</p>`;
    })
    .catch(error => {
        console.error('Error fetching GitHub profile data:', error);
        var profile = document.getElementById('profile'); // error message in case of API fetch failure
        profile.innerHTML = `<p>Failed to fetch GitHub user data.</p>`;
    });
});

