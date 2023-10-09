import React from 'react';
import Image from 'next/image'
import './table.css';

  
  export default function Table() {
  
    return (
      <>
        <div className="table-responsive">
            <table className="table table-striped">
                <caption className="sr-only">Example responsive table with striped rows</caption>
                <thead>
                    <tr>
                        <td scope="col">&nbsp;</td>
                        <th scope="col">Col 1</th>
                        <th scope="col">Col 2</th>
                        <th scope="col">Col 3</th>
                        <th scope="col">Col 4</th>
                        <th scope="col">Col 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Row A</th>
                        <td>A1</td>
                        <td>A2</td>
                        <td>A3</td>
                        <td>A4</td>
                        <td>A5</td>
                    </tr>
                    <tr>
                        <th scope="row">Row B</th>
                        <td>B1</td>
                        <td>B2</td>
                        <td>B3</td>
                        <td>B4</td>
                        <td>B5</td>
                    </tr>
                    <tr>
                        <th scope="row">Row C</th>
                        <td>C1</td>
                        <td>C2</td>
                        <td>C3</td>
                        <td>C4</td>
                        <td>C5</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
  
    )
  }