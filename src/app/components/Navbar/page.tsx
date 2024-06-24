import Link from "next/link";

interface NavbarProps {
    menu: string[]
}

const Navbar: React.FC<NavbarProps> = ({ menu }) => {
    return (
        <>
         <div className="bg-blue-700 text-white h-10 items-center justify-center flex">
         Lorem Ipsum Is  Dummy Text Editor
            </div>
            <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <div className="flex gap-8">
                {menu.map((page, i) => (
                    <span key={i}>
                        <Link href={`/`}>
                            {page}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
        </>
       
    )
}

export default Navbar;

export const menuData = [
    'Home',
    'Speaker',
    'Agenda',
    'Add to Calendar'
];
