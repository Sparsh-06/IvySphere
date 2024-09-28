
export const ApplicationTracker = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Application Tracker</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Pending Applications</h2>
                        <ul className="list-none">
                            <li className="border-b py-2">
                                <div className="flex justify-between">
                                    <span>Application 1</span>
                                    <span className="text-gray-500">Status: Pending</span>
                                </div>
                            </li>
                            <li className="border-b py-2">
                                <div className="flex justify-between">
                                    <span>Application 2</span>
                                    <span className="text-gray-500">Status: Pending</span>
                                </div>
                            </li>
                            {/* Add more list items as needed */}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Completed Applications</h2>
                        <ul className="list-none">
                            <li className="border-b py-2">
                                <div className="flex justify-between">
                                    <span>Application 3</span>
                                    <span className="text-gray-500">Status: Completed</span>
                                </div>
                            </li>
                            <li className="border-b py-2">
                                <div className="flex justify-between">
                                    <span>Application 4</span>
                                    <span className="text-gray-500">Status: Completed</span>
                                </div>
                            </li>
                            {/* Add more list items as needed */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
