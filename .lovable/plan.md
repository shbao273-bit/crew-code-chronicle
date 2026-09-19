# The Family — Hip-Hop Editorial Site

## Direction
Build a single scrolling family introduction site styled like an underground hip-hop magazine: charcoal-black surfaces, vivid red accents, oversized condensed type, torn-paper edges, grain, stamps, graffiti marks, and asymmetric compositions.

## Pages and sections
- **Hero:** “THE FAMILY” title, “5 PEOPLE. 1 CREW. 1 STORY.” line, layered five-person portrait collage, animated stickers, and a scroll cue.
- **Meet The Crew:** Five visually distinct profile cards with portrait, name, nickname, role, personality, favorite thing, and funny description. Cards shift and reveal details on hover/focus while staying touch-friendly.
- **Family Timeline:** A staggered editorial timeline with replaceable milestone copy.
- **Fun Facts:** Large-number magazine blocks with playful family statistics.
- **Family Quote:** Full-width album-cover-style statement.
- **Ending:** Minimal contact invitation and closing mark.

## Visual system
- Palette: near-black, charcoal, paper white, signal red, and restrained concrete gray.
- Typography: bold condensed display face paired with a neutral grotesk body face.
- Image treatment: cohesive monochrome/red-tinted generated placeholder portraits, framed with tape, rough masks, and halftone/grain overlays.
- Motion: restrained title glitch, floating stickers, marquee movement, scroll-triggered entrances, and responsive card interaction. Reduced-motion preferences will be respected.

## Technical details
- Implement in the existing TanStack React route at `/` with route-specific social metadata.
- Define all reusable colors, shadows, textures, type, and animation tokens centrally in the design system.
- Load web fonts through the document head.
- Generate and bundle five local portrait assets rather than shipping remote placeholders.
- Verify desktop and mobile layouts, interactions, overflow, contrast, and the current preview build.
