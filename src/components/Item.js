import "../styles/Item.css";

function Item({ data }) {
  console.log(data.imgURL);
  return (
    <div style={{ display: "flex" }} className="item">
      {data.imgURL && <img className="itemImg" src={data.imgURL} alt="Logo" />}
      <div>
        {data.title && <p className="itemTitle">{data.title}</p>}
        {data.organizer && <p className="itemOrganizer">{data.organizer}</p>}
        {data.deadline && <p className="itemDeadline">{data.deadline}</p>}
        {data.link && (
          <p>
            <a className="itemLearnMore" href={data.link} target="_blank">
              Learn more >
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Item;
