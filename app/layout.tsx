import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/app/components/FloatingWhatsapp";
import Nav from "@/app/components/Nav";
import Aichat from "@/app/components/Aichat";
import TawkToChat from "@/app/components/TawkToChat";

export const metadata: Metadata = {
  title: "Best Immigration Visa Consultants in Hyderabad Bangalore PR Visa| Study Visa| Job Seeker Visa| Visit Visa| Investor Visa| Tourist Visa| Dependent Visa| Work Permit Visa",
  description: "Best Immigration Visa Consultants in Hyderabad and Bangalore Process for PR Visa, Study Visa, Job Seeker Visa, Visit Visa, Investor Visa, Tourist Visa, Dependent Visa, Work Permit Visa and much more so Settle your Life in Abroad with Permanent Residency Visa, Germany Opportunity Card, Study or Student Visa Immigration, Job Seeker Visa, Work Permit Visa and much more options for your future so Contact Immediately for free Assessment and Check eligibility",
  keywords: "Best Immigration Visa Consultants in Hyderabad, Best Immigration Visa Consultants in Bangalore, Best Immigration Visa Consultants, Visa Consultants, Best Immigration Consultants, Best Visa Consultants, Immigration Visa Consultants, Visa Consultants, PR Visa, Permanent Residency Visa, Germany Opportunity Card, Study or Student Visa Immigration, Job Seeker Visa, Work Permit Visa"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tawk.to Chat Widget */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6731ab974304e3196ae000d2/1icd0cijr';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: '"PT Serif", serif' }}
      >
        <Nav/>
        {children}
        <FloatingWhatsApp />
        <TawkToChat/>
        <Aichat/>
      </body>
    </html>
  );
}
