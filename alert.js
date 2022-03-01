console.log('i am here');
// alert('ma is coming');
const maComing = () => {
    alert('Mother is coming please dont use your phoen')
};
const askGoing = () => {
    const response = confirm('Are you Coming with us');
    console.log(response);
    if (response === true) {
        alert('Send the fee on my Account');

    } else {
        console.log('go from here and die')
    }
}