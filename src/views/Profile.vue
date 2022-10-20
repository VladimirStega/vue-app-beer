<template>
  <div class="home">
    <Header />
    <UserMainInfo />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import UserMainInfo from "@/components/UserMainInfo";
import Footer from "@/components/Footer";

export default {
  name: "Profile",
  components: { Header, UserMainInfo, Footer },
};
</script>
