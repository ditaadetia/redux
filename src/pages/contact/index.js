import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changePhone } from "./reducer";

export default function Contact() {
    const appData = useSelector((state) => state.profile.pemilik.name);
    const dispatch = useDispatch();

    const gantiNomor = () => {
        dispatch(changePhone('+6289693838246')); // Dispatch the action with the new phone value
    }

    return (
        <div>contact
            <button className="input ml-1" onClick={gantiNomor}>ganti nomor {appData}</button>
        </div>
    )
};
