const SkeletonCard = () => {
    return (
        <div className="w-32 md:w-40 animate-pulse">
            <div className="rounded-md w-full h-60 mb-2 overflow-hidden">
                <div className="bg-gray-300 h-full w-full" />
            </div>
            <p className="w-4/5 h-4 bg-gray-300 mb-1 rounded" />
            <div className="flex gap-2">
                <div className="w-12 h-3 bg-gray-300 rounded" />
                <div className="w-12 h-3 bg-gray-300 rounded" />
            </div>
        </div>
    );
}

export default SkeletonCard