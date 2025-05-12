import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";

export const userRatingsCollection = collection(db, "userRatings");
export const userFavoritesCollection = collection(db, "userFavorites");

export const addRating = async (userId, productId, rating) => {
  // First check if a rating already exists for this user and product
  const existingRating = await getDocs(query(userRatingsCollection,
    where("userId", "==", userId),
    where("productId", "==", productId)
  ));

  if (!existingRating.empty) {
    // If rating exists, update it
    const docRef = existingRating.docs[0].ref;
    await updateDoc(docRef, {
      rating: rating
    });
  } else {
    // If no rating exists, create new one
    const ratingObj = {
      userId: userId,
      productId: productId,
      rating: rating
    };
    await addDoc(userRatingsCollection, ratingObj);
  }
}

export const getUserRating = async (userId, productId) => {
  const existingRating = await getDocs(query(userRatingsCollection,
    where("userId", "==", userId),
    where("productId", "==", productId)
  ));

  if (existingRating.empty) {
    return null;
  }

  return existingRating.docs[0].data().rating;
}

export const toggleFavorite = async (userId, productId, state) => {
  // First check if a favorite already exists for this user and product
  const existingFavorite = await getDocs(query(userFavoritesCollection,
    where("userId", "==", userId),
    where("productId", "==", productId)
  ));

  if (!existingFavorite.empty) {
    // If favorite exists, update its state
    const docRef = existingFavorite.docs[0].ref;
    await updateDoc(docRef, {
      state: state
    });
  } else {
    // If no favorite exists, create new one
    const favoriteObj = {
      userId: userId,
      productId: productId,
      state: state
    };
    await addDoc(userFavoritesCollection, favoriteObj);
  }
}

export const getUserItemFavoritedState = async (userId, productId) => {
  const existingFavorite = await getDocs(query(userFavoritesCollection,
    where("userId", "==", userId),
    where("productId", "==", productId)
  ));

  if (existingFavorite.empty) {
    return null;
  }

  return existingFavorite.docs[0].data().state;
}