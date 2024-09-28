import { useState } from "react";



const DocumentCard= ({ title, desc }) => {
    const [file, setFile] = useState();

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = () => {
        if (file) {
            console.log("Submitting file:", file.name);
            // Additional actions for file submission
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center h-40 bg-gray-100">
                <h2 className="text-xl font-medium text-gray-800">{title}</h2>
            </div>
            <div className="p-5">
                <p className="text-sm text-gray-600 mb-4">{desc}</p>
                <div className="flex flex-col space-y-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full text-gray-800 cursor-pointer"
                    />
                    {file && (
                        <>
                            <p className="text-sm text-gray-600">Selected: {file.name}</p>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-sm btn-primary w-full mt-2"
                            >
                                Submit
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DocumentCard;
