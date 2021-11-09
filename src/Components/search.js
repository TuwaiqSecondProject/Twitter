import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setSearche } from "../reducers/Tweets/action";
import { useDispatch } from "react-redux";


const Search = () => {

const [searchValue, setValue] =useState()
const [searchInput, setSearch] =useState('')
const [IsSrach, setIsSearch] =useState(false)

const dispatch = useDispatch() 

  const  handelSearch = (e)=>{
    e.preventDefault()
    setSearch(searchValue)
    setIsSearch(true) 
  } 
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
      searchRes: state.tweetsReducer.searchRes,

    };
  });

  useEffect(()=>{
    const array=[]
    if(IsSrach){

      

      state.tweets.filter((item)=>{
        let contect = item.Content.toLowerCase()
        if(contect.search(searchInput) !== -1){
          array.push(item)
        }
      })
    }
 
    console.log(array)
    const action = setSearche(array);
    dispatch(action);

  },[searchInput])

  return (
    <>
      <div >
        <form onSubmit={(e)=>handelSearch(e)}>
        <input  onChange={(e)=> setValue(e.target.value)} type="text" placeholder="Search.."  className="search-input"/>
        </form>
      </div>
    </>
  );
};
export default Search;
 
