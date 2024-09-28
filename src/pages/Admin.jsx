import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const Admin = () => {
    const [profile, setProfile] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "test@test.com",
        contact: "123-456-7890",
        bio: "A student interested in Computer Science.",
        profilePicture: "https://i.imgur.com/sdjqD62.jpeg",
        testsTaken: [],
    });

    const testsOptions = [
        { value: "IELTS", label: "IELTS" },
        { value: "TOEFL", label: "TOEFL" },
        { value: "SAT", label: "SAT" },
        { value: "GRE", label: "GRE" },
        { value: "GMAT", label: "GMAT" },
        { value: "ACT", label: "ACT" },
        { value: "Others", label: "Others" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleTestsChange = (selectedTests) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            testsTaken: selectedTests || [], // Ensure null fallback to empty array
        }));
    };

    const handleSave = () => {
        // Make an API call here to save profile data
        console.log("Profile saved:", profile);
    };

    const animatedComponents = makeAnimated();

    return (
        <div className="container mx-auto mt-10 p-10">
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Profile Picture */}
                <div className="mb-4 flex justify-center">
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="rounded-full w-24 h-24"
                    />
                </div>
                {/* Name */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {/* Last Name */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Contact */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Contact
                    </label>
                    <input
                        type="text"
                        name="contact"
                        value={profile.contact}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Bio */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Bio
                    </label>
                    <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Tests Taken */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Tests Taken
                    </label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={testsOptions}
                        value={profile.testsTaken} // Setting the value from state
                        onChange={handleTestsChange} // Updating the selected options
                    />
                </div>
                {/* Save Button */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};