import { useState } from "react";

export default function AccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    additionalInfo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Account Information</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-bold text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="additionalInfo" className="block mb-2 text-sm font-bold text-gray-700">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-md shadow-md transition duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
        >
          Save Information
        </button>
      </form>
    </div>
  );
}
