import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import SinglePost from './src/Components/SinglePost';

const Data = [
  {
    fname: 'Hey',
  },
  {
    fname: 'Hii',
  },
  {
    fname: 'How',
  },
];

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {Data.map((item, index) => {
        return <SinglePost key={index} fname={item.fname} />;
      })}

      <Button title="Press me" onPress={() => setNumber(number + 1)} />
    </View>
  );
}

// View - a container which contains other elements or views
