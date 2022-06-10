// create variable to hold db connection
let db;

// establish a connection to IndexedDB database called 'transactions' and set it to version 1
const request = indexedDB.open('budget', 1);

// this event will emit if the database version changes (nonexistent to version 1, v1, to v2, etc.)
request.onupgradeneeded = function (e) {
  // save a reference to the database
  const db = e.target.result;
  // create an object store (table) called 'new_transaction', set it to have an auto incrementing primary key of sorts
  db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon successful connection
request.onsuccess = function (e) {
  // when db is successfully created with it's object store (from onupgradeneeded event above) or simply establish a connection,
  // save reference to db in global variable
  db = e.target.result;

  // check if app is online, if yes run uploadTransaction() function to send all local db data to api
  if (navigator.onLine) {
    uploadTransaction();
  }
};

request.onerror = function (e) {
  console.log(e.target.errorCode);
};

// this function will be executed if we attempt to submit a new pizza and there's no internet connection
function saveRecord(record) {
  const transaction = db.transaction(['new_transaction'], 'readwrite');

  const transactionObjectStore = transaction.objectStore('new_transaction');

  // add record to your store with add method
  transactionObjectStore.add(record);
};

function uploadTransaction() {
  //open a transaction on your pending db
  const transaction = db.transaction(['new_transaction'], 'readwrite');

  // access your pending object store
  const transactionObjectStore = transaction.objectStore('new_transaction');

  // get all records from store and set to a variable
  const getAll = transactionObjectStore.getAll();

  getAll.onsuccess = function () {
    // if there was data in the indexedDB's store, let's send it to the api server
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(serverResponse => {
        if (serverResponse.message) {
          throw new Error(serverResponse);
        }

        const transaction = db.transaction(['new_transaction'], 'readwrite');
        const transactionObjectStore = transaction.objectStore('new_transaction');
        // clear all items in your store
        transactionObjectStore.clear();
      })
      .catch(err => console.log(err));
    }
  }
}

// listen for app coming back online
window.addEventListener('online', uploadTransaction);