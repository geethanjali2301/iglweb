import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Platforms } from "@/components/home/Platforms";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { Security } from "@/components/home/Security";
import { About } from "@/components/home/About";
import { Publishers } from "@/components/home/Publishers";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <Platforms />
      <WhoWeServe />
      <Security />
      <About />
      <Publishers />
      <CTA />
    </Layout>
  );
};

export default Index;
