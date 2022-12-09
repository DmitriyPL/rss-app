import "./rsslink.scss"

import { useDispatch, useSelector } from "react-redux";
import { axiosDelRss, axiosGetDocs, axiosUdateRss } from "../../redux/services/rss-services.js";
import { setCurrentLink } from "../../redux/rssSlice.js";


export const RssLink = ( { link } ) => {

    const dispatch = useDispatch();
    const { currentLink, docsIsLoading } = useSelector( state => state.rss );

    const clickHandlerDel = (e) => {
        e.preventDefault();
        const btnId = e.currentTarget.id;
        const linkId = btnId.split("_delbtn")[0];
        dispatch(axiosDelRss(linkId));
    }

    const clickHandlerUdate = (e) => {
        e.preventDefault();
        const btnId = e.currentTarget.id;
        const linkId = btnId.split("_updbtn")[0];
        dispatch(axiosUdateRss(linkId));
    }

    const clickCurrentRss = (e) => {
        e.preventDefault();
        const cardId = e.currentTarget.id;
        const linkId = cardId.split("_card")[0];

        if (currentLink !== linkId){
            dispatch(setCurrentLink(linkId));
            dispatch(axiosGetDocs(linkId))    
        }
        
    } 

    return (
        <div 
            id={link.id + "_card"}
            className= { (link.id === currentLink) ? "rss-active" : "rss"}
            onClick={ clickCurrentRss }
        >
            <div className="rss__link">
                <strong> { link.title } </strong>
                <div>
                    <p> { link.url } </p>
                </div>
            </div>
            <div className="rss__btn">
                <button id={link.id + "_delbtn"} onClick={ clickHandlerDel } className="rss__btn-del">
                    Удалтить
                </button>
                <button id={link.id + "_updbtn"} onClick={ clickHandlerUdate } className="rss__btn-update">
                    Обновить
                </button>
            </div>
            <div>
                { (link.id === currentLink && docsIsLoading) && <div>Loading...</div> }
            </div>

        </div>
    )
}