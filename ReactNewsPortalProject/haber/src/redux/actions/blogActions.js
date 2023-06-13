import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
    console.log(category)
    return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
  
export function getBlogsSuccess(blogs) {
    return { type: actionTypes.GET_BLOG_SUCCESS, payload: blogs };
  }
  
export function getBlog(id) {
return function (dispatch) {
    let url = "  http://localhost:3000/articles";
    if(id){
        url =url + "?categoryId=" + id
    }
   
    return fetch(url, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 55oJO0qSBihqSXYwVrZqOa:0WCiRsq9oxbMY6kTYCaaBX"
        }
    })
        .then((response) => response.json())
        .then((result) => dispatch(getBlogsSuccess(result)));
    
    };
}
  

