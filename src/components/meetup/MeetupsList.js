import Items from "./MeetupItems";
import classes from './MeetupList.module.css'

function MeetupList(props) {
    return (
      <section>
        <ul className={classes.list}>
          {props.content.map((data) => (
            <Items
              key={data.id}
              id={data.id}
              title={data.title}
              image={data.image}
              address={data.address}
              description={data.description}
            />
          ))}
        </ul>
      </section>
    );
}

export default MeetupList;