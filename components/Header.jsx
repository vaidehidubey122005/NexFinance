import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left side — Logo */}
        <Link href="/">
          {/* --- FIX IS HERE --- */}
          <Image
            src="/logo.png"
            alt="NexFinance logo"
            width={1000} // Correct aspect ratio (1:1)
            height={1000} // Correct aspect ratio (1:1)
            className="h-12 w-auto object-contain" // Controls visual size
          />
        </Link>

        {/* Right side — auth buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard"
            className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
            <Button variant="outline" className="flex items-center gap-2">
              <LayoutDashboard size={18}/>
              <span  className="hidden md:inline">Dashboard</span>
            </Button>
            </Link>

            <Link href="/transaction/create">
            <Button className="flex items-center gap-2">
              <PenBox size={18}/>
              <span  className="hidden md:inline">Add transaction</span>
            </Button>
            </Link>
          </SignedIn>


          <SignedOut>
            <SignInButton signUpForceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              }
            
            }}
            
            />
          </SignedIn>
        </div>

      </nav>
    </header>
  )
}

export default Header