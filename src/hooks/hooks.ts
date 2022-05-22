import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStoreType, AppThunk} from "../p2-homeworks/h10/bll/store";

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector