

const submitBtn = document.querySelector('.submit');

const outputPosts = (data) => {
    console.log(data);
}


const addPost = async (event) => {
    const title = document.querySelector('input[name="title"]').value;
    const message = document.querySelector('input[name="message"]').value;

    event.preventDefault();
    const data = {
        message: message,
        title: title
    }
    console.log(data);
    
    const response = await fetch('/post', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard');
    } else if (err){
        console.log(err);
    } 
    
};


submitBtn.addEventListener('click', addPost);