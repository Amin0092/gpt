import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../store/store";
import {meRequestAsync} from "../store/me/action";

interface IUserData {
    name?: string;
    iconImg?: string
}

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const token = useSelector<RootState, string>(state => state.token)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (token && token !== 'undefined') {
            dispatch(meRequestAsync())
        }
    }, [token])

    return [data]
}



