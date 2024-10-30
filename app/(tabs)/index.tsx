/* eslint-disable prettier/prettier */
import { StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");


  async function getProfile() {

  }



  return (
    <ScrollView className="flex-1 bg-white">

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})

export default Home;
