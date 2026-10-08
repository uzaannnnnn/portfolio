import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const openMailClient = (name, email, message) => {
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Halo Fauzan,\n\n${message || ""}\n\n---\nDari: ${name || "-"}\nEmail: ${email || "-"}`
    );
    window.location.href = `mailto:vanz66hu@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_skdaz5m";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_63pqh4j";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Ga3TzSCNjftZNQZs2";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          to_name: "Muhamad Fauzan",
          from_email: formData.email,
          reply_to: formData.email,
          to_email: "vanz66hu@gmail.com",
          message: formData.message,
        },
        publicKey
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Pesan Anda berhasil terkirim ke vanz66hu@gmail.com!");
    } catch (error) {
      setIsLoading(false);
      console.warn(
        "EmailJS API issue detected, opening email client fallback:",
        error
      );
      // Fallback directly to mailto prefilled to vanz66hu@gmail.com so no message is ever dropped
      openMailClient(formData.name, formData.email, formData.message);
      showAlertMessage(
        "info",
        "Membuka aplikasi email untuk mengirim langsung ke vanz66hu@gmail.com..."
      );
    }
  };

  return (
    <section
      className="relative flex items-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-6 mx-auto border border-white/10 rounded-2xl bg-primary shadow-2xl">
        <div className="flex flex-col items-start w-full gap-3 mb-8">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400 text-sm leading-relaxed">
            Ready to build something great together? Whether it&apos;s a new site, a
            revamp, or a custom project — I&apos;m open to collaborate!
          </p>
          <a
            href="mailto:vanz66hu@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-sand hover:text-white transition-colors mt-1 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-sand group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>vanz66hu@gmail.com</span>
          </a>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-base font-semibold text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50"
            >
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
            <button
              type="button"
              onClick={() =>
                openMailClient(formData.name, formData.email, formData.message)
              }
              className="w-full py-2.5 text-xs font-medium text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Kirim langsung via Email (vanz66hu@gmail.com)</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
