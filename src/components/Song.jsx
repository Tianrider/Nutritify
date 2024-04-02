const Song = (props) => {
  return (
    <tr className="h-6">
      <th colSpan="1">
        <a href={props.link} target="blank">
          <strong>{props.title}</strong>
          {" " + props.artist}
        </a>
      </th>
      <td>{props.duration}</td>
    </tr>
  );
};

export default Song;
