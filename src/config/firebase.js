const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json'); // Ganti dengan path ke file kunci akun layanan Firebase Anda (contoh: 'serviceAccountKey'); // Ganti dengan path ke file kunci akun layanan Firebase Anda

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expressblog-534ef.firebaseio.com" // Ganti dengan URL proyek Firebase Anda
});

const db = admin.firestore();

module.exports = { db };