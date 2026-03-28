// ============================================
// MELIS COLLECTION - Product Data
// Update product details, prices, and images here
// WhatsApp: +26774223402
// ============================================

const WA_NUMBER = '26774223402';

const PRODUCTS = {

  crochet: [
    {
      id: 'cr1',
      name: 'Crochet Crop Top',
      shortDesc: 'Handmade boho-style crop top',
      description: 'A beautifully handmade crochet crop top, perfect for summer outings or beach days. Made with soft, breathable cotton yarn. Available in multiple colors — ask us for your preferred shade!',
      price: 'P150',
      badge: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
      details: ['100% cotton yarn', 'Handmade with love', 'Available in multiple colors', 'Custom sizing available'],
      tags: ['tops', 'sets']
    },
    {
      id: 'cr2',
      name: 'Crochet Bucket Hat',
      shortDesc: 'Trendy summer bucket hat',
      description: 'Stay stylish with this trendy handcrafted crochet bucket hat. Perfect for protecting you from the sun while looking absolutely fabulous. Lightweight and breathable.',
      price: 'P85',
      badge: 'New',
      image: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=600&q=80',
      details: ['Lightweight & breathable', 'One size fits most', 'Multiple colors available', 'Great sun protection'],
      tags: ['accessories']
    },
    {
      id: 'cr3',
      name: 'Crochet Tote Bag',
      shortDesc: 'Stylish handmade tote bag',
      description: 'A gorgeous, roomy crochet tote bag perfect for the beach, market, or daily use. Sturdy construction with comfortable handles. Each piece is uniquely handcrafted.',
      price: 'P120',
      badge: null,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
      details: ['Spacious & sturdy', 'Comfortable handles', 'Each piece unique', 'Various color options'],
      tags: ['bags']
    },
    {
      id: 'cr4',
      name: 'Crochet Cardigan',
      shortDesc: 'Cozy handmade open-front cardigan',
      description: 'Wrap yourself in warmth and style with this handmade crochet cardigan. The open-front design makes it versatile — wear it over a swimsuit, dress, or jeans. A wardrobe must-have!',
      price: 'P220',
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
      details: ['Open-front design', 'Soft premium yarn', 'Custom sizing on request', 'Perfect layering piece'],
      tags: ['tops']
    },
    {
      id: 'cr5',
      name: 'Crochet Bikini Set',
      shortDesc: 'Handmade summer bikini set',
      description: 'Turn heads at the beach or pool with this stunning handmade crochet bikini set. Adjustable ties for a perfect fit. Made with beach-safe, quick-drying yarn.',
      price: 'P195',
      badge: 'Summer',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      details: ['Adjustable ties', 'Beach-safe yarn', 'Top & bottom set', 'Custom colors available'],
      tags: ['tops', 'sets']
    },
    {
      id: 'cr6',
      name: 'Crochet Headband',
      shortDesc: 'Cute boho headband',
      description: 'Complete your look with this adorable crochet headband. Perfect for casual outings, photoshoots, or beach days. Stretchy and comfortable for all head sizes.',
      price: 'P45',
      badge: null,
      image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80',
      details: ['Stretchy fit', 'All head sizes', 'Multiple colors', 'Perfect gift item'],
      tags: ['accessories']
    },
    {
      id: 'cr7',
      name: 'Crochet Mini Dress',
      shortDesc: 'Boho crochet mini dress',
      description: 'Stunning handcrafted crochet mini dress that\'s perfect for summer events, beach parties, or casual outings. Beautifully detailed with intricate patterns.',
      price: 'P280',
      badge: 'Limited',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      details: ['Intricate handwork', 'Summer-perfect', 'Custom sizing', 'Lined for comfort'],
      tags: ['tops']
    },
    {
      id: 'cr8',
      name: 'Crochet Coin Purse',
      shortDesc: 'Adorable mini coin purse',
      description: 'The cutest little crochet coin purse with a zipper closure. Perfect for coins, cards, or lipstick. Makes a wonderful gift for friends and family.',
      price: 'P35',
      badge: 'Gift Idea',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
      details: ['Zipper closure', 'Multiple color options', 'Great gift idea', 'Fits in any bag'],
      tags: ['bags', 'accessories']
    }
  ],

  jewellery: [
    {
      id: 'j1',
      name: 'Gold Chain Necklace',
      shortDesc: 'Elegant gold-plated layered chain',
      description: 'A timeless gold-plated chain necklace that adds instant elegance to any outfit. Crafted with premium materials that resist tarnishing. Perfect for everyday wear or special occasions.',
      price: 'P95',
      badge: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
      details: ['Gold-plated', 'Tarnish-resistant', 'Adjustable length', 'Lobster clasp closure'],
      tags: ['necklaces']
    },
    {
      id: 'j2',
      name: 'Pearl Drop Earrings',
      shortDesc: 'Classic elegant pearl earrings',
      description: 'Classic pearl drop earrings that never go out of style. These beautiful earrings add a touch of sophistication to any look, from casual to formal. Comfortable and lightweight.',
      price: 'P65',
      badge: null,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      details: ['Lightweight design', 'Hypoallergenic posts', 'Suitable for all occasions', 'Secure backing'],
      tags: ['earrings']
    },
    {
      id: 'j3',
      name: 'Crystal Charm Bracelet',
      shortDesc: 'Sparkling crystal bracelet',
      description: 'A dazzling crystal charm bracelet that catches light beautifully. Each crystal is carefully selected for clarity and brilliance. Adjustable fit ensures comfort.',
      price: 'P80',
      badge: 'Sparkle',
      image: 'https://images.unsplash.com/photo-1573408301185-9519f94cbf1d?w=600&q=80',
      details: ['High-quality crystals', 'Adjustable size', 'Magnetic closure', 'Gift-ready packaging'],
      tags: ['bracelets']
    },
    {
      id: 'j4',
      name: 'Dainty Anklet Set',
      shortDesc: 'Gold dainty anklet set of 2',
      description: 'A beautiful set of two dainty gold anklets that are perfect for summer. One plain chain and one with a delicate charm. Stack them together or wear separately.',
      price: 'P55',
      badge: 'Set of 2',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      details: ['Set of 2 anklets', 'Adjustable chain', 'Lightweight design', 'Water-resistant'],
      tags: ['bracelets']
    },
    {
      id: 'j5',
      name: 'Statement Ring',
      shortDesc: 'Bold gold statement ring',
      description: 'Make a statement with this bold, eye-catching gold ring. The unique geometric design draws attention and starts conversations. Adjustable band fits most finger sizes.',
      price: 'P70',
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
      details: ['Adjustable band', 'Bold geometric design', 'Gold-plated', 'Fits most sizes'],
      tags: ['rings']
    },
    {
      id: 'j6',
      name: 'Layered Necklace Set',
      shortDesc: '3-piece layered necklace set',
      description: 'This gorgeous 3-piece layered necklace set creates a curated, stylish look effortlessly. Each necklace features different lengths and charms for a perfectly layered effect.',
      price: 'P115',
      badge: 'Set of 3',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      details: ['3 necklaces included', 'Different lengths', 'Mixed charms', 'Premium gold plating'],
      tags: ['necklaces']
    },
    {
      id: 'j7',
      name: 'Hoop Earrings Set',
      shortDesc: 'Graduated hoop earrings set',
      description: 'A set of 3 graduated gold hoop earrings in different sizes. Mix and match for a trendy, modern look. Perfect for multiple ear piercings or as a standalone statement.',
      price: 'P75',
      badge: 'Set of 3',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
      details: ['3 sizes included', 'Secure click closure', 'Lightweight', 'Everyday wear'],
      tags: ['earrings']
    },
    {
      id: 'j8',
      name: 'Beaded Friendship Bracelet',
      shortDesc: 'Colorful handmade beaded bracelet',
      description: 'Colorful handmade beaded bracelets with a positive affirmation charm. Stack multiple for a boho-chic look or give as a meaningful gift to someone special.',
      price: 'P40',
      badge: 'Gift Idea',
      image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&q=80',
      details: ['Handmade with love', 'Positive charm included', 'Adjustable tie', 'Perfect gift'],
      tags: ['bracelets']
    }
  ],

  wigs: [
    {
      id: 'w1',
      name: 'Straight Bob Wig',
      shortDesc: 'Sleek straight bob, 10-14 inch',
      description: 'A chic, sleek straight bob wig that gives an effortlessly polished look. Made with high-quality synthetic fiber that looks and feels like natural hair. Easy to maintain and style.',
      price: 'P350',
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      details: ['10-14 inch length', 'High-quality fiber', 'Adjustable strap', 'Easy to style'],
      tags: ['straight']
    },
    {
      id: 'w2',
      name: 'Curly Afro Wig',
      shortDesc: 'Natural big curly afro wig',
      description: 'Embrace your natural beauty with this gorgeous big curly afro wig. Full volume, natural-looking curls that bounce beautifully. A true showstopper for any occasion.',
      price: 'P290',
      badge: 'Natural Look',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
      details: ['Full volume curls', 'Natural appearance', 'Breathable cap', 'Low maintenance'],
      tags: ['curly']
    },
    {
      id: 'w3',
      name: 'Lace Front Wig – Body Wave',
      shortDesc: '100% human hair lace front',
      description: 'Premium 100% human hair lace front wig with beautiful body wave texture. The transparent lace creates a seamless, natural-looking hairline. Bleached knots for a realistic finish.',
      price: 'P680',
      badge: 'Premium',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
      details: ['100% human hair', 'Transparent lace', 'Bleached knots', 'Can be colored & heat styled'],
      tags: ['lace-front', 'curly']
    },
    {
      id: 'w4',
      name: 'Knotless Braided Wig',
      shortDesc: 'Handmade knotless braid wig',
      description: 'Beautiful handmade knotless braided wig that gives you the protective style without the commitment. Natural-looking braids with a realistic scalp appearance. Ready to wear!',
      price: 'P450',
      badge: 'Handmade',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      details: ['Knotless braids', 'Realistic scalp', 'Ready to wear', 'Lightweight & comfortable'],
      tags: ['braided']
    },
    {
      id: 'w5',
      name: 'Deep Wave Lace Wig',
      shortDesc: 'Lush deep wave 18-22 inch',
      description: 'Luxurious deep wave lace wig that flows beautifully. The rich, defined wave pattern adds texture and dimension. Perfect for special events or everyday glamour.',
      price: 'P580',
      badge: 'Luxury',
      image: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=600&q=80',
      details: ['18-22 inch options', 'Defined wave pattern', 'High-density', 'Swiss lace front'],
      tags: ['lace-front', 'curly']
    },
    {
      id: 'w6',
      name: 'Short Pixie Wig',
      shortDesc: 'Chic short pixie cut wig',
      description: 'Channel your inner fierce with this chic short pixie wig. Bold, modern, and incredibly easy to maintain. Perfect for those wanting a dramatic transformation without the commitment.',
      price: 'P310',
      badge: 'Bold & Chic',
      image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&q=80',
      details: ['Short & chic', 'Low maintenance', 'Adjustable cap', 'Pre-styled'],
      tags: ['straight']
    },
    {
      id: 'w7',
      name: 'Straight Closure Wig',
      shortDesc: '4×4 lace closure silky straight',
      description: 'Sleek, silky straight wig with a 4×4 lace closure for a natural scalp appearance. The smooth straight hair gives a clean, professional look that\'s suitable for any occasion.',
      price: 'P520',
      badge: 'Silky Smooth',
      image: 'https://images.unsplash.com/photo-1554519515-242161756769?w=600&q=80',
      details: ['4×4 lace closure', 'Silky straight', '150% density', 'Natural hairline'],
      tags: ['lace-front', 'straight']
    },
    {
      id: 'w8',
      name: 'Butterfly Loc Wig',
      shortDesc: 'Trendy butterfly locs wig',
      description: 'Stay on trend with this stunning butterfly locs wig. The distressed, airy locs create a free-spirited, bohemian look. A gorgeous protective style that requires zero installation time.',
      price: 'P420',
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1567721913486-6585f069b3b6?w=600&q=80',
      details: ['Distressed loc look', 'Boho aesthetic', 'Lightweight', 'Easy to wear'],
      tags: ['braided']
    }
  ],

  skincare: [
    {
      id: 'sk1',
      name: 'Vitamin C Glow Serum',
      shortDesc: 'Brightening daily face serum',
      description: 'Transform your skin with this powerful Vitamin C serum. Formulated to brighten dull skin, fade dark spots, and reveal a radiant, even complexion. Suitable for all skin types.',
      price: 'P130',
      badge: 'Glow Getter',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
      details: ['15% Vitamin C', 'All skin types', 'Fades dark spots', 'Daily use'],
      tags: ['skincare', 'serums-oils']
    },
    {
      id: 'sk2',
      name: 'Shea Butter Body Lotion',
      shortDesc: 'Rich moisturizing body lotion',
      description: 'Indulge your skin with this rich, creamy shea butter lotion. Deeply moisturizes and nourishes from within, leaving skin soft, smooth, and beautifully scented all day long.',
      price: 'P88',
      badge: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1556228720-da5e9d5bccfb?w=600&q=80',
      details: ['Pure shea butter', 'Long-lasting moisture', 'Subtle fragrance', '250ml bottle'],
      tags: ['skincare']
    },
    {
      id: 'sk3',
      name: 'Hair Growth Oil',
      shortDesc: 'Natural stimulating hair growth oil',
      description: 'Nourish your scalp and stimulate hair growth with this powerful natural oil blend. Contains castor oil, rosemary, and other proven growth-boosting ingredients.',
      price: 'P98',
      badge: 'Hair Care',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
      details: ['Castor & rosemary oil', 'Stimulates growth', 'Reduces breakage', '100ml bottle'],
      tags: ['hair-care', 'serums-oils']
    },
    {
      id: 'sk4',
      name: 'Deep Conditioning Hair Mask',
      shortDesc: 'Intensive repair hair treatment',
      description: 'Restore shine, strength, and moisture to damaged or dry hair with this intensive deep conditioning mask. Enriched with argan oil and keratin for salon-quality results at home.',
      price: 'P75',
      badge: 'Hair Care',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
      details: ['Argan oil & keratin', 'Repairs damage', 'Intense hydration', '300g tub'],
      tags: ['hair-care', 'treatments']
    },
    {
      id: 'sk5',
      name: 'Rosehip Face Oil',
      shortDesc: 'Anti-aging rosehip facial oil',
      description: 'This lightweight rosehip oil is packed with vitamins A and C to combat signs of aging, reduce scars, and give your skin a youthful glow. Absorbs quickly without greasiness.',
      price: 'P115',
      badge: 'Anti-Aging',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
      details: ['Cold-pressed rosehip', 'Rich in Vitamins A & C', 'Non-greasy formula', '30ml bottle'],
      tags: ['skincare', 'serums-oils']
    },
    {
      id: 'sk6',
      name: 'Extreme Hold Edge Control',
      shortDesc: 'Long-lasting edge control gel',
      description: 'Keep your edges perfectly laid all day with this extreme hold edge control. Flake-free formula that doesn\'t dry out your hairline. Perfect for all hair textures.',
      price: 'P65',
      badge: 'Hair Care',
      image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&q=80',
      details: ['Extreme hold', 'Flake-free', 'All hair types', '200g jar'],
      tags: ['hair-care']
    },
    {
      id: 'sk7',
      name: 'Brightening Face Mask',
      shortDesc: 'Kaolin clay brightening mask',
      description: 'This luxurious brightening face mask combines kaolin clay with turmeric and honey to deeply cleanse pores, brighten skin tone, and give you a radiant, refreshed complexion.',
      price: 'P82',
      badge: 'Skincare',
      image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=600&q=80',
      details: ['Kaolin clay base', 'Turmeric & honey', 'Pore-cleansing', '150g jar'],
      tags: ['skincare', 'treatments']
    },
    {
      id: 'sk8',
      name: 'Leave-In Conditioner Spray',
      shortDesc: 'Detangling leave-in spray',
      description: 'The perfect everyday leave-in conditioner that detangles, moisturizes, and protects your hair from heat damage. Light enough for daily use without weighing hair down.',
      price: 'P72',
      badge: 'Hair Care',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
      details: ['Detangles instantly', 'Heat protection', 'Lightweight formula', '250ml spray bottle'],
      tags: ['hair-care', 'treatments']
    }
  ],

  bakery: [
    {
      id: 'b1',
      name: 'Custom Birthday Cake',
      shortDesc: '3-tier decorated celebration cake',
      description: 'Make any birthday unforgettable with a stunning custom-designed cake. Choose your flavors, colors, and design — we\'ll create an edible work of art that will be the highlight of your celebration!',
      price: 'From P280',
      badge: 'Custom Order',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
      details: ['Custom design & colors', 'Multiple flavor options', 'Serves 20-30 people', '5 days advance notice'],
      tags: ['cakes']
    },
    {
      id: 'b2',
      name: 'Cupcake Box (12)',
      shortDesc: 'Assorted decorated cupcakes',
      description: 'A gorgeous box of 12 beautifully decorated cupcakes, perfect for parties, gifts, or office treats. Choose from our seasonal flavors or request a custom theme.',
      price: 'P130',
      badge: 'Party Ready',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80',
      details: ['12 cupcakes per box', 'Mixed or single flavor', 'Custom decorations', '48 hours advance notice'],
      tags: ['cupcakes']
    },
    {
      id: 'b3',
      name: 'Full Catering Package',
      shortDesc: 'Complete event catering (20 pax)',
      description: 'Let us handle all the food for your event! Our full catering package includes starters, mains, sides, and desserts. Fresh, delicious, and beautifully presented for any occasion.',
      price: 'From P900',
      badge: 'Events',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
      details: ['Serves 20+ people', 'Starters + mains + dessert', 'Serving staff available', 'Minimum 7 days notice'],
      tags: ['catering']
    },
    {
      id: 'b4',
      name: 'Cookie Gift Box',
      shortDesc: 'Assorted decorated cookies',
      description: 'Beautiful assorted decorated cookies presented in an elegant gift box. Perfect for corporate gifts, baby showers, weddings, or simply spoiling someone special with sweetness.',
      price: 'P100',
      badge: 'Gift Ready',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
      details: ['15 cookies per box', 'Custom designs available', 'Gift-wrapped', '48 hours notice'],
      tags: ['cookies']
    },
    {
      id: 'b5',
      name: 'Red Velvet Cake',
      shortDesc: 'Classic red velvet with cream cheese frosting',
      description: 'Our classic, moist red velvet cake layered with velvety cream cheese frosting. A beloved favorite that\'s as beautiful as it is delicious. Available in round or square tiers.',
      price: 'P210',
      badge: 'Classic',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
      details: ['Cream cheese frosting', 'Round or square', 'Serves 15-20', '48 hours advance'],
      tags: ['cakes']
    },
    {
      id: 'b6',
      name: 'Party Platters',
      shortDesc: 'Assorted savory finger food platters',
      description: 'Keep your guests well-fed and happy with our stunning party platters! Loaded with sandwiches, savory bites, pastries, and fresh fruit. Perfect for any gathering.',
      price: 'From P380',
      badge: 'Party Food',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
      details: ['Serves 20+ people', 'Sweet & savory options', 'Beautifully presented', '48 hours notice'],
      tags: ['catering']
    },
    {
      id: 'b7',
      name: 'Drip Cake',
      shortDesc: 'Trendy chocolate drip cake',
      description: 'The most Instagrammable cake you\'ll ever own! Our gorgeous drip cakes feature smooth buttercream, dramatic drips, and stunning toppings customized just for you.',
      price: 'P250',
      badge: 'Trendy',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&q=80',
      details: ['Custom drip colors', 'Premium toppings', 'Serves 15-20', '5 days advance notice'],
      tags: ['cakes']
    },
    {
      id: 'b8',
      name: 'Mini Cheesecake Box',
      shortDesc: 'Box of 6 mini cheesecakes',
      description: 'Indulge in a box of 6 perfectly portioned mini cheesecakes with different flavor toppings. Creamy, dreamy, and utterly irresistible — these fly off the shelf!',
      price: 'P145',
      badge: 'Indulgent',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
      details: ['6 mini cheesecakes', 'Mixed flavors', 'Baked fresh daily', 'Refrigerate upon delivery'],
      tags: ['cupcakes']
    }
  ],

  rentals: [
    {
      id: 'r1',
      name: 'Party Tent Rental',
      shortDesc: 'Large outdoor party tent',
      description: 'Our spacious party tent is perfect for outdoor events, garden parties, and celebrations. Provides shade and shelter for up to 80 guests. Includes setup and takedown service.',
      price: 'P500/day',
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
      details: ['Seats up to 80 guests', 'Setup & takedown included', 'Weather-resistant', 'Available in white'],
      tags: ['tents-furniture']
    },
    {
      id: 'r2',
      name: 'Tables & Chairs Package',
      shortDesc: '10 tables + 80 chairs',
      description: 'Complete your event setup with our tables and chairs rental package. Includes 10 round tables and 80 chairs. Delivery and collection within the area available.',
      price: 'P420/day',
      badge: 'Complete Set',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
      details: ['10 round tables', '80 banquet chairs', 'Delivery available', 'Clean & well-maintained'],
      tags: ['tents-furniture']
    },
    {
      id: 'r3',
      name: 'Professional Backdrop',
      shortDesc: 'Adjustable backdrop with stand',
      description: 'Create stunning photo opportunities at your event with our professional backdrop stand. Adjustable height and width to suit any space. Available with various backdrop options.',
      price: 'P160/day',
      badge: 'Photo Ready',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      details: ['Adjustable size', 'Multiple backdrop options', 'Easy setup', 'Perfect for photos'],
      tags: ['photo-fun']
    },
    {
      id: 'r4',
      name: 'Full Event Decor Package',
      shortDesc: 'Complete event decoration setup',
      description: 'Let us transform your venue into a magical space! Our full decor package includes balloon arrangements, table centerpieces, floral accents, and themed decorations for your dream event.',
      price: 'P850/event',
      badge: 'All-Inclusive',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80',
      details: ['Balloons & florals', 'Table centerpieces', 'Custom theme available', 'Setup & removal included'],
      tags: ['decor']
    },
    {
      id: 'r5',
      name: 'Sound System Rental',
      shortDesc: 'DJ-quality sound system',
      description: 'Bring the party to life with our professional DJ-quality sound system. Crystal clear sound for up to 200 guests. Includes speakers, subwoofer, mixer, and microphone.',
      price: 'P650/day',
      badge: 'Banger',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
      details: ['Covers 200+ guests', 'Subwoofer included', 'Microphone included', 'Technical support'],
      tags: ['sound-lighting']
    },
    {
      id: 'r6',
      name: 'Fairy Light Curtain',
      shortDesc: 'LED fairy light backdrop curtain',
      description: 'Add magical sparkle to your event with our stunning LED fairy light curtain. Creates a beautiful, romantic ambiance perfect for weddings, birthdays, and baby showers.',
      price: 'P200/day',
      badge: 'Magical',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      details: ['2m x 3m curtain', 'Warm white LEDs', 'Easy installation', 'Indoor & outdoor'],
      tags: ['decor', 'sound-lighting']
    },
    {
      id: 'r7',
      name: 'Photo Booth Kit',
      shortDesc: 'DIY photo booth with props',
      description: 'Make your event extra fun with our photo booth kit! Includes a ring light, photo booth frame, and a collection of hilarious and cute props for guests to use.',
      price: 'P280/day',
      badge: 'Fun!',
      image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80',
      details: ['Ring light included', '30+ fun props', 'Backdrop frame', 'Instructions provided'],
      tags: ['photo-fun']
    },
    {
      id: 'r8',
      name: 'Outdoor Projector Setup',
      shortDesc: 'HD outdoor movie projector',
      description: 'Host an unforgettable outdoor movie night with our HD projector setup. Includes projector, screen, and cable connections. Perfect for garden parties and private screenings.',
      price: 'P400/day',
      badge: 'Movie Night',
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80',
      details: ['Full HD projector', '3m screen included', 'Bluetooth speaker', 'Setup support'],
      tags: ['sound-lighting', 'photo-fun']
    }
  ]

};

// Helper: get WhatsApp link for a product
function getWALink(product) {
  const msg = encodeURIComponent(`Hi Melis Collection! 💕 I'm interested in: *${product.name}* (${product.price}). Please assist me. Thank you!`);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}
