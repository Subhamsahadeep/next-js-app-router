import React from 'react'
import { callAPI } from '../_services/service';


const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function login() {
    await wait(2000);
    const json = await callAPI();
  return (
    <div>
      {json.activity + " -- " + json.type}
      </div>
  )
}