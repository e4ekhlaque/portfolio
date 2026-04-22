import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const API =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        `${API}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus(
          "✅ Message sent successfully!"
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          "❌ " +
            (data.message ||
              "Failed to send message.")
        );
      }
    } catch (error) {
      console.error(
        "CONTACT ERROR:",
        error
      );

      setStatus(
        "❌ Cannot connect to server."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 md:px-10 bg-gray-100 dark:bg-gray-800 scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 bg-transparent"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 bg-transparent"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 bg-transparent"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition disabled:opacity-60"
        >
          {loading
            ? "Sending..."
            : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm mt-2">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}