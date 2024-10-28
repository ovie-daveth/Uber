/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

const Index = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <Redirect href={session && session.user ? "/(root)/home" : "/(auth)/welcome"} />;
};

export default Index;
