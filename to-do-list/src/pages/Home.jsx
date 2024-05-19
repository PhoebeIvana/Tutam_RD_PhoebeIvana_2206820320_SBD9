import { useEffect, useState } from "react";

function Home() {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  const [data, setData] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch existing data
  const fetchData = async () => {
    // to avoid blocking
    const response = await fetch(`${process.env.REACT_APP_API_URI}/read`);
    const json = await response.json();
    setData(json);
  };

  // Add new data
  const addData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URI}/create`, {
      // object
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // [BE]:[FE]
      body: JSON.stringify({ description, deadline: date }),
    });
    await fetchData();
  };

  // Update data
  const updateData = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/update/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, deadline: date }),
      }
    );
    await fetchData();
  };

  // Delete data
  const deleteData = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/delete/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    await fetchData();
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen`}
    >
      <div className="p-10 max-w-5xl w-full bg-white shadow-2xl rounded-xl">
        <h1 className="text-left text-5xl font-serif font-bold text-gray-800">
          TO-DO-LIST
        </h1>
        <div className="border-t-2 border-gray-400 mt-4 mb-8"></div>
        <p>Current time: {time}</p>
        <label className="block font-semibold text-gray-700">Task</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="p-2 border border-gray-300 rounded-lg w-full"
          placeholder="Add More Item"
        />
        <label className="block font-semibold text-gray-700 mt-4">
          Deadline
        </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
        <button
          onClick={addData}
          className="mt-4 p-2 bg-gray-800 text-white rounded-lg font-bold w-full"
        >
          ADD
        </button>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center w-full p-2 gap-4 bg-gray-200 rounded-lg shadow"
          >
            <div className="flex flex-col gap-1 p-2 flex-grow">
              <h1 className="font-semibold">{item.description}</h1>
              <p className="text-sm">{item.deadline}</p>
            </div>
            <button
              onClick={() => deleteData(item._id)}
              className="ml-auto bg-red-500 text-white rounded-lg p-1"
            >
              Delete
            </button>
            <button
              onClick={() => updateData(item._id)}
              className="bg-blue-500 text-white rounded-lg p-1"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
