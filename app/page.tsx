'use client'

import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Navbar from '@/components/ui/navbar'
import Image from 'next/image'
import { TiTickOutline } from 'react-icons/ti'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/resume-page')
    }

    return (
        <main className="min-h-screen">
            <Navbar />
            <Container>
                <h1 className="pt-10 text-[46px] font-bold">
                    {`Impressive Resumes Easy Online Builder`}
                </h1>
                <div className="flex flex-col text-center py-4">
                    <p className="flex items-center justify-center">
                        <TiTickOutline />
                        Put your best foot forward and impress employers with a
                        professionally crafted resume that speaks volumes about
                        your capabilities. Your dream job awaits.
                    </p>
                    <p className="flex items-center justify-center">
                        <TiTickOutline />
                        Stand out from the crowd with a professionally crafted
                        resume that speaks volumes about your capabilities and
                        ambition.
                    </p>
                    <p className="flex items-center justify-center">
                        <TiTickOutline />
                        Land your dream job with the perfect resume employers
                        are looking for!
                    </p>
                </div>

                <Button size={'lg'} className="my-5" onClick={handleClick}>
                    Create Resume
                </Button>
                <div className="rounded-lg">
                    <Image
                        src={'/hero_image.jpg'}
                        alt="Hero Image"
                        width={500}
                        height={500}
                        className="pt-6"
                    />
                </div>
            </Container>
        </main>
    )
}
