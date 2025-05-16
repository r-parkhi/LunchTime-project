import { useEffect, useState } from "react";
import "./StarRating.css"
import { addRating, getUserRating } from "../../lib/db";
import { auth } from "../../firebase";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase"



const defaultIcon = "★";

export default function StarRating({ productId, count, icon }) {
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState(Math.floor(count));
  const [popupVisible, setPopupVisible] = useState(false);
  const [allRatingList, setAllRatingList] = useState();

  const handlePopup = () => {
    if (popupVisible == false){
      setPopupVisible(true);
    }
    else{
      setPopupVisible(false);
    }
  }

  let stars = Array(5).fill(icon || defaultIcon);

  useEffect(() => {
    const fetchRating = async () => {
      if (!auth.currentUser) return;
      const r = await getUserRating(auth.currentUser.uid, productId);
      if (r !== null) {
        setRating(r);
      }
    };
    fetchRating();
  }, [productId]);

  useEffect(() => {
    const makeRatingArray = async () =>{
      const firestoreRatings = await fetchAllRatings();
      console.log(firestoreRatings);
      const firestoreAvRating = ArraySum(firestoreRatings) / firestoreRatings.length;
      console.log("FSAv is "+firestoreAvRating);
      const roundedAv = Math.round(firestoreAvRating);
      if(!isNaN(firestoreAvRating)){
      setAllRatingList(roundedAv);
      }
      else{
        setAllRatingList(count)
      }
    }
    makeRatingArray();
  },[]);

  const ArraySum = (numbers) => {
    console.log(numbers);
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }

  let finalFSRatings = [];
  let finalFSArray = [];


  const fetchAllRatings = async () => {
    console.log("ranRatingFetch")
    const snapshot = await getDocs(collection(db, 'userRatings'));
    
    for(const snap of snapshot.docs){

    // snapshot.forEach (async (element) => {
    // console.log(element.id);
    finalFSRatings.push (await findFSRatings(snap.id));
    finalFSArray = finalFSRatings.filter(x => !isNaN(x))
    // console.log(finalFSArray);
  }
  // console.log(finalFSArray);
  return finalFSArray;
  }
  const findFSRatings = async (docId) => {
    const getRatingDoc = await getDoc(doc(db, `userRatings`,docId));
    if (getRatingDoc.exists()){
      const data = getRatingDoc.data();
      if (data.productId == productId)
      // console.log(data.rating);
      return(data.rating);
    }
    // return("doesNotExist");
  }



  const handleClick = (rating) => {
    setRating(rating);
    setRated(true);
    localStorage.setItem("starRating", rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("Please sign in to submit a rating!");
      return;
    }
    if (!rated) {
      alert("Please select a rating first!");
      return;
    }

    try {
      await addRating(user.uid, productId, rating);
      alert(`Submitted rating ${rating} / 5`)
    } catch (err) {
      alert(err)
    }
    setPopupVisible(false);
  }

  return (
    <>
    <h2 className="averageStars">{allRatingList}★</h2>
    <button onClick={handlePopup} className="openSubmitBtn">Add A Rating</button>
    

      {popupVisible && (
      <div className="popupStars">

        <button onClick={handleSubmit} className="realSubmitBtn">Submit</button>

        {stars.map((item, index) => {
          const isActiveColor =
            (rating) &&
            (index < rating);

          let elementColor = "";

          if (isActiveColor) {
            elementColor = "gold";
          } else {
            elementColor = "gray";
          }

          return (
            <div
              key={index}
              style={{
                fontSize: "35px",
                color: elementColor,
                filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
                display: "inline",
                padding: "5px",
                borderColor: "black",
                border: "20px",
                cursor: "pointer",
              }}
              onClick={() => handleClick(index + 1)}
            >
              {icon ? icon : defaultIcon}
            </div>
          );
        })}
      </div>
      )}
    </>
  );
}