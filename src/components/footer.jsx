import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoDev } from '@mui/icons-material'

function Footer() {
  return (
    <>
        <div className="footer">
            <h2>Follow us on</h2>
            <div className='logos'>
                <Link href="https://github.com/rkt-12" passHref>
                    <Image className='logo' alt='github logo' height={32} width = {32} src="/github-logo.png"/>
                </Link>
                <Link href="https://www.linkedin.com/in/raunak-kumar-tripathi-51ba8728b/" passHref>
                    <Image className='logo' alt='github logo' height={32} width = {32} src="/linkedin.png"/>
                </Link>
                <Link href="https://www.instagram.com/rkt12_/" passHref>       
                    <Image className='logo' alt='github logo' height={32} width = {32} src="/instagram.png"/>
                </Link>
            </div>
            <p> ©️ 2024 RKT</p>
        </div>
    </>
  )
}

export default Footer