# TrainerPro | Professional Training Portal

TrainerPro is a high-fidelity, comprehensive management portal designed for security training professionals and educators. It provides a centralized hub for tracking trainee progress, managing course materials, scheduling various types of training sessions, and leveraging AI for educational content optimization.

## Core Features

### 1. Analytics and Dashboards
- Executive Overview: Real-time statistics on total trained personnel, average scores, certifications, and compliance rates.
- Completion Trends: Interactive line charts tracking performance over six-month periods.
- Departmental Analysis: Bar charts comparing completion rates across different organizational units.
- Recent Activity Feed: Live updates on trainee progress and certification status.

### 2. Comprehensive Scheduling Suite
- Calendar View: A full month-grid calendar with advanced filters for client, branch, and training type (Classroom, Virtual, Self-Learning).
- Classroom Scheduler: Tools for managing physical sessions, including location tracking and attendance QR codes.
- Virtual Session Scheduler: Integration for meeting platforms (Google Meet, Zoom, Teams) with link sharing and live session controls.
- Self-Learning Path: Configuration for self-paced modules with support trainer assignments and availability windows.
- Session Details: Post-session analysis featuring assessment growth charts and detailed attendee ledgers.

### 3. Training and Employee Management
- Course Management: A visual catalog of training modules with duration, student enrollment, and progress tracking.
- Employee Directory: Detailed profiles for trainees including departmental assignments, certification status, and individual progress bars.

### 4. Communication and Notifications
- Notice Board: Categorized announcements for compliance, training updates, and events with priority labeling.
- Communication Hub: Integrated messaging interface for mentors, administrators, and study groups.

### 5. Artificial Intelligence Tools
- Document Summarizer: AI-powered tool to condense long training documents into concise summaries using Genkit and Gemini.
- Quiz Generator: Automated generation of multiple-choice and short-answer questions from provided training materials to facilitate assessment creation.

## Technical Stack

### Frontend
- Framework: Next.js 15 (App Router)
- Library: React 19
- Styling: Tailwind CSS
- UI Components: ShadCN UI (Radix UI primitives)
- Icons: Lucide React
- Data Visualization: Recharts

### Backend and AI
- AI Integration: Genkit v1.x
- LLM Plugin: Google Generative AI (Gemini 2.5 Flash)
- Database/Auth: Firebase (Firestore and Firebase Authentication)
- Language: TypeScript

### Development Tools
- Package Manager: NPM
- Environment Management: Dotenv
- Routing: Next.js File-based routing

## System Configuration

The application is configured for a dark-themed, professional aesthetic using HSL-based CSS variables defined in the global styles. It leverages Next.js Server Components by default for optimized performance and uses Server Actions for data mutations and GenAI flow execution.