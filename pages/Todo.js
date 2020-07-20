import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from "next/link"

export default class extends Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Link href="/">
                    <a>User</a>
                </Link>
            </div>
        )
    }
}