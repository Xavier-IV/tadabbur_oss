import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Link from "next/link";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <title>Tadabbur</title>
        <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
      </head>
      <html lang="en">
      <body className='bg-[#191621] text-white lg:overscroll-y-none'>
      {children}
      </body>
      </html>
    </>
  )
}
