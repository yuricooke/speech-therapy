# Tatiana Cooke Munkes - Multilingual Speech Therapy Website

A modern, responsive Next.js website for a multilingual speech language therapist based in Hamburg, Germany.

## Features

- **Multilingual Support**: Available in English, Portuguese (Brazil), and German
- **Modern Design**: Clean, professional design with Sass styling
- **Responsive**: Fully responsive across all devices
- **Component-Based**: Modular React components for easy maintenance
- **App Router**: Uses Next.js 14+ App Router for optimal performance

## Tech Stack

- **Next.js 14+** with TypeScript
- **Sass** for styling (NO Tailwind)
- **React** components with modern hooks
- **Font Optimization** with Next.js font loading

## Components

- **Hero**: Main landing section with therapist introduction
- **Overview**: Welcome section with therapy overview
- **Products**: Therapy services showcase (6 main services)
- **About**: Detailed information about Tatiana and multilingual approach
- **Partnerships**: Professional affiliations and qualifications
- **Footer**: Contact information and site navigation

## Languages Supported

- **English (EN)**: Primary language for international clients
- **Portuguese (PT-BR)**: Native language for Brazilian community
- **German (DE)**: Local language for Hamburg residents

## Services Offered

1. **Orofacial Therapy**: Muscle function and coordination
2. **Swallowing & Feeding**: Assessment and treatment of disorders
3. **Auditory Processing**: Evaluation and therapy
4. **Speech Therapy**: Articulation and communication
5. **Language Development**: Multilingual support
6. **Stuttering Treatment**: Fluency disorder therapy

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The website uses:
- Sass for styling with CSS variables for theming
- TypeScript for type safety
- Component-based architecture
- Mobile-first responsive design

## Content Management

All content is managed in `src/utils/content.ts` with full multilingual support. To add new content or modify existing text:

1. Edit the content in `src/utils/content.ts`
2. Add new interface types in `src/types/index.ts` if needed
3. Update components to use new content fields

## Styling

- Global styles: `src/styles/globals.scss`
- Component styles: Individual `.module.scss` files
- Color scheme: Professional teal (#2f8c8a) with warm accents
- Typography: Droid Serif and Bree Serif fonts

## Contact Information

- **Address**: Gluckstraße 57, 22081 - Hamburg
- **Phone**: +49 1514 6538687
- **Email**: tcmunkes@gmail.com

## Professional Background

Tatiana Cooke Munkes is a multilingual speech language therapist recognized by the authorities of the health department of the state of Hamburg, Germany, with over 25 years of experience working in Brazil, England, Switzerland, USA, and Germany.

---

Built with ❤️ using Next.js and Sass - NO Tailwind CSS used as requested!
