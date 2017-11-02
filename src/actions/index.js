import axios from 'axios'

export const Get_Posts='getposts';
export const Save_Post='savepost';
export const Get_Post='getpost'

const RootUrl='http://reduxblog.herokuapp.com/api';
const APIKey='?key=abs237';
export function GetPosts()
{


    const request=axios.get(`${RootUrl}/posts${APIKey}`);
   
   return {
       type:Get_Posts,
       payload:request
   }
}

export function SavePost(values,callback)
{
const request=axios.post(`${RootUrl}/posts${APIKey}`,values)
.then(()=>callback());

return {
    type : Save_Post,
    payload : request
}

}

export function GetPost (id)
{
    const request =axios.get(`${RootUrl}/posts/${id}${APIKey}`)
    
    return{
        type:Get_Post,
        payload:request
    }
}