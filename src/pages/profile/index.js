import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { gantiPemilik, gantiAlamat } from "./redux/reducer";
import { getAllUsers } from './redux/action';

export default function Profile(){
    const dispatch =  useDispatch();
    const appData = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const handleGantipemilik = () => {
        dispatch(
            gantiPemilik({
                name: 'john',
                age: 20,
            })
        );
        dispatch(gantiAlamat('new road'))
    }

    if(appData.profile.isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div>Profile {appData.contact.phone}
            <button className="input ml-1" onClick={handleGantipemilik}> ganti pemilik</button>
            {appData.profile.users.map((val, idx) =>{
                return <p key={val.id +idx}>{val.name}</p>
            })}
        </div>
    )
}