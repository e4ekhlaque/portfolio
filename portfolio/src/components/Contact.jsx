import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ FIX: useEffect inside component
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.botcheck) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "275d5609-bb1e-4adf-8ce5-27982cb52a1c",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "New Portfolio Message",
          from_name: form.name,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          message: "",
          botcheck: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
        {/* Honeypot */}
        <input
          type="text"
          name="botcheck"
          value={form.botcheck}
          onChange={handleChange}
          className="hidden"
        />

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
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-600 text-center text-sm">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center text-sm">
            ❌ Failed to send message.
          </p>
        )}
      </form>
    </section>
  );
}
