import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pill";
import { useState } from "react";

export default function Home() {
    const [activeFilter, setActiveFilter] = useState<string>("All");

    const filters = [
        "All", "Top Villa", "Self Checkin", "Mountain View", "Beachfront",
        "Pool", "Pet Friendly", "Luxury", "Budget"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center bg-no-repeat py-20"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200')"
                }}
            >
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Find your favorite place here!
                    </h1>
                    <p className="text-xl md:text-2xl">
                        The best prices for over 2 million properties worldwide.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="bg-white border-b py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {filters.map((filter) => (
                            <Pill
                                key={filter}
                                label={filter}
                                isActive={activeFilter === filter}
                                onClick={() => setActiveFilter(filter)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Listing Section */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>

                    {/* Property Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {PROPERTYLISTINGSAMPLE.map((property, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Property Image */}
                                <div className="h-48 bg-gray-200 relative">
                                    <img
                                        src={property.image}
                                        alt={property.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {property.discount && (
                                        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                                            {property.discount}% OFF
                                        </div>
                                    )}
                                </div>

                                {/* Property Details */}
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-lg">{property.name}</h3>
                                        <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                            ⭐ {property.rating}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-2">
                                        {property.address.city}, {property.address.state}, {property.address.country}
                                    </p>

                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <span className="text-2xl font-bold text-blue-600">${property.price}</span>
                                            <span className="text-gray-500 text-sm"> / night</span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {property.offers.bed} bed • {property.offers.shower} bath
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}