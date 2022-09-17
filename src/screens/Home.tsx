import { useEffect, useState } from "react";

import { Center, Text, Button } from "native-base";

import * as Location from "expo-location";
import { API } from "../api";

export function Home() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getCurrentPosition = async (): Promise<void> => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location?.coords;
      (async () => {
        try {
          const { data } = await API.LOCATION_BY_COORDINATES(
            latitude,
            longitude
          );
          setWeather(data);
        } catch (error) {
          setErrorMsg(error.message);
        }
      })();
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <Center flex={1}>
      <Text>{weather.name}</Text>
      <Text>{weather.sys.country}</Text>
      <Text>{weather.weather[0].main}</Text>
      <Text>{weather.main.temp}ºC</Text>
      <Button onPress={getCurrentPosition}>Get Position</Button>
    </Center>
  );
}
