# Web Digital Playbook Layout & Design Plan

This document outlines the architecture, interactive features, and design integration for the Happy Voyager Digital Playbook. The goal is to create an experience that feels like a Notion document, but is significantly more interactive, beautifully themed, and tailored to the brand.

## 1. Overall Layout Architecture

The playbook will utilize a modern 3-column documentation layout for maximum usability:

- **Left Sidebar (Main Navigation)**
  - Fixed position, collapsible on smaller screens.
  - Categorized list of modules and chapters.
  - Clear active state highlighting the current page.
- **Main Content Area (Center)**
  - Spacious, centered container (`max-w-3xl`) optimized for reading length.
  - Breadcrumb navigation at the top (e.g., `Playbook > Chapter 1 > Lesson 2`).
  - Chapter Title, Description, and Estimated Read Time.
- **Right Sidebar (Table of Contents)**
  - Sticky "On this page" navigation for long documents.
  - Automatically highlights the active section based on the user's scroll position.

## 2. Interactive Components ("Notion, but better")

To make the playbook truly engaging rather than a static wall of text, we'll build these interactive React components:

- **Interactive Checklists**: Clickable checklists for actionable items. Progress can be saved locally so the user can track what they've completed.
- **Toggle/Accordion Blocks**: For deep-dives, extra context, or FAQs, keeping the main reading flow clean.
- **Content Tabs**: Perfect for presenting alternative choices (e.g., "Budget Route" vs. "Luxury Route") without taking up vertical space.
- **Progress Tracking**: A subtle progress bar at the top of the screen showing reading progress.
- **Hover Tooltips**: For travel jargon or quick tips without leaving the paragraph.
- **Command Menu (Cmd+K)**: A globally accessible search modal to quickly jump between chapters and topics.

## 3. Color Palette Integration & Callout Blocks

We will utilize the Happy Voyager core palette to create semantic callout blocks that guide the reader:

- **Background**: Soft Cream (`#f9f5f2`) for a clean, distraction-free reading experience.
- **Text/Foreground**: Charcoal (`#3a3a3a`) for high contrast and readability.
- **Interactive Elements / Links**: Dusty Rose (`#e3a99c`) with hover animations.
- **Callout Blocks**:
  - 💡 **Pro Tip / Highlight**: Soft Peach (`#f2d6c9`) background. Used for highly valuable, expert advice.
  - 📝 **Note / Context**: Warm Beige (`#e7ddd3`) background. Used for general information or asides.
  - ✅ **Action Item / Success**: Sage Green (`#bbcccd`) background. Used for "Do this next" steps.

## 4. Typography & Styling

- **Font Family**: Avenir (consistent with the landing page).
- **Headings (H1, H2, H3)**: Clear hierarchy with ample margin-top to separate sections.
- **Body Text**: `leading-relaxed` (1.75 line height) to prevent eye strain during long reading sessions.
- **Images/Media**: Full-width images with rounded corners (`rounded-2xl`) and subtle shadow, optionally opening into a lightbox when clicked.

---

## 5. Content Outline 
*(User, please add your content below. Use Markdown headings (H2, H3) and indicate where you'd like checklists or callouts!)*

### Introduction
*Add your welcome text, what they will learn, etc.*

### Chapter 1: [Your Title Here]
*Add your content here...*

### Chapter 2: [Your Title Here]
*Add your content here...*
