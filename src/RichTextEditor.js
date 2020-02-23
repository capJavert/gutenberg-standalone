/**
 * WordPress dependencies
 */
import React, { useEffect } from 'react'
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import {
	Popover,
	SlotFillProvider,
	DropZoneProvider,
} from '@wordpress/components';
import { getBlockTypes, unregisterBlockType } from '@wordpress/blocks'
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';

/**
 * Internal dependencies
 */

const RichTextEditor = ({ blocks, updateBlocks, onPreview }) => {
	useEffect( () => {
		console.log('DEBUG: gutenberg-state', blocks)
	}, [blocks] );

	useEffect( () => {
		registerCoreBlocks();

		return () => {
			getBlockTypes().forEach( ( block ) => {
				unregisterBlockType( block.name );
			} );
		}
	}, [] );

	return (
		<div className="playground">
			<button onClick={onPreview}>Preview</button>
			<SlotFillProvider>
				<DropZoneProvider>
					<BlockEditorProvider
						value={ blocks }
						onInput={ updateBlocks }
						onChange={ updateBlocks }
					>
						<div className="playground__sidebar">
							<BlockInspector />
						</div>
						<div className="editor-styles-wrapper">
							<BlockEditorKeyboardShortcuts />
							<WritingFlow>
								<ObserveTyping>
									<BlockList />
								</ObserveTyping>
							</WritingFlow>
						</div>
						<Popover.Slot />
					</BlockEditorProvider>
				</DropZoneProvider>
			</SlotFillProvider>
		</div>
	);
}

export default RichTextEditor
