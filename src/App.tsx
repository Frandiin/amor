import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/90 shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-500">FitPro</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#services" className="text-white hover:text-yellow-500">
                Services
              </a>
              <a href="#about" className="text-white hover:text-yellow-500">
                About
              </a>
              <a href="#plans" className="text-white hover:text-yellow-500">
                Plans
              </a>
              <a href="#contact" className="text-white hover:text-yellow-500">
                Contact
              </a>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400">
                Schedule
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#services"
                  className="block text-white hover:text-yellow-500 py-2"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block text-white hover:text-yellow-500 py-2"
                >
                  About
                </a>
                <a
                  href="#plans"
                  className="block text-white hover:text-yellow-500 py-2"
                >
                  Plans
                </a>
                <a
                  href="#contact"
                  className="block text-white hover:text-yellow-500 py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Transform your body,
              <br />
              <span className="text-yellow-500">Transform your life</span>
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl">
              Specialized personal trainer focused on real results. Customized
              training for your specific goals.
            </p>
            <div className="mt-5 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10">
                  First Class Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Specialized Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Customized training for every goal
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Personalized Training",
                description:
                  "Exclusive programs designed for your specific goals.",
              },
              {
                title: "Nutrition Consulting",
                description: "Nutritional guidance to maximize your results.",
              },
              {
                title: "Online Coaching",
                description:
                  "Ongoing support and adjustments to your training program.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-black">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-400 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Me
            </h2>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3"
                  alt="Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                With over 10 years of experience, I specialize in physical
                transformation and well-being. My approach combines effective
                workouts, proper nutrition, and constant support to ensure you
                achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Plans
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Choose the perfect plan for your goals
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "$99",
                features: [
                  "2 workouts per week",
                  "Monthly physical assessment",
                  "WhatsApp support",
                ],
              },
              {
                name: "Premium",
                price: "$199",
                highlight: true,
                features: [
                  "3 workouts per week",
                  "Bi-weekly physical assessment",
                  "Nutrition consulting",
                  "24/7 support",
                  "Exclusive app",
                ],
              },
              {
                name: "VIP",
                price: "$299",
                features: [
                  "5 workouts per week",
                  "Weekly physical assessment",
                  "Nutrition consulting",
                  "24/7 support",
                  "Exclusive app",
                  "In-home workouts",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-4 text-4xl font-bold">
                    {plan.price}
                    <span className="text-sm">/month</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-8 w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
                    plan.highlight
                      ? "bg-black text-yellow-500 hover:bg-gray-900"
                      : "bg-yellow-500 text-black hover:bg-yellow-400"
                  }`}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Real Results
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Transformations that changed lives
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                before:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
                after:
                  "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
                name: "Carlos Silva",
                result: "-33 lbs in 3 months",
              },
              {
                before:
                  "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
                after:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
                name: "Maria Santos",
                result: "+11 lbs of lean muscle",
              },
              {
                before:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
                after:
                  "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
                name: "Pedro Oliveira",
                result: "Muscle definition in 6 months",
              },
            ].map((transformation, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={transformation.after}
                      alt="After"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
                    <p className="text-white font-bold">
                      {transformation.name}
                    </p>
                    <p className="text-yellow-500">{transformation.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Me?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Commitment to your goals
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Proven Experience",
                description: "Over 500 clients transformed in 10 years",
              },
              {
                title: "Exclusive Method",
                description: "Customized workouts based on science and results",
              },
              {
                title: "Premium Support",
                description: "Constant support via WhatsApp and exclusive app",
              },
              {
                title: "Results Guarantee",
                description:
                  "If you don't see results in 30 days, we refund your money",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What My Clients Say
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Paula",
                photo:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
                testimonial:
                  "Best decision I ever made! In 3 months, I saw incredible results. The support is phenomenal!",
                age: "32 years old",
              },
              {
                name: "Roberto Gomes",
                photo:
                  "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
                testimonial:
                  "Workouts that fit my busy schedule. Surprising results even with limited time.",
                age: "45 years old",
              },
              {
                name: "Juliana Costa",
                photo:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
                testimonial:
                  "Nutrition consulting made all the difference. I lost weight and gained so much energy!",
                age: "28 years old",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.age}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to see results?",
                answer:
                  "With dedication and following the plan, initial results are visible in 30 days. More significant results in 90 days.",
              },
              {
                question: "Do I need prior experience with exercise?",
                answer:
                  "No! Our approach is tailored for all levels, from beginners to advanced.",
              },
              {
                question: "How does online coaching work?",
                answer:
                  "You'll have access to an exclusive app, detailed exercise videos, and daily WhatsApp support.",
              },
              {
                question: "What if I have an injury or limitation?",
                answer:
                  "We conduct a full assessment and adapt exercises to your specific conditions.",
              },
            ].map((faq, index) => (
              <div key={index} className="mt-8 border-b border-gray-800">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-yellow-500">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Ready to transform your life?
          </h2>
          <p className="mt-4 text-xl text-gray-900">
            Start now with a free assessment and get 1 week of training!
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-black hover:bg-gray-900 md:py-4 md:text-lg md:px-10">
              I Want to Start Today!
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-900">*Limited-time offer</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Schedule your free assessment
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-400"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              2024 FitPro Personal Trainer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
