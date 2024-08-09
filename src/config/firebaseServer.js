// Firebase Admin SDK (Server-side)
const admin = require("firebase-admin");
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth: getAdminAuth } = require('firebase-admin/auth');

// Use the correct path to your service account key JSON file
const serviceAccount = require("../../serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://expressblog-534ef.firebaseio.com", // Use your Firebase project's database URL
});

// Initialize Firestore and Admin Auth
const db = getFirestore();
const adminAuth = getAdminAuth();

// Exporting Admin SDK objects for server-side usage
module.exports = {
  db,
  adminAuth,
  admin, // Export the admin object if needed elsewhere
};
