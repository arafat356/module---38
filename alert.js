// alert 
console.log('i am here');
const maComing = () => {
    alert('Mother is coming please dont use your phoen')
};

// response comfirm asking from user    
const askGoing = () => {
        const response = confirm('Are you Coming with us');
        console.log(response);
        if (response === true) {
            alert('Send the fee on my Account');

        } else {
            console.log('go from here and die')
        }
    }
    // ask name 
const AskName = () => {
    const name = prompt('What is your name!!');
    if (name) {
        console.log(name)
    }
}