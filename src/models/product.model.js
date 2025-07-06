import { db } from '../config/firebase.config.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getProductById(id) {
  const productDoc = doc(db, 'products', id);
  const productSnapshot = await getDoc(productDoc);
  if (!productSnapshot.exists()) return null;
  return { id: productSnapshot.id, ...productSnapshot.data() };
}

export async function createProduct(productData) {
  const docRef = await addDoc(productsCollection, productData);
  return { id: docRef.id, ...productData };
}

export async function deleteProduct(id) {
  const productDoc = doc(db, 'products', id);
  await deleteDoc(productDoc);
}
