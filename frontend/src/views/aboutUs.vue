<template>
  <div class="about-us-container">
    <div class="about-us-content-box">
      <h2 class="about-us-heading">About Us</h2>
      <p class="about-us-text">
        The Barangay Information System is designed to bring the services of the barangay closer to the community in a modern and efficient way. It transforms traditional record-keeping and manual processes into a centralized digital platform where residents can easily access information, submit requests, and connect with barangay services. Through this system, the barangay ensures transparency, accessibility, and convenience, creating a bridge between local officials and residents. More than just a portal, it is a reflection of the community’s commitment to progress, unity, and service for every citizen.
      </p>
    </div>

    <div class="about-us-mission-box">
      <h3 class="about-us-subheading">MISSION</h3>
      <p class="about-us-text">
        Our mission is to provide residents with fast, reliable, and transparent access to barangay services through the use of technology. We aim to strengthen community engagement, ensure that information is accessible to all, and promote accountability in local governance. By streamlining processes, we want to make services easier and more convenient, allowing residents to focus on building stronger families and communities.
      </p>
    </div>

    <div class="about-us-vision-box">
      <h3 class="about-us-subheading">VISION</h3>
      <p class="about-us-text">
        We envision a barangay that is empowered by technology and guided by transparency, unity, and service. A community where every resident feels connected, informed, and valued. Through innovation and strong leadership, we strive to become a model barangay that other communities can look up to—one that balances tradition with modernization for the benefit of all.
      </p>
    </div>

    <div class="about-us-values-box">
      <h3 class="about-us-heading">CORE VALUES</h3>
      <p class="about-us-text">
        Our work is guided by the values that shape our service to the community:
      </p>
      <ol class="about-us-values-list">
        <li>
          <strong>1. Transparency</strong> – We believe in open communication and honest governance to earn the trust of our people.
        </li>
        <li>
          <strong>2. Service</strong> – We place the needs of our community first and dedicate our efforts to improving the quality of life of every resident.
        </li>
        <li>
          <strong>3. Unity</strong> – We value cooperation and respect, recognizing that progress is achieved when we work together.
        </li>
        <li>
          <strong>4. Accountability</strong> – We are responsible stewards of resources and decisions, ensuring fairness and integrity in all our actions.
        </li>
        <li>
          <strong>5. Innovation</strong> – We embrace technology and new ideas to continuously improve barangay services and community development.
        </li>
      </ol>
    </div>

    <div class="about-us-officials-section">
      <h2 class="about-us-heading">BARANGAY OFFICIALS</h2>
      <p class="about-us-officials-text">
        Meet the leaders who serve and represent our community. They work together to ensure that the barangay is safe, peaceful, and progressive for all residents.
      </p>

      <div class="officials-group">
        <div class="officials-title">Barangay Captain</div>
        <div class="about-us-official-card">
          <div class="about-us-official-photo-box">
            <img src="@/assets/fb.png" alt="Barangay Captain Photo" class="about-us-official-photo" />
          </div>
          <p class="about-us-official-name">Juan Dela Cruz</p>
        </div>
      </div>

      <div class="officials-group">
        <div class="officials-title">Barangay Kagawad (Councilors)</div>
        <div class="councilors-grid">
          <div class="about-us-official-card" v-for="i in 7" :key="i">
            <div class="about-us-official-photo-box">
              <img src="@/assets/fb.png" :alt="`Barangay Kagawad Photo ${i}`" class="about-us-official-photo" />
            </div>
            <p class="about-us-official-name">Juan Dela Cruz</p>
          </div>
        </div>
      </div>

      <div class="other-officials">
        <div class="other-official-card">
          <div class="about-us-official-photo-box">
            <img src="@/assets/fb.png" alt="Secretary Photo" class="about-us-official-photo" />
          </div>
          <div>
            <p class="about-us-official-position">Secretary</p>
            <p class="about-us-official-name">Roberto Castillo</p>
          </div>
        </div>
        <div class="other-official-card">
          <div class="about-us-official-photo-box">
            <img src="@/assets/fb.png" alt="Treasurer Photo" class="about-us-official-photo" />
          </div>
          <div>
            <p class="about-us-official-position">Treasurer</p>
            <p class="about-us-official-name">Elena Cruz</p>
          </div>
        </div>
        <div class="other-official-card">
          <div class="about-us-official-photo-box">
            <img src="@/assets/fb.png" alt="SK Chairman Photo" class="about-us-official-photo" />
          </div>
          <div>
            <p class="about-us-official-position">SK Chairman</p>
            <p class="about-us-official-name">Kevin Morales</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// No import is needed since we're using a static placeholder image path
export default {
  name: "AboutUs",
};
</script>

<style scoped>
/* You might need to add or adjust styles for the actual image within the photo box */
.about-us-official-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the box without distortion */
  border-radius: inherit; /* Inherits border-radius from parent if set */
}
</style>