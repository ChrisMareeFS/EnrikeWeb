# Mobile Responsiveness Checklist

## Mobile Breakpoints Used

The site uses Tailwind CSS breakpoints:
- **Mobile**: Default (no prefix) - up to 768px
- **Tablet**: `md:` - 768px and up
- **Desktop**: `lg:` - 1024px and up
- **Large Desktop**: `xl:` - 1280px and up

## Components Checked

### ✅ Navigation Bar
- Mobile menu button visible on small screens
- Hamburger menu implemented
- Links stack vertically on mobile
- Logo scales appropriately

### ✅ Hero Section (Home)
- Title scales: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- Padding adjusts: `px-6 lg:px-12`
- Grid changes to single column on mobile
- Buttons stack vertically on mobile: `flex-col sm:flex-row`

### ✅ About Section
- Text scales: `text-base md:text-lg`
- Grid layout: `grid lg:grid-cols-2` (stacks on mobile)
- Buttons stack: `flex-col sm:flex-row`
- Padding adjusts: `p-8 lg:p-10`

### ✅ Services Section
- Grid: `grid sm:grid-cols-2 lg:grid-cols-3` (1 col mobile, 2 tablet, 3 desktop)
- Cards have responsive padding: `p-6 md:p-8`
- Text scales appropriately

### ✅ Featured Content Section
- Grid: `grid sm:grid-cols-2 lg:grid-cols-4` (responsive)
- Cards scale properly

### ✅ Contact CTA Section
- Buttons stack: `flex-col sm:flex-row`
- Text scales: `text-lg md:text-xl`

### ✅ Inner Pages (Speaking, Consulting, Resources, Contact)
- Hero panels centered on mobile: `mx-auto lg:mx-0`
- Grids stack on mobile
- Forms are full-width on mobile
- Text scales appropriately

## Potential Mobile Issues to Check

1. **Horizontal Scroll on Home Page**
   - Should work with touch gestures
   - Scroll indicators visible
   - Navigation dots sized appropriately

2. **Glass Cards**
   - Should not overflow on small screens
   - Text remains readable
   - Padding sufficient on mobile

3. **Images**
   - Should load optimized versions
   - Proper sizing with `sizes` attribute
   - No horizontal overflow

4. **Forms**
   - Inputs should be full-width on mobile
   - Buttons stack vertically
   - Text remains readable

## Testing Recommendations

1. **Test on Real Devices**
   - iPhone (Safari)
   - Android (Chrome)
   - iPad (Safari)
   - Various screen sizes

2. **Browser DevTools**
   - Use responsive design mode
   - Test at: 375px, 768px, 1024px, 1280px

3. **Key Areas to Test**
   - Navigation menu functionality
   - Horizontal scrolling on home page
   - Form submissions
   - Image loading
   - Button interactions
   - Text readability

## Known Mobile Considerations

- Horizontal scroll on home page uses `touch-pan-x` for better mobile support
- Navigation dots are smaller on mobile: `w-2 h-2` vs `w-6 md:w-8`
- Glass cards use responsive padding throughout
- All grids collapse to single column on mobile
- Buttons stack vertically on small screens

