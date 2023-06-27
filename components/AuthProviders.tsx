"use client"; //client side rendered

import { getProviders, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

//Provider type as next-auth structure their provider
type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

//multiple providers
type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
      //once we load our AuthProviders fetchProviders
    const fetchProviders = async () => {
      const res = await getProviders;

      console.log(res);
    
      setProviders(res);
    };

    fetchProviders();
  }, []);



  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}>Google</button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
