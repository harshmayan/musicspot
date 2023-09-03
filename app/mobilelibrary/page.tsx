import Header from "@/components/Header";
import LibraryContent from "./components/LibraryContent";
import getSongsByUserId from "@/actions/getSongsByUserId";

export const revalidate = 0;




const Library= async () => {

    const songs = await getSongsByUserId();
    return (
        <div 
            className="
                bg-neutral-900
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "   
        >
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">
                        Add Your Favourite Songs
                    </h1>
                </div>
            </Header>
            <LibraryContent songs={songs}/>
        </div>
    )
}

export default Library;