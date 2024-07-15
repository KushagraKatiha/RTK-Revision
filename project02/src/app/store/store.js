import { configureStore } from "@reduxjs/toolkit";
import reducer from '../../features/reducers/todoSlicer'

export default configureStore({
    reducer: reducer
})