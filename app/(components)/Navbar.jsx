
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex gap-4'>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className='icon' />
        </Link>
        <Link href="/ticket/xyz">
          <FontAwesomeIcon icon={faTicket} className='icon' />
        </Link>
      </div>
      <div>
        <p>amit@gmail.com</p>
      </div>
    </nav>
  )
}

export default Navbar