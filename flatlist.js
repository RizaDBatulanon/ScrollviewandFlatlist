import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const App = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setLists(res))
      .catch(err => console.log(err));
  };

  const renderItem = ({ item }) => (
    <Item
      list={item}
      onPress={() =>
        Alert.alert(
          'Student Information',
          `ID: ${item.id}\nName: ${item.name}\nUsername: ${item.username}\nEmail: ${item.email}\nAddress: ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`
        )
      }
    />
  );
 
  return (
    <View style={styles.container}>
         <View style = {{marginBottom: 15, marginTop: 50}}>
            <Text style = {styles.txtHeader}> LIST OF GUEST</Text>
            </View>
      <FlatList
        data={lists}
        renderItem={renderItem}
        keyExtractor={item => item.name.toString()}  
      />
    </View>
  );
};

const Item = ({ list, onPress }) => (
    
  <TouchableOpacity onPress={onPress} style={styles.itemStyle}>
    <View style = {{flex: 1, flexDirection: 'row'}}> 
        <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}> 
           <ProfilePicture initial={list.name[0]} />
               <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 20 ,fontWeight: 'solid'}}>{list.name}</Text>
                    <Text style={{fontWeight: 'solid'}}>{list.address.street}, {list.address.city}</Text>
              </View>
    </View>
    
        <OptionsMenu />
        
    </View>
     
  </TouchableOpacity>
  
);

const ProfilePicture = ({ initial }) => (
    <View style={styles.profilePicture}>
      <Text style={{ fontSize: 20, color: '#fff' }}>{initial}</Text>
    </View>
  );

  const OptionsMenu = () => (
    <View style={styles.optionsMenu}>
      <Icon name="more-vert" size={20} color="#000" />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'orange',
    width: windowWidth,
    height: windowHeight,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 4,
  },
  itemStyle: {
    fontSize: 15,
    padding: 10,
    marginBottom: 10,
  },
  txtHeader:{
    fontSize :  20,
    fontWeight : "solid",
    
},
profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'gray', 
    justifyContent: 'center',
    alignItems: 'center',
},
optionsMenu: {
    padding: 10,
    alignItems: 'flex-end',
  },
});

export default App;