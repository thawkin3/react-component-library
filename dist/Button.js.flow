// @flow
import React from 'react';

type Props = {
    children: any,
    classNames: string,
    clickHandler: Function,
};

const Button: Object = (props: Props) => {
    const {
        children,
        classNames,
        clickHandler,
    } = props;

    return (
        <button
            type="button"
            className={classNames || ''}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
