// @flow
import React from 'react';

type Props = {
    children: any,
    childrenClasses: string,
    childrenStyles: Object,
    containerClasses: string,
    containerStyles: Object,
    headerClasses: string,
    headerStyles: Object,
    headerText: string,
};

const Card: Object = (props: Props) => {
    const {
        children,
        childrenClasses,
        childrenStyles,
        containerClasses,
        containerStyles,
        headerClasses,
        headerStyles,
        headerText,
    } = props;

    return (
        <div
            className={`react-component-library__card ${containerClasses || ''}`}
            style={containerStyles || {}}
        >
            <h1
                className={`react-component-library__card__header ${headerClasses || ''}`}
                style={headerStyles || {}}
            >
                {headerText}
            </h1>
            <div
                className={`react-component-library__card__children ${childrenClasses || ''}`}
                style={childrenStyles || {}}
            >
                {children}
            </div>
        </div>
    );
};

export default Card;
