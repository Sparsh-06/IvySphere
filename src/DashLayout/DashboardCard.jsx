import { useState } from "react";
import axios from "axios";

const DocumentCard = ({ title, desc }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                setUploading(true);
                const response = await axios.post("http://localhost:5000/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log("File uploaded successfully:", response.data);
                // Handle success response (e.g., show a success message)
            } catch (error) {
                console.error("Error uploading file:", error);
                // Handle error response (e.g., show an error message)
            } finally {
                setUploading(false);
            }
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
                                disabled={uploading}
                            >
                                {uploading ? "Uploading..." : "Submit"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DocumentCard;