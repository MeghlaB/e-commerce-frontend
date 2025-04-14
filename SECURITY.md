# Security Policy

## Supported Versions

This repository currently maintains version **0.1.0**. Only the latest version is actively supported with security updates. Past versions might not receive security patches.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.0   | ✅ Yes             |
| < 0.1.0 | ❌ No              |

## Reporting a Vulnerability

If you believe you have found a security vulnerability in this project, please **do not open a public issue**.

Instead, report it directly via one of the following methods:

- **Email:** [Akash Saha (asaha8313@gmail.com)](mailto:asaha8313@gmail.com)  
- **GitHub Security Advisory:**  
  If you prefer to use GitHub’s built-in security advisory system, please [submit a private advisory](https://docs.github.com/en/code-security/security-advisories).

We aim to acknowledge reports within 72 hours, and work to resolve them as quickly as possible.

## Security Best Practices

The following guidelines are recommended for contributors and maintainers:

### Authentication & Authorization
- **Firebase Authentication:**  
  This project uses Firebase Authentication along with NextAuth to verify users. Always verify Firebase ID tokens on the backend for protected routes.
- **Role-Based Access Control (RBAC):**  
  Ensure that sensitive operations (e.g., product creation, update, deletion) are only accessible by authorized roles. Enforce these rules both in UI (client-side) and on your backend.

### Data Validation & Sanitization
- **Input Validation:**  
  All input data is validated via Mongoose schemas on the backend. Avoid trusting client input without proper validation and sanitization.
- **Sanitization:**  
  Implement sanitization for all user-generated content before storing or rendering it to prevent Cross-Site Scripting (XSS).

### Secure Communications
- **HTTPS Everywhere:**  
  Ensure your API endpoints and frontend use HTTPS. The Axios library is configured (or should be configured) to use secure connections.
- **Environment Variables:**  
  Sensitive configuration values (e.g., API keys, database passwords) should be stored securely and should not be exposed in the frontend (note that only variables prefixed with `NEXT_PUBLIC_` are exposed).

### Dependency Management
- **Regular Updates:**  
  This project uses a number of security-sensitive libraries such as Next.js, Firebase, Axios, and React Query. Regularly review and update these dependencies to fix potential vulnerabilities.
- **npm audit:**  
  Run `npm audit` and address any vulnerabilities in your dependencies.
- **Lock File:**  
  Use `package-lock.json` or `yarn.lock` to ensure that you maintain control over package versions across different environments.

### Cross-Site Scripting (XSS) & Injection
- **Avoid Direct HTML Injection:**  
  Do not use `dangerouslySetInnerHTML` unless absolutely necessary and sanitize any HTML content before rendering.
- **Safe Image Handling:**  
  Use Next.js's `<Image>` component to securely render images. Validate and sanitize image URLs on the backend.

### Cross-Site Request Forgery (CSRF)
- **CSRF Protection:**  
  With token-based authentication (like Firebase Auth), CSRF risk is minimized. However, if you ever introduce cookies for session management, implement CSRF tokens.

### Rate Limiting & Brute Force Protection
- **API Rate Limiting:**  
  Consider adding rate limiting to API endpoints to protect against brute-force attacks. This can be implemented with middleware or via services like Cloudflare.
- **Brute Force Attacks:**  
  Monitor failed authentication attempts and consider implementing account lockout or CAPTCHAs when a threshold is exceeded.

## Additional Recommendations

- **Security Headers:**  
  Configure HTTP security headers (e.g., Content-Security-Policy, X-Frame-Options, X-Content-Type-Options) either via Next.js middleware or your hosting provider.
- **Monitoring & Logging:**  
  Enable robust logging on both client and server sides to detect and respond to potential security incidents promptly.
- **Third-Party Services:**  
  Review the security documentation for Firebase, NextAuth, and other integrated services as they are critical to your app’s security posture.

## Contributing to Security

We welcome contributions that enhance the security of this project. If you are submitting a pull request with security enhancements:
- Clearly explain the changes and their security implications.
- Include tests where applicable.
- Use the `[Security]` tag in your PR title.

For any questions or clarifications regarding security practices, please contact the repository maintainers directly.

---

*This policy is maintained by the project maintainers and may be updated periodically to address new security challenges.*
