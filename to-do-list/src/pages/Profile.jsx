const Profile = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="p-6 max-w-md w-full bg-white rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center">
                        <img className="h-32 w-32 rounded-full border-4 border-gray-300" src="./assets/picture.jpg" alt="Phoebe Ivana" />
                        <h1 className="text-3xl font-serif font-bold text-gray-800 mt-4">Phoebe Ivana</h1>
                        <div className="text-center mt-3">
                            <p className="text-xl text-gray-600">Student ID: 2206820320</p>
                            <p className="text-xl text-gray-600">Major: Teknik Komputer</p>
                            <p className="text-xl text-gray-600">University: Universitas Indonesia</p>
                        </div>
                        <button className="mt-6 py-2 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold text-lg">Follow</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
