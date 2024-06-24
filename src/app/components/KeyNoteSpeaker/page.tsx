import Image from "next/image"

interface KeyNoteProps {
    name: string,
    description: string,
    imageUrl: string
}

const KeyNoteComponent: React.FC<KeyNoteProps> = ({ name, description, imageUrl }) => {
    return (
        <div className="bg-white shadow-md p-5 border-2 ">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
            <Image src={imageUrl} alt={name} width={100} height={100} className="mx-auto mb-4"/>

        </div>
    )
}

export default KeyNoteComponent;

