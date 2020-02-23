/**
 * WordPress dependencies
 */
import React, { useMemo } from 'react'
import { getBlockContent } from '@wordpress/blocks'

const Preview = ({ blocks = [], onEdit }) => {
    const content = useMemo(() => ({
        __html: blocks.map(block => getBlockContent(block)).join('')
    }), [blocks])

	return (
		<div className="playground">
            <button onClick={onEdit}>Edit</button>
			<div dangerouslySetInnerHTML={content} />
		</div>
	);
}

export default Preview
