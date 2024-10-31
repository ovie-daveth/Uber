/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { getToken } from "@/lib/utils";

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkAsyncStorage = () => {
      const tokend = getToken("token");
      console.log("raw token", tokend); // Log the raw token

      if (tokend) {
        setToken(tokend); // Store the token
        setIsLogin(true); // Set login state to true
        console.log("check", token);
      } else {
        setIsLogin(false); // Set login state to false
      }
    };

    checkAsyncStorage();
  }, []);


  if (isLogin) {
    return (
      <Redirect href="/(root)/home" />
    )
  } else {
    return <Redirect href="/(auth)/welcome" />
  }
};

export default Index;
