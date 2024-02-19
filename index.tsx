import React from 'react'

interface HighlightTextI {
    text: string,
    highlight: string
}

const HighlightText = ({ text, highlight }: HighlightTextI) => {

    const highlightTextWrapper = (text: string, highlight: string): JSX.Element => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part: string, index: number) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} style={{ backgroundColor: 'red', color: 'white' }}>
                            {part}
                        </span>
                    ) : (
                        <span key={index}>{part}</span>
                    )
                )}
            </span>
        );
    };

    return (
        <span>{highlightTextWrapper(text, highlight)}</span>
    )
}

export default HighlightText