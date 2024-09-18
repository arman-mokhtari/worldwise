/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first City by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;