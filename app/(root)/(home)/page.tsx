import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlayList } from '@/sanity/actions'
import React from 'react'

interface Props {
  searchParams: { [key: string]: string | undefined }
}

export const revalidate = 900 // update page every 15 min

const Page = async ({searchParams}: Props) => {
  var resources = [];
  var playList = []
  if(searchParams.category || searchParams.query) {
      resources = await getResources({
        query: searchParams?.query || '',
        category: searchParams?.category || '',
        page: '1'
      })
  }else {
    playList = await getResourcesPlayList();
  }
  

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
      {searchParams.query || searchParams.category ? (<section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header
          query = {searchParams?.query || null}
          category = {searchParams?.category || null}
        />

        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any, index: number) => (
              <ResourceCard
                key={resource._id}
                {...resource}
              />
            ))
          ) : (
            <p className='body-regular text-white-400'>
              Oops No Resources Found
            </p>
          )}
        </div>
      </section>) : (
        <section className="flex-center w-full flex-col sm:mt-20">
          {playList?.map((cluster: any)=> (
            <div className='mt-6' key={cluster._id}>
              <Header
                title={cluster.title}
                query = {null}
                category = {null}
              />

              <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
                {cluster.resources?.length > 0 ? (
                  cluster.resources.map((resource: any, index: number) => (
                    <ResourceCard
                      key={resource._id}
                      {...resource}
                    />
                  ))
                ) : (
                  <p className='body-regular text-white-400'>
                    No Resources Found
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

    </main>
  )
}

export default Page