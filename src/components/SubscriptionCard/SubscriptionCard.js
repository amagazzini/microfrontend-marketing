import React from 'react';

// styles
import s from './style';
import c from '../../styles/common';

const SubscriptionCard = ({
    plan,
    featured,
    handleClick,
    handleSelect,
    ...rest
}) => {
    return (
        <div
            style={featured ? s.featuredCard : s.card}
            onClick={() => handleClick(plan.index)}
            onMouseEnter={() => handleClick(plan.index)}
            {...rest}
        >
            <div style={s.cardHeader}>
                {plan.displayName}
            </div>
            <div style={s.cardBody}>
                {`${plan.pricePoints.monthly}/mo`}
            </div>
            <div style={s.cardFooter}>
                <button 
                style={{...c.button, ...c.orange}}
                onClick={handleSelect}
                >
                    Select
                </button>
            </div>
        </div>
    )
}

export default SubscriptionCard;