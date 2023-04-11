

document.getElementById('githubForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('githubUsername').value; // Get GitHub username input value for example alekfs
    // Fetch user profile data from GitHub API
    const endpoint = "https://api.github.com/users/"
    fetch(endpoint + username) // will fetch the Github API for https://api.github.com/users/alekfs
    .then(response => response.json())
      .then(data => {
        // Update HTML with profile data
        var profileContainer = document.getElementById('profileContainer');
        profileContainer.innerHTML = `
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
        // Display error message in case of API fetch failure
        var profileContainer = document.getElementById('profileContainer');
        profileContainer.innerHTML = `<p>Failed to fetch GitHub user data.</p>`;
    });

});

