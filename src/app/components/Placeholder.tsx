'use client'

import React, { useState } from 'react'
import PlaceholdersAndVanishInput from '@components/ui/placeholder'
import Image from 'next/image'
import { fetchGutenbergContent, fetchGutenbergMetadata } from '../actions/fetchGutenberg'
import TextViewer from './TextViewer'

const PlaceholdersAndVanishInputDemo = () => {
  const placeholders = [
    'Enter a Project Gutenberg book ID',
  ]

  const [content, setContent] = useState<string | null>(null)
  const [metadata, setMetadata] = useState<{
    title: string;
    author: string;
    publicationDate: string;
    language: string;
    coverImage: string | undefined;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const bookID = 74682

    try {
      const posts = await fetchGutenbergContent(bookID)
      const fetchedMetadata = await fetchGutenbergMetadata(bookID)

      setContent(posts)
      setMetadata(fetchedMetadata)

      console.log('submitted')
      console.log('posts', posts)
      console.log('metadata', fetchedMetadata)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mt-10 flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {metadata && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">{metadata.title}</h2>
          <p>
            <strong>Author:</strong>
            {' '}
            {metadata.author}
          </p>
          <p>
            <strong>Publication Date:</strong>
            {' '}
            {metadata.publicationDate}
          </p>
          <p>
            <strong>Language:</strong>
            {' '}
            {metadata.language}
          </p>
          {metadata.coverImage && (
            <Image
              src={metadata.coverImage}
              alt={`${metadata.title} cover`}
              className="mt-2"
              width={500}
              height={750}
            />
          )}
        </div>
      )}
      {content && (
        <div className="mt-4 w-full">
          <h3 className="text-md font-semibold">Content:</h3>
          <TextViewer content={content} />
        </div>
      )}
    </div>
  )
}

export default PlaceholdersAndVanishInputDemo
