import { createSlice } from "@reduxjs/toolkit";
export const genreOrCategory=createSlice({
    name:"genreOrCategory",
    initialState:{
        genreOrCategoryName:'',
        page:1,
        searchQuery:''

    },
    reducers:{
        selectGenreOrCategory:(action,category)=>{
            console.log(category.payload)
        }
    }
})
export const {selectGenreOrCategory}=genreOrCategory.actions
export default genreOrCategory.reducer