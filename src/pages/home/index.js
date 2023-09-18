import React from 'react';
import {useSelector} from 'react-redux';

export default function Home() {
    const appData = useSelector((state) => state.profile.pemilik.name);
    console.log(appData)
    return <div>Home {appData}</div>
}