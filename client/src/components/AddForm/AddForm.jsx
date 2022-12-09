import "./addrss.scss"

import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "./ErrorMessage";
import { useInput } from "../../hooks/form.hook.js";
import { axiosAddRss } from "../../redux/services/rss-services.js";
import { Loader } from "../Loader/Loader";

export const AddForm = () => {

    const dispatch = useDispatch();
    const {isLoading, linkLoadingError }  = useSelector( state => state.rss );

    const url = useInput('', { isMatch: "^(http|https):\/\/.*", isEmpty: true } );
    const title = useInput('');

    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch( axiosAddRss({
            'url': url.value,
            'title': title.value
        }) )
    }

    return (
        <div>
            <form className="addform">
                { isLoading && <Loader />}
                { (url.isDirty) && (linkLoadingError) && <ErrorMessage error={linkLoadingError} /> }    
                { (url.isDirty) && (url.errEmpty) && <ErrorMessage error={url.errEmpty} /> }
                { (url.isDirty) && (url.errLink) && <ErrorMessage error={url.errLink} /> }
                <div className="addform__input">
                    <input
                        
                        value = { url.value }
                        name = 'url'
                        type = "text"
                        
                        placeholder="RSS link"
                        className="addform__input-item"

                        onChange={ url.onChange}
                        onBlur={ url.onBlur }
                    />
                </div>

                <div className="addform__input">
                    <input

                        value= { title.value }    
                        name = 'title'
                        type="text"

                        placeholder="Link title"
                        className="addform__input-item"
                        
                        onChange={ title.onChange }
                        
                    />
                </div>

                <div className="addform__btn">
                    <button 
                        className="addform__btn-item"
                        type="submit"
                        onClick = { onClickHandler }
                        disabled = { isLoading || !url.isLink || url.isEmpty }
                    >
                            Add RSS
                    </button>
                </div>            
            </form>
        </div>

    )
}