import Card from "../UI/Card";
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react'


function NewMeetupForm(props) {
    const titleInput = useRef(); 
    const imageInput = useRef(); 
    const addressInput = useRef(); 
    const descriptionInput = useRef(); 

    function Submitting(event){
        event.preventDefault();
        const titleValue = titleInput.current.value;
        const imageValue = imageInput.current.value;
        const addressValue = addressInput.current.value;
        const descriptionValue = descriptionInput.current.value;
        const meetupData = {
            title: titleValue,
            image: imageValue,
            address: addressValue,
            description: descriptionValue
        };
        props.onAddMeetup(meetupData);
    }

    return (
      <Card>
        <form className={classes.form} onSubmit={Submitting}>
            <div className={classes.control}>
                <label htmlFor='title'>Name</label>
                <input type="text" required id='title' ref={titleInput} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type="url" required id='image' ref={imageInput}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Location</label>
                <input type="text" required id='address' ref={addressInput} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Famous For ?</label>
                <textarea name="description" required id="description" rows="5" ref={descriptionInput} ></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
      </Card>
    );
}

export default NewMeetupForm;
