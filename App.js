import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [localizacao, setLocalizacao] = useState({
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  /* Coordenadas para o MapView */
  const regiaoInicialMapa = {
    /* // Brasil
    latitude: -10,
    longitude: -55, */

    // São Paulo
    latitude: -23.533773,
    longitude: -46.65529,

    /* Definição do zoom do mapa.
    Quanto menor, mais próximo o mapa.
    Quanto maior, mais longe o mapa fica */
    latitudeDelta: 40,
    longitudeDelta: 40,
  };

  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao, // usando para pegar/manter os deltas

      // Obtendo novos valores a partir do evento de pressinar
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <MapView
          onPress={marcarLocal}
          mapType="standard"
          style={styles.mapa}
          initialRegion={regiaoInicialMapa}
        >
          <Marker coordinate={localizacao}>
            <Image source={require(`./assets/ghost.png`)} />
          </Marker>
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});
