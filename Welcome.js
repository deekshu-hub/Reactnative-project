

  import React, { useEffect, useState } from 'react';
  import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
  
  export default function Welcome() {
      const [Data, setData] = useState([]);
  
      useEffect(() => {
          fetch("https://randomuser.me/api/?page=3&results=10")
              .then((response) => response.json())
              .then((json) => setData(json.results))
      }, []);
  
      const storyItem = ({ item }) => {
          return (
              <View style={styles.FlatListContainer}>
                  <Image source={item.picture.medium} style={styles.image}></Image>
                  <View style={styles.flexColumn}>
                      <Text style={styles.title}>
                          Name:{item.name.title}.{item.name.first} {item.name.last}
                      </Text>
                      <Text style={styles.title}>
                          Gender: {item.gender}
                      </Text>
                      <Text style={styles.title}>
                          Age:{item.dob.age}
                      </Text>
                      <Text style={styles.title}>
                          Country:{item.location.country}
                      </Text>
                  </View>
              </View>
  
          )
          //     return (
          //         <View style={styles.FlatListContainer}>
          //             <Text >{element.index}</Text>
          //             <Text >{element.item[0].fileName}</Text>
          //             <Text>:</Text>
          //         </View>);
  
      }
      // function upload(){
      //     localStorage.setItem("data",JSON.stringify(Data))
      // }
      // (element)=>{console.log(element)}
  
      return (
          <View style={styles.container}>
              <FlatList
                  data={Data}
                  renderItem={storyItem}></FlatList>
  
          </View>
      )
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          // backgroundColor: "rgb(100, 236, 236)",
          // alignItems: "center",
          // justifyContent: "center",
          width: '100%',
          padding: 20
      },
      FlatListContainer:
      {
          flexDirection: "row",
          // justifyContent: "",
          padding: 5,
          backgroundColor: "rgb(227, 194, 220)",
          borderRadius: 4,
          marginBottom: 4
      },
  
      title: {
          paddingBootom: 10,
          fontWeight: '500',
          fontStyle: "italic"
      },
      image: {
          height: 99,
          width: '25%',
          borderRadius: "100%",
          margin: 10
  
      },
      flexColumn: {
          marginTop: 20,
          marginLeft: 15
  
      }
  })
      