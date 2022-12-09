import { useState, useEffect } from "react";

export const useValidate = (value, validators) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const [isLink, setIsLink] = useState(false);
    const [errEmpty, setErrEmpty] = useState('');
    const [errLink, setErrLink] = useState('');

    const matching = (str) => {
        const regex = new RegExp(str, 'gm')
        return regex.test(String(value).toLowerCase());
    }

    useEffect ( () => {

        for (const validator in validators) {
            switch (validator) {
                case 'isMatch':
                    if (matching(validators[validator])){
                        setIsLink(true);
                        setErrLink('');
                    } else {
                        if (value) {
                            setIsLink(false);
                            setErrLink('Некорректная ссылка');
                        } else {
                            setIsLink(false);
                            setErrLink('');
                        }

                    };
                    break;
            
                case 'isEmpty':
                    if (value) {
                        setIsEmpty(false);
                        setErrEmpty('');
                    } else {
                        setIsEmpty(true);
                        setErrEmpty('Поле не может быть пустым');
                    } 
                    break;   

                default:
                    break;
            }
        }

    }, [value])

    return {
        isEmpty,
        isLink,
        errEmpty,
        errLink
    }
}


export const useInput = (initValue, validators) => {

    const [value, setValue] = useState(initValue);
    const [isDirty, setIsDirty] = useState(false);
    const isValid = useValidate(value, validators);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setIsDirty(true);
    }

    return {
        value,
        isDirty,
        ...isValid,
        onChange,
        onBlur,
    }

}