import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function SinglePost({fname}) {
  const [like, setLike] = useState(0);

  return (
    <View style={styles.card}>
      <Text>{fname}</Text>
      <Text>{like}</Text>
      <Button title="Like" onPress={() => setLike(like + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    height: 210,
    width: 360,
    marginVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
});
