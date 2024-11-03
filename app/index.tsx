/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { getToken } from "@/lib/utils";

const Index = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const [token, setToken] = useState<string | null>(null);
  const [redirection, setRedirection] = useState<React.ReactNode>(null);

  useEffect(() => {
    const checkAsyncStorage = async () => {
      const tokend = await getToken("token");
      console.log("raw token", tokend); // Log the raw token

      if (tokend) {
        console.log("check", tokend);
        setRedirection(<Redirect href="/(root)/home" />)
      } else {
        setRedirection(<Redirect href="/(auth)/welcome" />);
      }
    };

    checkAsyncStorage();
  }, []);

  return redirection

};

export default Index;
