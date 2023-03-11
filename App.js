import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SinglePost from './src/Components/SinglePost';

// Flatlist
// ScrollView
// Touchables - TouchableOpacity, ...etc
// Pressable
// Images

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
    // <ScrollView
    //   style={{
    //     backgroundColor: 'black',
    //     flex: 1,
    //   }}
    //   contentContainerStyle={{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   {Data.map((item, index) => {
    //     return <SinglePost key={index} fname={item.fname} />;
    //   })}

    //   <Button title="Press me" onPress={() => setNumber(number + 1)} />
    // </ScrollView>
    <View style={{flex: 1}}>
      <FlatList
        data={Data}
        renderItem={({item, index}) => {
          return <SinglePost key={index} fname={item.fname} />;
        }}
      />
      <Pressable
        style={{
          backgroundColor: 'black',
          width: '50%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: 6,
          borderRadius: 3,
          marginBottom: 3,
          height: 30,
        }}
        onPress={() => console.log('first')}>
        <Text style={{color: 'white'}}>Press Me</Text>
      </Pressable>
      <Image
        source={require('./src/Components/rose.jpg')}
        style={{
          height: 150,
          width: 150,
        }}
      />
    </View>
  );
}

// View - a container which contains other elements or views
