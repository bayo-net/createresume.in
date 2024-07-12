'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { IoMdDownload } from 'react-icons/io'
import { CgTemplate } from 'react-icons/cg'
import { MdFileUpload } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import Container from '@/components/ui/container'
import Image from 'next/image'
import { IoArrowBack } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export default function ResumePage() {
    const router = useRouter()

    const handleBack = () => {
        if (router) {
            router.back()
        }
    }
    return (
        <div>
            <div className="px-8 py-5 flex flex-row w-screen justify-center items-center gap-3 text-xl font-bold leading-8">
                <div
                    className="flex justify-center items-center gap-2 cursor-pointer"
                    onClick={handleBack}
                >
                    <IoArrowBack className="hover:scale-150 duration-300" />
                    Back
                </div>
                <div className="flex justify-center items-center border-r px-3 gap-2">
                    <h2>Color</h2>
                </div>
                <div className="flex justify-center items-center border-r px-3 gap-2">
                    <h2>Font</h2>
                    <p></p>
                </div>
                <div className="flex justify-center items-center border-r px-3 gap-2">
                    <IoMdDownload />
                    <h2>Download</h2>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex justify-center items-center border-r px-3 gap-2 cursor-pointer">
                            <CgTemplate />
                            <h2>Template</h2>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Choose Template</DialogTitle>
                            <DialogDescription>
                                Layout will change after selection
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/hero_image.jpg"
                                width={200}
                                height={200}
                                alt="theme1"
                                className="border-2 border-dashed hover:scale-110 hover:border-neutral-600 rounded-lg duration-300"
                            />
                            <Image
                                src="/hero_image_2.jpg"
                                width={200}
                                height={200}
                                alt="theme2"
                                className="border-2 border-dashed hover:scale-110 hover:border-neutral-600 rounded-lg duration-300"
                            />
                        </div>
                    </DialogContent>
                </Dialog>
                <div className="flex justify-center items-center border-r px-3 gap-2">
                    <MdFileUpload />
                    <h2>Upload</h2>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <IoSettings />
                    <h2>Configure</h2>
                </div>
            </div>
            <Container>
                <div></div>
            </Container>
        </div>
    )
}
