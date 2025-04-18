import React from "react";

export const metadata = {
  id: "transport-policy-updates",
  title: "Home-to-School Transport Policy Updates",
  date: "2024-05-15",
  summary: "Liverpool City Council has approved changes to its home-to-school transport policy while maintaining support for SEND pupils."
};

export default function TransportPolicy() {
  return (
    <div className="news-article">
      <p>Liverpool City Council has approved changes to its home-to-school transport policy to bring it in line with national guidance and target support to those who need it most.</p>
      
      <p>The new policy, following a 2024 public consultation, will take effect in September 2025. Importantly, <strong>all pupils with Special Educational Needs and Disabilities (SEND) will continue to have their transport needs assessed on an individual basis</strong> under the new system.</p>
      
      <p>Key points about the policy changes:</p>
      
      <ul>
        <li>Current recipients will remain supported while at their existing schools</li>
        <li>Free travel assistance will be available only for the nearest suitable school</li>
        <li>Distance criteria for older children will be adjusted</li>
        <li>Special protections will be in place for low-income families</li>
      </ul>
      
      <p>These changes aim to create a more sustainable transport assistance program while ensuring those with the greatest needs receive appropriate support.</p>
    </div>
  );
} 