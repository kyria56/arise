# Arise Champion Taekwondo Website

A visual-first, minimal website for Arise Champion Taekwondo, designed with a calm, disciplined martial arts aesthetic. The site prioritizes strong imagery and concise text to create the atmosphere of a traditional Taekwondo dojang.

## Features

- **Visual-first design** - Full-width background images throughout
- **Minimal text** - Short statements, keywords, and single-sentence descriptions
- **Mobile-first responsive** - Optimized for all devices, priority on mobile portrait
- **Strong contrast** - Bold text overlays on images for maximum impact
- **Traditional aesthetic** - Calm, disciplined, professional dojo feeling

## Structure

- `index.html` - Main HTML file with all sections
- `styles.css` - Complete styling with full-width image backgrounds
- `script.js` - Navigation and form handling functionality

## Sections

1. **Hero Section** - Full-width training image with "Discipline. Respect. Growth." headline
2. **About** - Background image with three core values (Discipline, Confidence, Community)
3. **Programs** - Three full-width program sections with background images
4. **Values** - Large typography display of core principles (Respect, Focus, Strength, Self-Control)
5. **Gallery** - Grid of training moments
6. **Contact/Join** - Contact form and location information

## Adding Background Images

The site uses full-width background images. To add your Taekwondo photos:

### Hero Section
In `styles.css`, update `.hero-image`:
```css
.hero-image {
    background-image: url('path/to/hero-training-image.jpg');
    /* existing styles */
}
```

### About Section
In `styles.css`, update `.about-image`:
```css
.about-image {
    background-image: url('path/to/about-image.jpg');
    /* existing styles */
}
```

### Program Sections
Each program has its own background. Update `.program-image` in `styles.css` or add inline styles:
```html
<div class="program-image" style="background-image: url('path/to/kids-training.jpg');">
```

### Gallery Images
Replace gallery placeholders with actual images:
```html
<div class="gallery-item">
    <img src="path/to/training-photo.jpg" alt="Training moment" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

**Recommended Image Types:**
- Hero: Group training, sparring, or forms (poomsae)
- About: Group bowing, dojang interior, or traditional training
- Programs: Specific training for each program (kids, teens/adults, competition)
- Gallery: Training moments, belt ceremonies, competitions

### Updating Text

The site uses minimal, concise text:
- **Hero**: Single line (currently "Discipline. Respect. Growth.")
- **About**: Three value words (Discipline, Confidence, Community)
- **Programs**: Program name + one-line subtitle
- **Values**: Four core principles (Respect, Focus, Strength, Self-Control)

Edit these directly in `index.html`. Keep text short and impactful.

### Color Customization

Colors are defined as CSS variables in `styles.css`:
- `--color-primary`: Black (#000) - Main text and headers
- `--color-accent`: Red (#c41e3a) - Accent color for buttons and highlights
- `--color-text`: Dark gray (#1a1a1a) - Body text
- `--color-bg`: White (#ffffff) - Background

### Contact Form

The contact form currently shows an alert on submission. To connect it to a backend:
1. Update the form submission handler in `script.js`
2. Add your API endpoint or form service (e.g., Formspree, Netlify Forms)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

Simply upload all files to your web hosting service. No build process required - it's pure HTML, CSS, and JavaScript.

## Design Philosophy

- **Visual-first**: Images create atmosphere; text provides minimal context
- **Minimal text density**: Short statements, keywords, single sentences
- **Strong contrast**: Bold white text on dark image overlays
- **Traditional feeling**: Calm, disciplined, purposeful - like stepping into a dojang
- **No clutter**: Clean layouts with strong use of negative space

## Notes

- The design prioritizes mobile portrait orientation
- All animations are minimal and subtle
- Typography uses Inter font (loaded from Google Fonts)
- Background images should be high-quality, well-composed Taekwondo training photos
- Text overlays use dark overlays (rgba(0, 0, 0, 0.5)) for readability

