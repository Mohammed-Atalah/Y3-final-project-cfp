import "../styles/Item.css";

function Item({ data }) {
  return (
    <div style={{ display: "flex" }} className="item">
      {data.imgUrl && <img className="itemImg" src={data.imgUrl} alt="Logo" />}
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
