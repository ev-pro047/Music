"use client";

import { useEffect } from "react";

const youtubeUrl =
  "https://www.youtube.com/results?search_query=KK+MUSIC+HOUSE+SEC86+FBD";

export default function SiteFixes() {
  useEffect(() => {
    // Remove the word "local" from the rating text.
    document.querySelectorAll(".hero-meta span").forEach((element) => {
      if (element.textContent?.includes("local rating")) {
        element.innerHTML = "<strong>4.7</strong> rating";
      }
    });

    // Use the shop's published YouTube name and remove unverified Facebook.
    const socialLinks = document.querySelectorAll<HTMLAnchorElement>(".socials a");
    socialLinks.forEach((link) => {
      const label = link.getAttribute("aria-label")?.toLowerCase();
      if (label === "youtube") {
        link.href = youtubeUrl;
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      if (label === "facebook") {
        link.remove();
      }
    });

    // Replace the decorative map with a real Google Maps embed.
    const mapCard = document.querySelector<HTMLElement>(".map-card");
    if (mapCard) {
      const wrapper = document.createElement("div");
      wrapper.className = "map-card map-embed";
      wrapper.innerHTML = `
        <iframe
          title="KK Music House location on Google Maps"
          src="https://www.google.com/maps?q=KK%20Music%20House%20Sai%20Dham%20Road%20Sector%2086%20Faridabad&output=embed"
          width="100%"
          height="100%"
          style="border:0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      `;
      mapCard.replaceWith(wrapper);
    }
  }, []);

  return null;
}
