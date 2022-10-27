import SearchPoke from '@/services/SearchPoke.js'
import DelTxt from '@/services/DelTxt.js'
const searches= {
    async search(){
        return await SearchPoke.search()
        
        
    }
}
const del= {
    dele(){
        return DelTxt.dele()
        
        
    }
}

export {searches, del}