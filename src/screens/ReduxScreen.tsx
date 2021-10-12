import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import MapView, { MapEvent, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
// files
import AmaranteText from '../components/common/AmaranteText';
import Colors from '../constants/Colors';
import { ThemedView } from '../components/common/Themed';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#cacfd9',
  },
  searchButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3e73de',
  },
  searchText: {
    color: '#fff',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default function ReduxScreen(): JSX.Element {
  const [text, setText] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, setMarkers] = useState<any>([]);

  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  useEffect(() => {
    console.info('location: ', location);

    if (location) {
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      Alert.alert(
        'Location',
        `lat: ${location.coords.latitude}, lng: ${location.coords.longitude}`,
        [
          {
            text: 'Cancel',
            onPress: () => console.info('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.info('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }, [location]);

  const onSearch = () => {
    setText('aaaaaa');
  };

  const onMapPress = (e: MapEvent) => {
    // console.info(e.nativeEvent);
    e.persist();

    setMarkers((prev: any) => [
      ...prev,
      {
        coordinate: e.nativeEvent.coordinate,
        key: Math.random() * 9999999999999999,
      },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={t => setText(t)}
          value={text}
          placeholder="Cari family..."
        />

        <Pressable style={styles.searchButton} onPress={onSearch}>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>

      <AmaranteText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        Families
      </AmaranteText>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={region} onPress={onMapPress}>
          {markers.map((marker: any) => (
            <Marker key={marker.key} coordinate={marker.coordinate} />
          ))}
        </MapView>
      </View>
    </ThemedView>
  );
}
