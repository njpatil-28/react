
export const githubInfoLoader = () => {
    return fetch('https://api.github.com/users/hiteshchoudhary')
        .then(resp => resp.json())
}
