const Song = (props) => {
  return (
    <tr className="h-6">
      <th colSpan="1">
        <strong>{props.title}</strong>
        {" " + props.artist}
      </th>
      <td>{props.duration}</td>
    </tr>
  );
};

export default Song;
