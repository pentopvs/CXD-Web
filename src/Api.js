import axios from 'axios'

export const getBlogs=async()=>{
    try {
        const res=await axios.get('https://app.cxdeployer.com/api/admin/blog')
        
        return res.data
    } catch (error) {
        return {success:false}        
    }
}


export const urlHelperImage = "https://app.cxdeployer.com/user";