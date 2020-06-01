// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }



// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// })




// database.ref('expenses').push({
//     descripition: 'Second Expenses description',
//     note: 'Second Expenses note',
//     createdAt: 121214325
// })


//database.ref('notes/-M8VMRA6a09BWw7oUF_f').remove()

// const notes = [{
//     id: '123abv',
//     title: 'first note',
//     body: 'body for the first note'
// },
// {
//     id: '213abv',
//     title: 'second note',
//     body: 'body for the second note'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e)=> {
    //console.log('Error', e);   
//})

// setTimeout(() => {
//     database.ref('age').set(26)
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(21)
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val);
//     }).catch((err) => {
//         console.log('Eror fetching data', e);
//     });


// database.ref().set({
//     name: 'Sushan',
//     age: 21,
//     stressLevel: 6,
//     isSingle: true,
//     job: { title: 'Software developer', company: 'Google' },
//     location: {
//         city: 'Chandranigahpur',
//         country: 'Nepal'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);

// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref().remove().then(() => {
//     console.log('data is removed!');
// }).catch((e) => {
//     console.log('This failed.', e);
// })