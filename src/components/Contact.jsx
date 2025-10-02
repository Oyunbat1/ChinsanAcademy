"use client"
export default function Contact() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-[#FF9443] mb-6 text-center md:text-left">
         Бидэнтэй холбогдох
        </h3>
        
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
       
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.52 21.53 21 20.94 21C10.47 21 2 12.53 2 3.06C2 2.47 2.48 2 3.08 2H6.08C6.67 2 7.15 2.48 7.15 3.08C7.15 4.03 7.35 4.95 7.73 5.78C7.87 6.1 7.81 6.47 7.58 6.73L5.82 8.79C7.06 11.62 9.38 13.93 12.21 15.18L14.27 13.42C14.53 13.19 14.9 13.13 15.22 13.27C16.05 13.65 16.97 13.85 17.92 13.85C18.52 13.85 19 14.33 19 14.92V17.92C19 18.52 18.52 19 17.92 19H17.93Z" fill="#FF9443"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#9C9C9C] mb-1">Утас</span>
              <a href="tel:+1234567890" className="text-black no-underline transition-colors duration-300 hover:text-[#FF9443]">
                +976-77112233
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#FF9443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#FF9443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#9C9C9C] mb-1">Майл</span>
              <a href="mailto:hello@example.com" className="text-black no-underline transition-colors duration-300 hover:text-[#FF9443]">
               chinsanAcademy@example.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FF9443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FF9443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#9C9C9C] mb-1">Хаяг,байршил</span>
              <span className="text-black transition-colors duration-300 hover:text-[#FF9443]">123 Business St, City</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4 border-t border-gray-300 md:justify-start">
          <a href="#" className="p-2 transition-all duration-300 rounded-full hover:-translate-y-0.5" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9443" className="transition-colors duration-300 hover:fill-[#FF9443]">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"/>
            </svg>
          </a>
          <a href="#" className="p-2 transition-all duration-300 rounded-full hover:-translate-y-0.5" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9443" className="transition-colors duration-300 hover:fill-[#FF9443]">
              <path d="M22 4.01C21 4.5 20.02 4.72 19 5C17.879 3.735 16.217 3.665 14.62 4.263C13.023 4.861 11.977 6.323 12 8V9C8.755 9.1 5.865 7.765 4 5.5C4 5.5 0 12 7 16C5.128 17.247 3.261 18.088 1 18C6.475 20.995 12.972 20.995 18 18C22.667 15.333 24.833 10.667 24 6C23.3396 4.158 22.663 4.008 22 4.01Z"/>
            </svg>
          </a>
          <a href="#" className="p-2 transition-all duration-300 rounded-full hover:-translate-y-0.5" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9443" className="transition-colors duration-300 hover:fill-[#FF9443]">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"/>
              <path d="M6 9H2V21H6V9Z"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"/>
            </svg>
          </a>
          <a href="#" className="p-2 transition-all duration-300 rounded-full hover:-translate-y-0.5" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9443" className="transition-colors duration-300 hover:fill-[#FF9443]">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}