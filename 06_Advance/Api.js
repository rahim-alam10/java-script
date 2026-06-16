const requestURL = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
            console.log("Error:", xhr.status);
            return;
        }

        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers);
    }
};
xhr.send();
