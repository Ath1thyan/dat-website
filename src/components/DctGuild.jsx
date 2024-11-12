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
      role: "Hakim is an internationally renowned and award winning Moroccan American filmmaker, an auteur of visual, aural and cinematic narrative...",
      image: HakimWebsite,
    },
    {
      id: 2,
      name: "Tony Moeini",
      role: "Tony is an American serial entrepreneur and arch-angel investor who discovers and mentors high-potential start-ups and change-agents...",
      image: Tony2,
    },
    {
      id: 3,
      name: "Amir Aussia",
      role: "Amir is a technology and management executive with over 25 years of experience and understanding of financial markets, models and management...",
      image: AmiAussia2,
    },
    {
      id: 4,
      name: "Rochelle Flaherty",
      role: "An experienced UK choreographer of professional dance and aerial performances, is founder of Exposure Concepts which specialises in entertainment...",
      image: Rochelle,
    },
    {
      id: 5,
      name: "Jason Chong",
      role: "Jason is a charismatic and imaginative business leader who has wide knowledge of upscaling and diversifying commercial prospects in North and South East Asia...",
      image: Jason,
    },
    {
      id: 6,
      name: "Alex Openhiem",
      role: "Alex is a talented multidisciplinary industry creative and strategist who drives conceptual design across a range of print and digital mediums...",
      image: Alexoppenheim,
    },
    {
      id: 7,
      name: "Lim Teck Kheng",
      role: "Kheng, co-founder of KAMI, a community-driven social-fi network for creatives, is seasoned industry veteran with over 30 years extensive experience...",
      image: kheng,
    },
    {
      id: 8,
      name: "Rodney Holden",
      role: "A seasoned international procurement subject matter expert with over 30 years extensive experience in both the public and private sectors...",
      image: RodHolden,
    },
  ];

  return (
    <section id="DctGuild" className="main dct-guild">
      <h1 className="guild-title">DCT Guild</h1>
      <p className="guild-description">
        DCT deeply values the counsel, and perspective of experienced regional and international industry entrepreneurs and market innovation for insights...
      </p>
      <div className="guild-members">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <div className="member-details">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DctGuild;
