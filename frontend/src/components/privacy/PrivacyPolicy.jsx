import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="privacy-effective">Effective Date: March 8, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Bltz AI, Inc. ("Bltz AI," "we," "us," or "our") operates the Bltz AI platform
            and the Bltz AI Monitor browser extension (collectively, the "Services"). This
            Privacy Policy describes how we collect, use, disclose, and protect information
            when you use our Services, including the Bltz AI Monitor browser extension for
            Google Chrome and Microsoft Edge.
          </p>
          <p>
            The Bltz AI Monitor extension is an enterprise AI governance tool designed to
            be deployed by organizations to monitor and enforce policies on employee usage
            of AI platforms including ChatGPT (OpenAI), Claude (Anthropic), and Gemini (Google).
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information Collected by the Browser Extension</h3>
          <p>When the Bltz AI Monitor extension is installed and active, it may collect the following information from supported AI platforms:</p>
          <ul>
            <li><strong>User Identity:</strong> Your browser profile email address, used to associate activity with your organizational account.</li>
            <li><strong>AI Platform Account Information:</strong> Email address, account type, and subscription tier (e.g., free, pro, enterprise) on supported AI platforms.</li>
            <li><strong>Conversation Content:</strong> Text of prompts submitted to supported AI platforms, for the purpose of policy evaluation and enforcement (e.g., detecting sensitive data, prohibited topics, or policy violations).</li>
            <li><strong>File Upload Metadata:</strong> Names and types of files uploaded to AI platforms.</li>
            <li><strong>Tool and Connector Usage:</strong> Information about third-party tools and connectors accessed through AI platforms (e.g., Google Drive, Slack, Microsoft Teams integrations).</li>
            <li><strong>Device and Browser Metadata:</strong> Browser user-agent string, device operating system, and language settings.</li>
            <li><strong>Extension Installation ID:</strong> A unique identifier generated at installation for device identification.</li>
          </ul>

          <h3>2.2 Information Collected by the Platform</h3>
          <p>When you use the Bltz AI web platform, we may collect:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, organization name, and role.</li>
            <li><strong>Usage Data:</strong> Pages visited, features used, and actions taken within the platform.</li>
            <li><strong>Policy Configuration:</strong> Security policies, rules, and enforcement settings configured by your organization.</li>
          </ul>

          <h3>2.3 Information We Do Not Collect</h3>
          <ul>
            <li>We do not collect passwords or authentication credentials for third-party AI platforms.</li>
            <li>We do not collect browsing activity on websites outside of the supported AI platforms.</li>
            <li>We do not collect financial or payment information through the browser extension.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li><strong>Policy Enforcement:</strong> Evaluating AI platform usage against organizational security policies, including detecting sensitive data exposure, prohibited content, and unauthorized tool usage.</li>
            <li><strong>Compliance Reporting:</strong> Generating compliance reports for organizational administrators aligned with frameworks such as NIST AI RMF, ISO 42001, and SOC 2.</li>
            <li><strong>Threat Detection:</strong> Identifying potential security risks including prompt injection attacks, data exfiltration attempts, and unauthorized AI usage.</li>
            <li><strong>Service Operation:</strong> Authenticating users, managing licenses, and maintaining the functionality of our Services.</li>
            <li><strong>Product Improvement:</strong> Analyzing usage patterns in aggregate to improve our Services.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>With Your Organization:</strong> If the extension was deployed by your employer or organization, administrators within your organization may access usage data, policy violation reports, and compliance information.</li>
            <li><strong>Service Providers:</strong> We use third-party service providers to host and operate our Services, including Vercel (hosting) and Supabase (database). These providers process data on our behalf under contractual obligations to maintain confidentiality and security.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            information, including:
          </p>
          <ul>
            <li>All data is transmitted over encrypted HTTPS connections.</li>
            <li>Authentication tokens (JWT) are stored securely in the browser's local storage and are scoped to the extension.</li>
            <li>Access to organizational data is restricted to authorized administrators.</li>
            <li>Our infrastructure providers maintain SOC 2 compliance.</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain collected data for as long as necessary to fulfill the purposes
            described in this policy and as required by your organization's data
            retention policies. Organizational administrators may request deletion of
            their organization's data by contacting us.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and contractual obligations.</li>
            <li><strong>Portability:</strong> Request a portable copy of your data in a structured format.</li>
            <li><strong>Objection:</strong> Object to processing of your personal information in certain circumstances.</li>
          </ul>
          <p>
            If the extension was deployed by your organization, please contact your
            organization's IT administrator to exercise these rights. You may also
            contact us directly at <a href="mailto:privacy@bltz.ai">privacy@bltz.ai</a>.
          </p>
        </section>

        <section>
          <h2>8. Enterprise Deployment</h2>
          <p>
            The Bltz AI Monitor extension is designed for enterprise deployment. When
            deployed by an organization:
          </p>
          <ul>
            <li>The extension is typically installed and managed by your organization's IT department.</li>
            <li>Your organization determines which policies are enforced and what data is collected.</li>
            <li>Your organization's administrators have access to usage reports and policy violation data.</li>
            <li>Your organization is the data controller; Bltz AI acts as the data processor.</li>
          </ul>
        </section>

        <section>
          <h2>9. Browser Permissions</h2>
          <p>The Bltz AI Monitor extension requires the following browser permissions to function:</p>
          <ul>
            <li><strong>Debugger:</strong> Used to intercept network traffic on supported AI platforms for real-time policy evaluation.</li>
            <li><strong>Identity:</strong> Used to identify the browser profile for user association.</li>
            <li><strong>Tabs &amp; Web Navigation:</strong> Used to detect when users navigate to supported AI platforms.</li>
            <li><strong>Storage:</strong> Used to store authentication tokens locally.</li>
            <li><strong>Scripting:</strong> Used to inject content scripts on supported AI platforms for conversation monitoring.</li>
            <li><strong>DeclarativeNetRequest:</strong> Used for network-level policy enforcement.</li>
          </ul>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of
            material changes by posting the updated policy on this page with a revised
            effective date. Your continued use of the Services after changes are posted
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices,
            please contact us at:
          </p>
          <p>
            <strong>Bltz AI, Inc.</strong><br />
            Email: <a href="mailto:privacy@bltz.ai">privacy@bltz.ai</a><br />
            Website: <a href="https://bltz.ai">https://bltz.ai</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
