"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  CheckCircle2,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroGirl from "../public/HeroGirl.svg";
import StudentBackgroundContact from "../public/StudentBackgroundContact.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-medium">mathsWithAaron</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900"
            >
              features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              prices
            </Link>
            <Link
              href="#contact"
              className="text-[#7c3aed] hover:text-[#6d28d9]"
            >
              +94 076-158-4543
            </Link>
            <Button className="bg-[#ff6b6b] hover:bg-[#fa5252] text-white rounded-full px-6">
              student portal
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Heading & Buttons */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">
              WHERE <span className="text-[#7c3aed]">EDXCEL</span>
              <br />
              <span className="text-[#ff6b6b]">MATHEMATICS</span>
              <br />
              BECOMES A BREEZE
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-600">
                —With Aaron
              </span>
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                Explore Tuition Fees
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-2"
              >
                Contact Details
              </Button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center">
            <Image
              src={HeroGirl}
              alt="Student studying"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">
              Why choose our program?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience a revolutionary approach to learning mathematics that
              combines personalized attention with proven teaching methods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Learning",
                description:
                  "Tailored instruction that adapts to your learning style and pace",
                icon: "👤",
              },
              {
                title: "Expert Guidance",
                description:
                  "Learn from me - Aaron, someone who has experianced the same struggles",
                icon: "🎓",
              },
              {
                title: "Comprehensive Support",
                description:
                  "24/7 access to learning resources and support materials through the student portal",
                icon: "📚",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-16">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "The personalized attention I received helped me achieve an A* in my EDXCEL Mathematics exam.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "The teaching methods are innovative and make complex concepts easy to understand.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                text: "I went from struggling with math to becoming one of the top performers in my class.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#ffd700] text-[#ffd700]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-medium">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* About me section */}

      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-16"> 
            About <span className="text-[#ff6b6b]">me</span> 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-medium mb-4">Aaron Emmanuel</h3>
              <p className="text-gray-600 mb-4">
              I am Aaron Emmanuel, an undergraduate pursuing a BSc in Computer Science at the Informatics Institute of Technology (IIT).
               While I am just beginning my journey as a tutor, I am passionate about mathematics and eager to help students build confidence and achieve their academic goals. 
               My teaching philosophy is centered on making mathematics accessible, engaging, and enjoyable for everyone. 
               I am committed to providing personalized support and creating a positive learning experience for my students.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in tutoring students for the EDXCEL Mathematics exam. I offer personalized instruction that adapts to your learning style and pace. I provide expert guidance and comprehensive support to help you succeed in your studies.
              </p>
              <p className="text-gray-600 mb-4">
                If you are looking for a tutor who can help you achieve your academic goals, look no further. Contact me today to schedule a session.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffe4d6] rounded-[2rem] transform -rotate-3"></div>
              <Image
                src={StudentBackgroundContact}
                alt="Contact support"
                className="relative z-10 rounded-[2rem] w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-16">
            Class Prices & Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Online",
                price: "LKR 1000",
                features: [
                  "Weekly Group Sessions",
                  "Study Materials",
                  "Practice Tests",
                ],
              },
              {
                title: "Group",
                price: "LKR 1500",
                features: [
                  "1-on-1 Sessions",
                  "Personalized Study Plan",
                  "Mock Exams",
                  "24/7 Support",
                ],
                highlighted: true,
              },
              {
                title: "Individual",
                price: "LKR 2500",
                features: [
                  "2x Weekly 1-on-1 Sessions",
                  "Advanced Study Materials",
                  "Weekly Progress Reports",
                  "Priority Support",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  plan.highlighted
                    ? "border-2 border-[#7c3aed] relative shadow-xl"
                    : "border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7c3aed] text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-medium mb-2">{plan.title}</h3>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-base font-normal text-gray-600">
                    per hour
                  </span>
                </p>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#7c3aed] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-[#7c3aed] hover:bg-[#6d28d9]"
                      : "bg-gray-900 hover:bg-gray-800"
                  } text-white rounded-full`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-medium mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions? We&apos;re here to help. Contact us through any
                of the following methods.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#7c3aed] mr-4" />
                  <div>
                    <p className="font-medium">Whatsapp/Phone</p>
                    <p className="text-gray-600">+94 076-158-4543</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#7c3aed] mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">ajemmanuel45@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#7c3aed] mr-4" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">
                      101/1 Galle Road, Mount Lavinia, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffe4d6] rounded-[2rem] transform -rotate-3"></div>
              <Image
                src={StudentBackgroundContact}
                alt="Contact support"
                className="relative z-10 rounded-[2rem] w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-medium">mathsWithAaron</span>
              </div>
              <p className="text-gray-400">
                Making mathematics education accessible and enjoyable for
                everyone.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Study Materials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 mathsWithAaron. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
