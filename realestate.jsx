import React from "react";
import { motion } from "framer-motion";

// Single-file React landing page component using Tailwind CSS
// Default export so it can be previewed in the canvas.

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 pt-8 md:pt-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">IvoryBot — Real Estate Automation</h1>
            <p className="text-xs text-slate-600">AI + No-Code systems that capture, nurture, and close.</p>
          </div>
        </div>
        <nav className="space-x-4 hidden md:flex items-center">
          <a href="#features" className="text-sm hover:underline">Features</a>
          <a href="#pricing" className="text-sm hover:underline">Pricing</a>
          <a href="#demo" className="text-sm hover:underline">Demo</a>
          <a href="#contact" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:opacity-95 text-sm">Get Started</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Automations for Real Estate Teams that actually close more deals
            </motion.h2>

            <p className="mt-6 text-lg text-slate-700">From automated lead capture and instant follow-ups to social posting and reporting — IvoryBot handles the busywork so your agents can sell more properties.</p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#pricing" className="inline-block bg-emerald-500 text-white px-5 py-3 rounded-lg font-medium shadow hover:opacity-95">Start at $300 / month</a>
              <a href="#demo" className="text-sm font-medium text-indigo-600 hover:underline">Watch 90s demo</a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="p-3 bg-white/60 rounded-lg shadow-sm">✅ Lead capture from website, FB & WhatsApp</li>
              <li className="p-3 bg-white/60 rounded-lg shadow-sm">✅ Automated follow-ups & bookings</li>
              <li className="p-3 bg-white/60 rounded-lg shadow-sm">✅ AI-generated social posts & captions</li>
              <li className="p-3 bg-white/60 rounded-lg shadow-sm">✅ Weekly performance dashboards</li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl shadow-2xl overflow-hidden border border-white/20 bg-white">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4e3b2b664b0d6d2b8c3a9f4d0a1eb8d0" alt="Real estate" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Sample Dashboard</h3>
                    <p className="text-xs text-slate-500">Leads, follow-ups and property engagement at a glance</p>
                  </div>
                  <div className="text-right text-xs text-slate-500">Updated: Today</div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-50">
                    <div className="text-2xl font-bold">28</div>
                    <div className="text-xs text-slate-500">New leads</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs text-slate-500">Contacted</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-xs text-slate-500">Viewings</div>
                  </div>
                </div>

              </div>
            </div>

            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute -bottom-6 left-6 w-64 p-4 bg-white/95 rounded-2xl shadow-lg border">
              <div className="text-xs text-slate-500">Auto follow-up preview</div>
              <div className="mt-2 text-sm font-medium">Hi James — thanks for your enquiry about 3-bed townhouse. Are you free for a viewing this week?</div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="mt-16">
          <h3 className="text-2xl font-semibold">What we automate</h3>
          <p className="mt-2 text-slate-600">Everything a modern real estate agency needs to capture and convert leads — without extra hires.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Lead Capture</h4>
              <p className="mt-2 text-sm text-slate-600">Connect website forms, Facebook leads, and WhatsApp to a central CRM that logs every enquiry automatically.</p>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>• Auto-tag leads by source</li>
                <li>• Instant agent notification</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Follow-ups & Bookings</h4>
              <p className="mt-2 text-sm text-slate-600">Never lose a lead. Timed drip sequences, SMS/WhatsApp nudges, and automated booking links.</p>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>• Drip email & WhatsApp flows</li>
                <li>• Calendar integration</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Social & Content</h4>
              <p className="mt-2 text-sm text-slate-600">AI writes attention-grabbing posts and captions. Schedule weekly property posts to Instagram, Facebook and LinkedIn.</p>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>• Weekly post generator</li>
                <li>• Caption + hashtag suggestions</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">CRM & Reporting</h4>
              <p className="mt-2 text-sm text-slate-600">Airtable or Notion-based CRM with automated weekly reports you can send to owners or managers.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Agent Onboarding</h4>
              <p className="mt-2 text-sm text-slate-600">Automatically create agent profiles, assign leads and send training materials.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Secure & Private</h4>
              <p className="mt-2 text-sm text-slate-600">We use secure free tools and keep data access controlled — you stay in control of your leads.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-16">
          <h3 className="text-2xl font-semibold">Pricing</h3>
          <p className="mt-2 text-slate-600">Simple, transparent plans for agencies of every size.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50 border shadow">
              <div className="text-sm uppercase text-slate-500">Starter</div>
              <div className="mt-3 text-3xl font-extrabold">$300<span className="text-base font-medium">/mo</span></div>
              <p className="mt-2 text-sm text-slate-600">Lead capture, follow-ups, social content, weekly reports — perfect for small agencies.</p>
              <ul className="mt-4 text-sm text-slate-700 space-y-2">
                <li>• Up to 500 leads / month</li>
                <li>• 1-hour setup</li>
                <li>• Email & WhatsApp automation</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block bg-emerald-500 text-white px-4 py-2 rounded-lg shadow">Start Starter</a>
            </div>

            <div className="p-6 rounded-2xl bg-white border shadow-lg">
              <div className="text-sm uppercase text-slate-500">Growth</div>
              <div className="mt-3 text-3xl font-extrabold">$900<span className="text-base font-medium">/mo</span></div>
              <p className="mt-2 text-sm text-slate-600">Custom workflows, multi-agent support, and priority onboarding.</p>
              <ul className="mt-4 text-sm text-slate-700 space-y-2">
                <li>• Up to 2,000 leads / month</li>
                <li>• 3-hour setup with training</li>
                <li>• Monthly strategy call</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Start Growth</a>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-indigo-50 border shadow">
              <div className="text-sm uppercase text-slate-500">Enterprise</div>
              <div className="mt-3 text-3xl font-extrabold">$2,500<span className="text-base font-medium">+ / one-off</span></div>
              <p className="mt-2 text-sm text-slate-600">Full migration, bespoke automations, and onboarding for larger brokerages.</p>
              <ul className="mt-4 text-sm text-slate-700 space-y-2">
                <li>• Custom limits</li>
                <li>• Dedicated SLA</li>
                <li>• Onsite / remote training</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Contact Sales</a>
            </div>
          </div>
        </section>

        <section id="demo" className="mt-16">
          <h3 className="text-2xl font-semibold">Demo — 90 seconds</h3>
          <p className="mt-2 text-slate-600">Watch a quick walkthrough of a live automation — capture to close.</p>

          <div className="mt-6 aspect-video rounded-2xl overflow-hidden shadow">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </section>

        <section id="testimonials" className="mt-16">
          <h3 className="text-2xl font-semibold">What realtors say</h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <div className="text-sm text-slate-500">Sarah, Broker</div>
              <p className="mt-3 text-slate-700">“We doubled showing requests in the first month. Agents love it — no more manual follow-ups.”</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <div className="text-sm text-slate-500">Paul, Agency Owner</div>
              <p className="mt-3 text-slate-700">“Setup was fast. The weekly reports save me hours and our conversion improved.”</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <div className="text-sm text-slate-500">Lina, Listing Manager</div>
              <p className="mt-3 text-slate-700">“The social generator is brilliant — captions that actually get likes.”</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="p-6 bg-gradient-to-br from-indigo-600 to-emerald-400 text-white rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold">Ready to automate?</h4>
              <p className="mt-2 opacity-90">Book a free audit and demo. We'll show where you're losing leads and how to fix it in 48 hours.</p>

              <ul className="mt-4 text-sm">
                <li>• 90-sec demo video</li>
                <li>• Free automation audit</li>
                <li>• Fast setup (1–3 days)</li>
              </ul>

              <a href="mailto:hello@ivorybot.example?subject=Automation%20Audit%20Request" className="mt-6 inline-block bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold">Request Audit</a>
            </div>

            <form className="p-6 bg-white rounded-2xl shadow flex flex-col gap-3">
              <label className="text-sm font-medium">Name</label>
              <input className="border p-2 rounded-md" placeholder="Your name" />
              <label className="text-sm font-medium">Agency</label>
              <input className="border p-2 rounded-md" placeholder="Agency name" />
              <label className="text-sm font-medium">Email or WhatsApp</label>
              <input className="border p-2 rounded-md" placeholder="you@agency.com or +2547..." />
              <label className="text-sm font-medium">Message</label>
              <textarea className="border p-2 rounded-md h-24" placeholder="Tell us what you'd like automated..."></textarea>

              <button type="button" className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold">Request audit</button>
              <div className="text-xs text-slate-400">We never share your data. Uses free tools you can audit.</div>
            </form>
          </div>
        </section>

      </main>

      <footer className="border-t bg-white/60 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} IvoryBot — Real Estate Automation</div>
          <div className="text-sm text-slate-600">Built with ChatGPT + No-Code • <a href="#contact" className="underline">Contact</a></div>
        </div>
      </footer>
    </div>
  );
}
