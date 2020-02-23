import React, { useState } from 'react';
import './style.scss';
import RichTextEditor from './RichTextEditor'
import Preview from './Preview'

function App() {
    const [page, setPage] = useState('editor')
    const [ blocks, updateBlocks ] = useState( [] );

    return (
        <div className="App">
            {page === 'editor' ? <RichTextEditor onPreview={() => setPage('preview')} blocks={blocks} updateBlocks={updateBlocks} /> : <Preview page={page} onEdit={() => setPage('editor')} blocks={blocks} />}
        </div>
    );
}

export default App;
