async function user_Auth() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/dll/authentication', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : 'email=' + email + '&password=' + password
        })
        if (response.ok) {
            const data = await response.json()
            if (data.Access == 'Granted') {
                window.location.href = '/'
            } else {
                document.getElementById('email').classList.replace('border-neutral-500', 'border-red-500')
                document.getElementById('password').classList.replace('border-neutral-500', 'border-red-500')
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const form = document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    await user_Auth() ;
})