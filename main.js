const LinksSocialMedia = {
  github: 'DiegoReports',
  instagram: 'guinho_dihenrique',
  linkedin: 'in/diego-henrique-sg',
  whatsapp: 'send?phone=5515991295814&text=Ola!Acessei o seu Badge',
  codepen: 'diegoreports'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

/* changeSocialMediaLinks() */

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
