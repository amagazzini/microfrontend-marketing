import React from 'react';

// style
import s from './style';

const SubscriptionTable = ({
    headings,
    rows,
    activeIndex,
    handleClick,
    ...rest
}) => {
    const defineStyleCell = (featured, first) => {
        const featuredCell = featured && s.featuredCell
        const firstCell = first && s.firstCell

        return {...s.cell, ...featuredCell, ...firstCell}
    } 

    const renderRow = (row, featured, index) => {
        return row.map((cell, i) => (
            <div
                onMouseOver={() => handleClick(index)}
                onClick={() => handleClick(index)} 
                style={defineStyleCell(featured, i === 0)}
            >
                {cell}
            </div>
        ))
    }

    const renderHeading = (headings) => {
        return headings.map((heading) => (
            <div style={s.headingCell}>
                {heading}
            </div>
        ))
    }

    return (
        <div
            style={s.tableContainer}
            {...rest}
        >
            <div style={s.table}>
                {
                    renderHeading(headings)
                }
                {
                    rows.map((row, index) =>
                        renderRow(row, index === activeIndex, index)
                    )
                }
            </div>
        </div>
    )
}

export default SubscriptionTable