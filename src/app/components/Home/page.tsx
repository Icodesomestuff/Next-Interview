interface HomeCardProps {
    heading: string,
    subheading: string,
    content: string
}

const HomeComponentCard: React.FC<HomeCardProps> = ({ heading, subheading, content }) => {
    return (
        <div className="flex flex-col bg-blue-700 shadow-md border p-6 text-white gap-4 text-center">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <h3 className="text-lg">{subheading}</h3>
            <p className="text-sm">{content}</p>
        </div>
    )
}

export default HomeComponentCard;

export const homeCardData = [
    {
        heading: '+15K',
        subheading: 'Product reviews',
        content: "Real identity-verified reviews you can trust"
    },
    {
        heading: '+15K',
        subheading: 'Product reviews',
        content: "Real identity-verified reviews you can trust"
    },
    {
        heading: '+15K',
        subheading: 'Product reviews',
        content: "Real identity-verified reviews you can trust"
    },
];
