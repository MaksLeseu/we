import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getTokenFromLocalStorage} from "../utils/functions/localStorage/localStorage";
import {baseQueryWithReauth} from "../../features/Auth/base-query-with-reauth";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['Me']
})