document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const socialMediaData = data.socialMediaData;

      if (socialMediaData.totalFollowers !== undefined) {
        document.getElementById("totalFollowers").textContent =
          "Total Followers: " + socialMediaData.totalFollowers;
      }

      ["facebook", "twitter", "instagram", "youtube"].forEach((platform) => {
        const platformData = socialMediaData[platform];
        const platformElement = document.getElementById(platform);

        if (platformData && platformData.username !== undefined) {
          platformElement.querySelector("span").textContent =
            platformData.username;
        }
        if (platformData && platformData.followers !== undefined) {
          platformElement.querySelector("h1").textContent =
            platformData.followers;
        }
        if (platformData && platformData.followersChange !== undefined) {
          platformElement.querySelector("#followersChange").textContent =
            platformData.followersChange;
        }
        if (platformData && platformData.subscribers !== undefined) {
          platformElement.querySelector("h1").textContent =
            platformData.subscribers;
        }
        if (platformData && platformData.subscribersChange !== undefined) {
          platformElement.querySelector("#subscribersChange").textContent =
            platformData.subscribersChange;
        }
      });

      const overviewData = {
        //facebook
        followers: socialMediaData.facebook.followers,
        followersChangeChange: socialMediaData.facebook.followersChange,
        pageViews: socialMediaData.facebook.pageViews,
        pageViewsChange: socialMediaData.facebook.pageViewsChange,
        likes: socialMediaData.facebook.likes,
        likesChange: socialMediaData.facebook.likesChange,
        //twitter
        followers: socialMediaData.twitter.followers,
        followersChangeChange: socialMediaData.twitter.followersChange,
        retweets: socialMediaData.twitter.retweets,
        retweetsChange: socialMediaData.twitter.retweetsChange,
        likes: socialMediaData.twitter.likes,
        likesChange: socialMediaData.twitter.likesChange,
        //insta
        followers: socialMediaData.instagram.followers,
        followersChangeChange: socialMediaData.instagram.followersChange,
        profileViews: socialMediaData.instagram.profileViews,
        profileViewsChange: socialMediaData.instagram.profileViewsChange,
        likes: socialMediaData.instagram.likes,
        likesChange: socialMediaData.instagram.likesChange,
        //youtube
        totalViews: socialMediaData.youtube.totalViews,
        totalViewsChange: socialMediaData.youtube.totalViewsChange,
        subscribers: socialMediaData.youtube.subscribers,
        subscribersChange: socialMediaData.youtube.subscribersChange,
        likes: socialMediaData.youtube.likes,
        likesChange: socialMediaData.youtube.likesChange,
      };

      Object.keys(overviewData).forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
          element.textContent = overviewData[key];
        }
      });

      // Dark mode toggle
      document
        .getElementById("dark-mode-toggle")
        .addEventListener("change", function () {
          const darkMode = this.checked;
          document.body.style.backgroundColor = darkMode
            ? "hsl(230, 17%, 14%)"
            : "hsl(0, 0%, 100%)";
          document.body.style.color = darkMode
            ? "hsl(0, 0%, 100%)"
            : "hsl(230, 17%, 14%)";
          document
            .querySelectorAll(".followers, .overview")
            .forEach((element) => {
              element.style.backgroundColor = darkMode
                ? "hsl(228, 28%, 20%)"
                : "hsl(227, 47%, 96%)";
              element.style.color = darkMode
                ? "hsl(0, 0%, 100%)"
                : "hsl(230, 17%, 14%)";
            });
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
