'use client'

import React from 'react'

const TextViewer = ({ content }: { content: string }): JSX.Element => (
  <textarea
    value={content}
    readOnly
    className="bg-transparent w-full h-[750px] overflow-y-scroll font-mono border border-gray-300 rounded"
  />
)

export default TextViewer
