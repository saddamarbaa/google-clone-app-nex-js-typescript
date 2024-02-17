'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
   const [country, setCountry] = useState('United States');

  // useEffect(() => {
  //   const getCountry = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://extreme-ip-lookup.com/json/?key=mug5DAJbj2Ww2CYeRBby`
  //       );

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch country');
  //       }

  //       const data = await response.json();
  //       console.log("data", data);

  //       if (!data.country) {
  //         throw new Error('Country not found in response');
  //       }

  //       setCountry(data.country);
  //     } catch (error) {
  //       console.error('Error fetching country:', error)
  //     }
  //   };

  //   getCountry();
  // }, []);

  return <div>{country}</div>;
}




