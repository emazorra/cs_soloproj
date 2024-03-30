document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelector('#page-login')
      
    document
    .getElementById('btnLogin').addEventListener('#submit', userLogin)

})

const url = 'http://localhost:3000/'

//request to sign in that the dom serves up
//post request to database


const userLogin = async (event) => {
  event.preventDefault();

  const formData = new FormData(this);
  const username = formData.get('username');
  const password = formData.get('password');

try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error('Login Failed');
    }

    

    console.log('Login Successful');
} catch (error) {
    console.log('Login failed: ', error.message);
}
}