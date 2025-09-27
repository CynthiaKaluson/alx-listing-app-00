const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        LuxuryStays
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search destinations, properties..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 text-gray-600 hover:text-blue-600">Sign in</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign up</button>
                    </div>
                </div>

                {/* Accommodation Types */}
                <nav className="mt-4">
                    <div className="flex space-x-6 overflow-x-auto">
                        {['Rooms', 'Mansion', 'Countryside', 'Villa', 'Apartment', 'Cabin', 'Chalet', 'Penthouse'].map((type) => (
                            <button
                                key={type}
                                className="whitespace-nowrap px-3 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;