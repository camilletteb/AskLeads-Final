import { cn } from "@/lib/utils";

const logos = [
  { name: "Brevo", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Brevo_Logo.svg/2560px-Brevo_Logo.svg.png" },
  { name: "Zapier", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/2560px-Zapier_logo.svg.png" },
  { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" },
  { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "HubSpot", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png" },
  { name: "Mailchimp", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mailchimp_freddie_icon.svg/1011px-Mailchimp_freddie_icon.svg.png" },
];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 bg-slate-50/50 backdrop-blur-sm border-y border-slate-100">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 px-8">
          {logos.map((logo) => (
            <img
              key={`${logo.name}-duplicate`}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
