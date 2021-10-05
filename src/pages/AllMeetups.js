import MeetupList from "../components/meetup/MeetupsList";
import { useState, useEffect } from "react";

function AllMeetups(){
  const [loading, setLoading] = useState(true); 
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://testing-74223-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        const meetups = [];
        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if(loading){
    return <section>
      <p>Loading...</p>
    </section>
  }

    return (
        <div>
            <h1>All Places</h1>
            <MeetupList content={loadedMeetups} />
        </div>
    );
}

export default AllMeetups;