const school = 'Abeda Bari School and College';

// console.log(school);


// const subject = "ChemIstry";  //letter is not same
// const book = 'chemistry';

// if (subject === book) {
//     console.log('This is the same book');
// }
// else {
//     console.log('This is not the same book');
// }



const subject = "ChemIstry";  //letter is not same
const book = 'chemistry';

if (subject.toLocaleLowerCase() === book.toLocaleLowerCase()) {
    console.log('This is the same book');
}
else {
    console.log('This is not the same book');
}