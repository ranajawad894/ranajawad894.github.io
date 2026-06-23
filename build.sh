#!/bin/bash
# Rebuilds index.html by inlining all section files in order.
# Run this after editing any file in /sections to update index.html.

OUT="index.html"

cat > "$OUT" << 'HTMLHEAD'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Muwahid Travels — Umrah Packages & Gulf Air Tickets</title>
<meta name="description" content="Muwahid Travels — trusted Umrah packages, Hajj guidance, and air ticket bookings for the Gulf region. Based in Sialkot, Pakistan.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

HTMLHEAD

for f in sections/header.html sections/hero.html sections/trust-strip.html sections/about.html sections/packages.html sections/hotels.html sections/flights.html sections/why-us.html sections/testimonials.html sections/faq.html sections/contact.html sections/footer.html sections/whatsapp-float.html; do
  cat "$f" >> "$OUT"
  echo "" >> "$OUT"
done

cat >> "$OUT" << 'HTMLFOOT'
<script src="js/main.js"></script>
<script>
  // Wire up nav, FAQ, and forms once the page has loaded
  document.addEventListener('DOMContentLoaded', initMuwahidSite);
</script>

</body>
</html>
HTMLFOOT

echo "Built $OUT successfully."
