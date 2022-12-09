import "./rsslist.scss"

import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { RssLink } from "../RssLink/RssLink";

export const RssList = () => {

    const { rssLinks, isLoading, listLoadingError } = useSelector( state => state.rss );

    if (!rssLinks.length && isLoading) {
        return (
            <Loader />
        ) 
    }

    if (listLoadingError) {
        return (
            <h2>{listLoadingError}</h2>
        ) 
    }   

    return (
        <div className="rsslist">
            <div className="rsslist__title">
                <h2>Список RSS подписок</h2>
            </div>           
            { rssLinks.length > 0 ?
            
                <>
                {
                    rssLinks.map( link => 
                        <div key={link.id}>
                            <RssLink link = { link }/>
                        </div>
                    )
                }
                </>
                :
                
                <h2>Подписок не найдено!</h2>
            }

        </div>
    )
}