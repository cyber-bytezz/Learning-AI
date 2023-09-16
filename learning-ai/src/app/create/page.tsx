import { getAuthSession } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";


type Props = {};

const CreatePage = async (props:Props) => {
    const session = await getAuthSession()

    if (!session?.user) {
        return redirect('/gallery')
    }
    return (
        <div className="flex flex-col items-start max-w-x1 px-8 mx-auto my-1t">
            <h1 className="self-center text-3x1 font-bold text-center sm:text-6x1">
                Learning AI-xD
            </h1>
            <div className="flex p-4 mt-5 border-none bg-secondary">
                <InfoIcon className="w-12 h-12 mr-3 text-blue-400"/>
                <div>
                Kindly provide a course title or specify the subject you're interested in learning. Then, list the specific units or topics you'd like to cover, and our AI will generate a tailored course for you!
                </div>
            </div>
            <CreateCourseForm/>
        </div>
    )
};

export default CreatePage;