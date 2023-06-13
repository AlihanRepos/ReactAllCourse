import * as actionTypes from "./actionTypes";

export function getDetails(blog) {
  return { type: actionTypes.GET_DETAILS, payload: blog };
}

export function getblogdetail(blog){
  return function(dispatch){
    let blog=[];
    var bbb=blog.find((x)=>x.id===blog.source.id)
    if(!bbb){
      blog.length=0;
      blog.push(bbb);
      dispatch(getDetails(blog));
      console.log(blog)
    }
  }
}
