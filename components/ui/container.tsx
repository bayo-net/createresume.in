'use client'

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="bg-[#eff2f9] min-h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default Container
