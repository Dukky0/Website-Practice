window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if (!accessToken) {
        return (document.getElementById('login-btn').style.display = 'block');
    }

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
        .then(result => result.json())
        .then(response => {
            const { id, username, discriminator, avatar } = response;
            document.getElementById('info').innerText = `${username}#${discriminator}`; 
            // document.getElementById('login-btn').innerHTML = `<img src="https://cdn.discordapp.com/avatars/${id}/${avatar}.png/" width="36px" height="36px" style="border-radius: 50%"></img>`;
        })
        .catch(console.error);
};