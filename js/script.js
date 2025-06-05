function _applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-gray-950', 'text-gray-100');
    document.body.classList.remove('bg-white', 'text-gray-900');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.add('bg-white', 'text-gray-900');
    document.body.classList.remove('bg-gray-950', 'text-gray-100');
  }
}

// Set theme based on system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
_applyTheme(prefersDarkScheme.matches);
prefersDarkScheme.addEventListener('change', (e) => _applyTheme(e.matches));

document.addEventListener('DOMContentLoaded', function() {
  // Fix model cards
  const modelCards = document.querySelectorAll('.flex.justify-between.items-center, .flex.justify-between.items-center.flex-wrap');
  modelCards.forEach(card => {
    // Apply inline styling for more reliable layout
    card.style.display = 'flex';
    card.style.flexDirection = 'row';
    card.style.flexWrap = 'nowrap';
    card.style.justifyContent = 'space-between';
    card.style.alignItems = 'center';
    card.style.gap = '0.5rem';
  });
  
  // Fix Quick Fact-Checking card with orange border
  const factCheckingCard = document.querySelector('.quick-fact-checking');
  if (factCheckingCard) {
    factCheckingCard.style.border = '2px solid #f97316';
    factCheckingCard.style.minHeight = '10rem';
  }
  
  // Fix research example icon sizes
  const researchIcons = document.querySelectorAll('.bg-blue-100.p-3.rounded-lg.mr-4 img, .bg-purple-100.p-3.rounded-lg.mr-4 img');
  researchIcons.forEach(icon => {
    icon.style.width = '2rem';
    icon.style.height = '2rem';
  });
  
  // Fix language learning section
  const ieltsCard = document.querySelector('a[href*="ielts"]');
  if (ieltsCard) {
    ieltsCard.style.display = 'flex';
    ieltsCard.style.flexDirection = 'row';
    ieltsCard.style.alignItems = 'center';
    ieltsCard.style.gap = '1rem';
    ieltsCard.style.padding = '1rem';
  }

  // Add colored borders to all tool cards
  const allCards = document.querySelectorAll('.card-hover, .bg-white.dark\:bg-gray-800.rounded-2xl');
  
  allCards.forEach(card => {
    // Skip cards that already have styled borders
    if (card.style.borderColor && card.style.borderColor !== 'transparent') return;
    
    // Set default border styling
    card.style.border = '2px solid #fed7aa'; // Light orange
    card.style.borderRadius = '0.75rem';
  });
  
  // Ensure Quick Fact-Checking has enough height on mobile
  const factCheckingCardMobile = document.querySelector('.quick-fact-checking, div:has(.fa-check-circle)');
  if (factCheckingCardMobile && window.innerWidth <= 768) {
    factCheckingCardMobile.style.minHeight = '14rem';
  }
  
  // Fix Cursor icon in mobile version
  if (window.innerWidth <= 768) {
    // Try different selectors to find the Cursor section
    const cursorSections = document.querySelectorAll('div:has(h4:contains("Cursor")), div:has(img[src*="cursor"]), div:has(img[alt*="Cursor"])');
    
    cursorSections.forEach(section => {
      const iconContainers = section.querySelectorAll('.w-28, .h-28, .w-16, .h-16');
      
      iconContainers.forEach(container => {
        if (container.classList.contains('w-28') || container.classList.contains('h-28')) {
          container.style.width = '4rem'; // Adjusted to match other icons
          container.style.height = '4rem'; // Adjusted to match other icons
        }
      });
    });
  }
}); 