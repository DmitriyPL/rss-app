import "./HomePage.scss";

import { AddForm } from "../components/AddForm/AddForm"
import { RssList } from "../components/RssList/RssList"
import { DocList } from "../components/DocList/DocList"

export const HomePage = () => {

    return (
        <>
            <AddForm />
            <div className="grid-container">
                <RssList />                
                <div className="docs">
                    <div className="docs__title">
                        <h2>Список документов в подписке</h2>
                    </div>
                    <div className="docs__list">    
                        <DocList />
                    </div>
                </div>
            </div>
            
        </>
    )
}