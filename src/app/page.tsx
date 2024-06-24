'use client'

import HomeComponentCard, { homeCardData } from "./components/Home/page";
import { keyNoteCardData } from "./components/KeyNoteSpeaker/mock";
import KeyNoteComponent from "./components/KeyNoteSpeaker/page";

export default function Home() {
    return (
        <main className="flex flex-col ">
            <div className="text-center my-8">
                <h1 className="text-4xl font-bold">Lorem Ipsum is simply dummy text of the printing</h1>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {homeCardData.map((item, i) => (
                    <HomeComponentCard key={i} heading={item.heading} subheading={item.subheading} content={item.content} />
                ))}
            </div>
            <div className="mt-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Keynote Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {keyNoteCardData.map((item, i) => (
                        <KeyNoteComponent key={i} name={item.name} description={item.description} imageUrl={item.imageUrl} />
                    ))}
                </div>
            </div>
        </main>
    );
}
