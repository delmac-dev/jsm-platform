import Filters from '@/components/Filters'
import SearchForm from '@/components/SearchForm'
import { getResources } from '@/sanity/actions'
import React from 'react'

const Page = async () => {
  const resources = await getResources({
    query: '',
    category: '',
    page: '1'
  })

  console.log(resources);
  


  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 m-6 text-center text-white">
             Javascript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />

    </main>
  )
}

export default Page