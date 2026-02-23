# Customization Guide

This portfolio template is designed to be easily customizable. Here's what you can change:

## Personal Information

### src/pages/Home.tsx
- Change "Your Name" to your actual name
- Update the tagline and description
- Modify the skills section (Web Development, UI/UX Design, Performance)

### src/components/Layout.tsx
- Update the "Portfolio" logo text to your preferred branding

### src/pages/Contact.tsx
- Change the email address (your.email@example.com)
- Update your location
- Contact form submissions can be connected to a backend or email service

## Projects

### src/pages/Projects.tsx
- Replace the 3 example projects with your actual work
- Update titles, descriptions, tech stacks
- Change GitHub and demo links
- Replace stock images with your project screenshots

## Colors & Styling

The current theme uses emerald green as the accent color. To change:
- Find all instances of `emerald` in the files
- Replace with another Tailwind color (blue, purple, pink, orange, etc.)

Example: `bg-emerald-500` becomes `bg-blue-500`

## Footer

### src/components/Layout.tsx
- Update the copyright text with your name
- Add social media links if desired

## Images

All project images use Pexels stock photos. Replace them with:
- Your actual project screenshots
- Or other stock photos from Pexels or similar services

## Adding More Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/Layout.tsx`

That's it! Your portfolio is production-ready and fully customizable.
