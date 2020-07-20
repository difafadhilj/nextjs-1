import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from "next/link"

function Blog({ data }) {
  let no = 1;
  return (
    <Link href={''}>
    </Link>
    <table class="table table-bordered" style={{ margin: 10 + 'px auto', border: 1 + 'px solid black', cellSpacing: 1 + 'px', cellPadding: 0 + 'px' }}>
      <tr>
        <th style={{ border: 1 + 'px solid black' }}>No</th>
        <th style={{ border: 1 + 'px solid black' }}>Name</th>
        <th style={{ border: 1 + 'px solid black' }}>Email</th>
        <th style={{ border: 1 + 'px solid black' }}></th>
      </tr>
      {
        data.map((post) => (
          <tr>
            <>
              <td style={{ border: 1 + 'px solid black' }}>{no++}</td>
              <td style={{ border: 1 + 'px solid black' }}>{post.first} {post.last}</td>
              <td style={{ border: 1 + 'px solid black' }}>{post.email}</td>
              <td style={{ border: 1 + 'px solid black', padding: 10 + 'px' }}>
                <button>Lihat</button>&nbsp;
                <button>Hapus</button>
              </td>
            </>
          </tr>
        ))
      }
    </table >

  )
}


export async function getStaticProps() {

  const res = await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default Blog