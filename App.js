import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 60, color: 'black'}}>{number}</Text>
      <Button title="Press me" onPress={() => setNumber(number + 1)} />
    </View>
  );
}

// View - a container which contains other elements or views
