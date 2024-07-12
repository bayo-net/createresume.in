'use client'

import { Button } from './button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="px-8 py-5 flex flex-row w-screen justify-between items-center">
            <div>createresume.in</div>
            <div className="flex gap-3">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Sign Up</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Sign Up</DialogTitle>
                            <DialogDescription>
                                Sign Up using different ways
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4"></div>
                            <div className="grid grid-cols-4 items-center gap-4"></div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={'outline'}>Log In</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Log In</DialogTitle>
                            <DialogDescription>
                                Login using different ways
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4"></div>
                            <div className="grid grid-cols-4 items-center gap-4"></div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Navbar
