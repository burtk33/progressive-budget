let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore("pending", { 
    keyPath: "id",
    autoIncrement: true 
  });
};