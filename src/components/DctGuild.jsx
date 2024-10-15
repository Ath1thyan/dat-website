import React from "react";
import "./DctGuild.css"; // Custom styles for this component
import {
  Alexoppenheim,
  AmiAussia2,
  HakimWebsite,
  Jason,
  Rochelle,
  RodHolden,
  Tony2,
  kheng,
} from "../assets/index";

const DctGuild = () => {
  const members = [
    {
      id: 1,
      name: "Hakim Belabbes",
      role: "Hakim is an internationally renowned and award winning Moroccan American filmmaker, an auteur of visual, aural and cinematic narrative who taught film at Columbia College and The School of the Art Institute in Chicago. Hakim visual imagery captures the richness of Arabic oral storytelling as the traditional intersection for creating space for observation, contemplation and reflection. Hakim currently also runs The Sahara Lab Initiative with partners Don Smith and Hammadi Gueroum in the southern Moroccan city of Laayoune",
      image: HakimWebsite,
    },
    {
      id: 2,
      name: "Tony Moeini",
      role: "Tony is an American serial entrepreneur and arch-angel investor who discovers and mentors high-potential start-ups and change-agents across the South East Asia, the Middle East and Central Asia in diverse fields such as real estate development and investment. fintech, proptech, pharmaceuticals, wireless communications, consumer electronics, crowdsourcing. social networking, user-generated content online video, mobile network security, electronic music, fiber- optic networking, online marketing, and many others.",
      image: Tony2,
    },
    {
      id: 3,
      name: "Amir Aussia",
      role: "Amir is a technology and management executive with over 25 years of experience and understanding of financial markets, models and management with tremendous passion for emerging Frontier Technology. He is often sought by venture capital and private equity firms for investment strategies across a diverse portfolio of start-ups, entrepreneurial and incubator programs in Europe, the Americas and the Middle East. He is active in developing and innovating in convergence methodologies for technology-based business transformation via multi-digital channels built on decentralized autonomous organisations, digital asset management and blockchain production labs.",
      image: AmiAussia2,
    },
    {
      id: 4,
      name: "Rochelle Flaherty",
      role: "An experienced UK choreographer of professional dance and aerial performances, is founder of Exposure Concepts which specialises in entertainment for exclusive corporate and high-end private events, product launches, concerts, fashion, sports and TVCs for prestige clients including Audemars Piguet, Audi, Breitling, Cartier, Chopard, Deloitte, Facebook, F1 Singapore, HSBC, L’Occitane, Google, Mercedes, Porsche, and Ted Baker.",
      image: Rochelle,
    },
    {
      id: 5,
      name: "Rodney Holden",
      role: "A seasoned international procurement subject matter expert with over 30 years extensive experience in both the public and private sectors of Canada, Europe and the Middle East across a diverse range of industries involving complex and strategic procurement including critical outsourcing resources, raw materials. construction, professional services. IT, retail goods. printing, utilities, capital equipment, facilities management and 3rd party logistics.",
      image: RodHolden,
    },
    {
      id: 6,
      name: "Jason Chong",
      role: "Jason is a charismatic and imaginative business leader who has wide knowledge of upscaling and diversifying commercial prospects in North and South East Asia over the past 20 years. He has an Asia wide logistics and supply chain network active in China, Japan, South Korea and Taiwan that support a diverse array of Industrial, retail and e-commerce ventures in Indonesia. Malaysia and Singapore.",
      image: Jason,
    },
    {
      id: 7,
      name: "Alex Openhiem",
      role: "Alex is a talented multidisciplinary industry creative and strategist who drives conceptual design across a range of print and digital mediums. He has worked directly with a range of global A-brands from start-ups through to national governing bodies, international creative agencies, renewable energy companies and within the FMCG sector.",
      image: Alexoppenheim,
    },
    {
      id: 8,
      name: "Lim Teck Kheng",
      role: "Kheng, co-founder of KAMI, a community-driven social-fi network for creatives, is seasoned industry veteran with over 30 years extensive experience in Music, A&R, Artist Development, Creative/Aesthetic Direction and Management with leading global music heavyweights, BMG, David Geffen, Polygram, Sony and Universal Music. He works alongside regional and international artists, songwriters, producers, directors and creators in the lifestyle, entertainment and media industries. He spearheads digital marketing, content distribution, engagement and consumer outreach across technology channels.",
      image: kheng,
    },
  ];

  return (
    <section id="DctGuild" className="main dct-guild">
      <h1 className="guild-title">DCT Guild</h1>
      <p className="guild-description">
        DCT deeply values the counsel, and perspective of experienced regional
        and international industry entrepreneurs and market innovation for
        insights, exchange of ideas-and shared knowledge on a variety of
        strategies in order to fulfil our promise av DCT in plaving nor art.
      </p>
      <p className="guild-description">
        As a team, we are stronger with our diverse skills and competencies, and
        a deep sense of purpose
      </p>
      <div className="guild-members">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img
              src={member.image}
              alt={member.name}
              className="w-[400px] h-[400px] object-cover mb-[20px]"
            />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DctGuild;
