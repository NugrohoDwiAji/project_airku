import HeaderAdmin from '@/components/HeaderAdmin'
import React from 'react'

export default function InputBerita() {
  return (
    <div>
        <HeaderAdmin/>
        <form action="" className='mt-40 flex flex-col justify-center items-center gap-4'>
          <input type="file" className='w-[60rem] border-2 bg-gray-400 h-80'/>
          <input type="date" className=' w-[60rem]'/>
          <input type="text" className='border-2 border-gray-500 border-dashed w-[60rem] h-16 px-2' placeholder='MASUKAN JUDUL BERITA DI SINI'/>
          <input type="text" className='border-2 w-[60rem] mb-24 h-52'/>
        </form>
    </div>
  )
}
