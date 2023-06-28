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

    //   console.log(res);

      setProviders(res);
    };

    fetchProviders();
  }, []);

  console.log(`Providers: ${providers}`);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i} onClick={() => signIn(provider?.id)}>{provider.id}</button>
        ))}
      </div>
    );
  } else {
    return(
          <div>
              Customized Sign In
          </div>
      )
  }


};

export default AuthProviders;
