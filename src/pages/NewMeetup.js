import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useHistory} from 'react-router-dom'

function NewMeetup(){
    const history = useHistory();
    function addingMeetup(data){
        fetch('https://testing-74223-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => history.replace('/'));
    }

    return (
      <div>
        <h1>New Places</h1>
        <NewMeetupForm onAddMeetup={addingMeetup} />
      </div>
    );
}

export default NewMeetup;