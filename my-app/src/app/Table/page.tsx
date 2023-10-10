import React from 'react';
import Table from '@/components/Table/table';
import MovieForm from '@/components/MovieForm/MovieForm';

export default function TablePage() {
    return (
      <>
      <main>
        <div className='moviePage'>
          <MovieForm />
          <Table />
        </div>
      </main>
      </>
  
    )
  }