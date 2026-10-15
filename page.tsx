"use client";

import { useRef, useState } from "react";
import { Instagram, Send, Volume2, VolumeX, ExternalLink } from "lucide-react";

const profile = {
  name: "Sazan The greatest Muthbazz Sher",
  role: "Developer",
  bio: "Developer • Programmer",
  avatar: "/avatar.jpg",
  links: [
    { label: "Telegram", href: "https://t.me/RCBWON", icon: Send },
    { label: "Instagram", href: "https://instagram.com/sazan.olds", icon: Instagram }
  ]
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted) void video.play().catch(() => setMuted(true));
  }

  return (
    <main className="page">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/poster.jpg"
        aria-label="Looping background video"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="backdrop" />
      <button className="sound-toggle" onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Mute video"}>
        {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>

      <section className="profile" aria-label="Personal profile">
        <div className="avatar-wrap">
          <img className="avatar" src={profile.avatar} alt={`${profile.name} profile picture`} />
          <span className="avatar-ring" />
        </div>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.role}</p>

        <nav className="socials" aria-label="Social links">
          {profile.links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <Icon size={25} strokeWidth={2.2} />
            </a>
          ))}
        </nav>

        <a className="info-card" href="https://instagram.com/sazan.olds" target="_blank" rel="noreferrer">
          <img src={profile.avatar} alt="" className="card-avatar" />
          <span className="card-copy">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
            <span>{profile.bio}</span>
          </span>
          <ExternalLink className="card-external" size={17} />
        </a>
        <p className="footer-note">made with <span>♥</span></p>
      </section>
    </main>
  );
}
