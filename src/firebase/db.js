import { db } from "./firebase";

// the user is created as an object with the username and email properties.Furthermore,
// it is stored on the users / ${ id } resource path.
// So whenever you would want to retrieve a specific user from the Firebase database,
// you could get the one user via its unique identifier and the entity resource path.
const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email
    });

// users are retrieved from the general user’s entity resource path.
// The function will return all users from the Firebase realtime database.
const onceGetUsers = () => db.ref("users").once("value");

const doCreateExpense = (uid, date, expense, category, comments, day) => {
    db.ref(`expenses/`)
        .push()
        .set({
            uid,
            date,
            expense,
            category,
            comments,
            day
        });
};

const onceGetExpenses = () => db.ref("expenses").once("value");

const onceGetLoans = () => db.ref("loans").once("value");

const doCreateLoan = (uid, date, amount, loanType, reason, person, day, status) => {
    db.ref(`loans/`)
        .push()
        .set({
            uid,
            date,
            amount,
            loanType,
            reason,
            person,
            day,
            status
        });
};

//  const expensesRef = db.ref('expenses')
//     expensesRef.on('child_removed', function (data) {
//         console.log("child_removed")
//     });

// const allExpenses = () => {
//     return onceGetExpenses().then((data) => {
//          console.log(data.val())
//         }).catch(error => {
//             console.log(error)
//         });
// }

export { doCreateUser, onceGetUsers, doCreateExpense, onceGetExpenses, onceGetLoans, doCreateLoan };
