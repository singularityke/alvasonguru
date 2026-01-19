import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
  phone?: string;
  
}

export function EmailTemplate({ fullName, email, message, phone }: EmailTemplateProps) {
  return (
    <body className="bg-gray-100 p-4 sm:p-8">

  <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    
    <header className="bg-brand p-8 text-center">
      <h1 className="text-white text-2xl font-bold tracking-tight">New Contact Inquiry</h1>
      <p className="text-white/80 mt-2 text-sm italic">You have a new message from your website</p>
    </header>

    <main className="p-8 space-y-6">
      
      <div className="border-b border-gray-100 pb-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Full Name</p>
        <p className="text-gray-800 font-semibold text-lg">{fullName}</p>
      </div>

      <div className="border-b border-gray-100 pb-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email Address</p>
        <p className="text-brand font-medium hover:underline">{email}</p>
      </div>

      <div className="border-b border-gray-100 pb-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Phone Number</p>
        <p className="text-gray-800">{phone}</p>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Message Content</p>
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand italic text-gray-700 leading-relaxed">
          message
        </div>
      </div>

    </main>

    <footer className="bg-gray-50 p-6 text-center">
      <p className="text-xs text-gray-400">
        Sent via your website Contact Form &bull; 2026
      </p>
    </footer>

  </div>

</body>
  );
}