import React from 'react';

const PageLayout = ({ title, children }) => (
    <div className="container mx-auto px-6 py-12 md:py-20 animate-fade-in font-poppins text-base-content">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">{title}</h1>
        <div className="prose prose-lg mx-auto bg-base-100 p-8 rounded-xl shadow-lg border border-base-300">
            {children}
        </div>
    </div>
);

export const Branding = () => (
    <PageLayout title="Branding">
        <p>Welcome to our Branding resources. Here at MovieMaster Pro, we believe in a consistent and powerful visual identity.</p>
        <h3>Our Logo</h3>
        <p>Our logo represents the lens through which we view the cinematic world. It should not be altered or distorted.</p>
        <h3>Colors</h3>
        <p>We use a distinct palette of primary and secondary colors that evoke emotion and excitement, much like the movies we love.</p>
    </PageLayout>
);

export const Design = () => (
    <PageLayout title="Design">
        <p>Our design philosophy revolves around user-centricity and aesthetic pleasure.</p>
        <h3>Principles</h3>
        <ul>
            <li><strong>Clarity:</strong> Information should be easy to find and understand.</li>
            <li><strong>Engagement:</strong> Interactive elements should delight the user.</li>
            <li><strong>Accessibility:</strong> Our platform is designed for everyone.</li>
        </ul>
    </PageLayout>
);

export const Marketing = () => (
    <PageLayout title="Marketing">
        <p>Connect with our Marketing team for collaborations and partnerships.</p>
        <p>We are open to:</p>
        <ul>
            <li>Brand Partnerships</li>
            <li>Affiliate Programs</li>
            <li>Sponsored Content</li>
        </ul>
    </PageLayout>
);

export const Advertisement = () => (
    <PageLayout title="Advertisement">
        <p>Reach a vast audience of movie enthusiasts by advertising with MovieMaster Pro.</p>
        <p>Contact us to learn more about our banner slots, newsletter features, and sponsored movie lists.</p>
    </PageLayout>
);

export const AboutUs = () => (
    <PageLayout title="About Us">
        <p>MovieMaster Pro was born from a passion for cinema. We wanted a place where movie lovers could organize their favorites and discover hidden gems.</p>
        <p>Our mission is to build the world's most user-friendly movie tracking platform.</p>
        <p><strong>Founded:</strong> 2024</p>
        <p><strong>HQ:</strong> Dhaka, Bangladesh</p>
    </PageLayout>
);

export const Jobs = () => (
    <PageLayout title="Jobs">
        <p>Join the MovieMaster Pro team! We are looking for passionate individuals to help us grow.</p>
        <h3>Open Positions</h3>
        <ul>
            <li>Frontend Developer (React)</li>
            <li>Backend Engineeer (Node.js)</li>
            <li>UI/UX Designer</li>
        </ul>
        <p>Send your CV to careers@moviemaster.com</p>
    </PageLayout>
);

export const PressKit = () => (
    <PageLayout title="Press Kit">
        <p>Resources for media professionals.</p>
        <ul>
            <li><a href="#" className="link link-primary">Download Official Logo Pack</a></li>
            <li><a href="#" className="link link-primary">Executive Headshots</a></li>
            <li><a href="#" className="link link-primary">Company Fact Sheet</a></li>
        </ul>
    </PageLayout>
);

export const TermsOfUse = () => (
    <PageLayout title="Terms of Use">
        <p>By using MovieMaster Pro, you agree to the following terms...</p>
        <h3>1. Usage</h3>
        <p>You may use the site for personal, non-commercial purposes.</p>
        <h3>2. Content</h3>
        <p>User-generated content must respect our community guidelines.</p>
    </PageLayout>
);

export const PrivacyPolicy = () => (
    <PageLayout title="Privacy Policy">
        <p>Your privacy is important to us. This policy details how we handle your data.</p>
        <h3>Data Collection</h3>
        <p>We collect basic usage statistics and account information to improve your experience.</p>
        <h3>Security</h3>
        <p>We use industry-standard encryption to protect your data.</p>
    </PageLayout>
);

export const CookiePolicy = () => (
    <PageLayout title="Cookie Policy">
        <p>We use cookies to enhance navigation and analyze site traffic.</p>
        <p>You can adjust your browser settings to refuse cookies, but some site features may not function properly.</p>
    </PageLayout>
);
