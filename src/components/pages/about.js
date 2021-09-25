import React from "react";

import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
        dolores ex iure distinctio, dignissimos delectus quo inventore facilis
        vitae, voluptatibus adipisci eum suscipit fuga non numquam aliquam
        accusantium? Fugiat? Doloribus, asperiores recusandae ad exercitationem
        cupiditate adipisci, odio similique fuga vel voluptate quam deleniti
        modi consequatur nobis libero ex vitae hic ab magnam iusto eligendi
        dolores. Cumque vitae alias consequuntur! Exercitationem, est. Voluptas
        quis illum quisquam quod ratione impedit repellendus temporibus
        voluptatibus beatae quibusdam reiciendis, similique doloribus hic fugiat
        officiis quos ut, nisi aliquid perferendis, fugit placeat? Architecto,
        nulla voluptatem? Voluptatem quos consectetur adipisci fuga accusantium
        praesentium enim nam maxime vitae debitis corrupti hic perferendis ipsam
        odit soluta impedit, expedita ipsum repudiandae ex, velit dolore in
        alias voluptas inventore. A!
      </div>
    </div>
  );
}
