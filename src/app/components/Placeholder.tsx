'use client'

import PlaceholdersAndVanishInput from '@components/ui/placeholder'

const PlaceholdersAndVanishInputDemo = () => {
  const placeholders = [
    'Enter a Project Gutenberg book ID',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <div className="mt-10 flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default PlaceholdersAndVanishInputDemo
