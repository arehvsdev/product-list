function Navigation() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-purple-600">ShopZen</a>
                    </div>
                    {/* Links */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-purple-600">Products</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-purple-600">About</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;