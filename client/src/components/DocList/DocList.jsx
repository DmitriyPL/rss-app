import "./doclist.scss"

import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";

export const DocList = () => {

    const { docList, docsIsLoading, docListLoadingError } = useSelector( state => state.rss );

    if (!docList.length && docsIsLoading) {
        return (
            <Loader />
        ) 
    }

    if (docListLoadingError) {
        return (
            <h2>{docListLoadingError}</h2>
        ) 
    }   

    return (
        <>
            { docList.length > 0 ?
            
            <>
            {
                docList.map( doc => 
                    <div key={doc}>
                        { doc }
                    </div>
                )
            }
            </>
            :
            
            <h2>Документов не найдено!</h2>
        }
        </>

    )
}