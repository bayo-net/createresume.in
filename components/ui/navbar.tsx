'use client'

import { Button } from './button'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="px-8 py-5 flex flex-row w-screen justify-between items-center">
            <div>createresume.in</div>
            <div className="flex gap-3">
                <Button variant={'outline'}>Log In</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    )
}

export default Navbar
