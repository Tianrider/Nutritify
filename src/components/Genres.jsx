const Genres = ({ percentageData }) => {
  const capitalizeFirstWord = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <tbody>
      {percentageData.map((genreItem, index) => (
        <tr key={index}>
          <th>{capitalizeFirstWord(genreItem.genre)}</th>
          <td>{`${genreItem.percentage.toFixed(0)}%`}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Genres;
