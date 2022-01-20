import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container-lg">
      <button className="btn btn-primary m-3">Button Primary</button>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p>Some quick text</p>
        </div>
      </div>
    </div>
  )
}
