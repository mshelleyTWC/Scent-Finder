console.log("martin testing");
var urlList = {
  options: [{
    keywords: ['For Her'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/Bath-and-Body-/c/perfume'
  }, {
    keywords: ['For Him'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Loch-Eau-De-Toilette/p/LODED?swatch=No+Colour'
  }, {
    keywords: ['Skincare', 'Under £30'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/skincare?q=%3Arelevance&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=40'
  }, {
    keywords: ['Skincare', 'Under £50'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/skincare'
  }, {
    keywords: ['Body', 'Soothing', 'Under £30', 'Floral'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_floral&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Soothing', 'Under £30', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Soothing', 'Under £30', 'Ozonic'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_ozonic&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Soothing', 'Under £50', 'Floral'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_floral&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Soothing', 'Under £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Soothing', 'Under £50', 'Ozonic'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_ozonic&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Soothing', 'Over £50', 'Floral'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_floral&minPrice=50&maxPrice=70&minPriceRange=10&maxPriceRange=70'
  }, {
    keywords: ['Body', 'Soothing', 'Over £50', 'Ozonic'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_ozonic&minPrice=50&maxPrice=70&minPriceRange=10&maxPriceRange=70'
  }, {
    keywords: ['Body', 'Warming', 'Under £30', 'Spicy'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_spicy&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=60'
  }, {
    keywords: ['Body', 'Warming', 'Under £50', 'Spicy'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Loch-Collection/p/loch-collection'
  }, {
    keywords: ['Body', 'Warming', 'Under £50', 'Woody'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_woody&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=60'
  }, {
    keywords: ['Body', 'Warming', 'Over £50', 'Woody'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_woody&minPrice=50&maxPrice=120&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Under £30', 'Citrus'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_citrus&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Under £30', 'Fruity'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_fruity&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Under £30', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Under £50', 'Citrus'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_citrus&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Under £50', 'Fruity'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_fruity&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Under £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Over £50', 'Citrus'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_citrus&minPrice=50&maxPrice=120&minPriceRange=10&maxPriceRange=120'
  }, {
    keywords: ['Body', 'Uplifting', 'Over £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=50&maxPrice=120&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Body', 'No Preference', 'Bestsellers', 'Seychelles'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance-sm%3Aav_seychelles'
  }, {
    keywords: ['Body', 'No Preference', 'Bestsellers', 'Spa'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance-sm%3Aav_escape%3Af_fragrance-sm%3Aav_spa_restore%3Af_fragrance-sm%3Aav_spa_retreat'
  }, {
    keywords: ['Body', 'No Preference', 'Bestsellers', 'Lime & Bay'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Beauty-and-Spa/c/bath-and-body?q=%3Arelevance%3Af_fragrance-sm%3Aav_lime_and_bay'
  }, {
    keywords: ['Body', 'No Preference', 'Under £30', 'Gift Sets'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/Gift-Sets/c/bath-and-body-gift-sets?q=%3Arelevance&minPrice=20&maxPrice=30&minPriceRange=20&maxPriceRange=110'
  }, {
    keywords: ['Body', 'No Preference', 'Under £50', 'Gift Sets'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/Gift-Sets/c/bath-and-body-gift-sets?q=%3Arelevance&minPrice=20&maxPrice=50&minPriceRange=20&maxPriceRange=110'
  }, {
    keywords: ['Body', 'No Preference', 'Over £50', 'Gift Sets'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/Gift-Sets/c/bath-and-body-gift-sets?q=%3Arelevance&minPrice=50&maxPrice=110&minPriceRange=20&maxPriceRange=110'
  }, {
    keywords: ['No Preference', 'Gift Cards'],
    plpUrl: 'https://www.thewhitecompany.com/uk/giftcards'
  }, {
    keywords: ['Home', 'Soothing', 'Under £30', 'Floral'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_floral&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Under £30', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Under £30', 'Ozonic'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_ozonic&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Under £50', 'Floral'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_floral&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Under £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Under £50', 'Ozonic'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_ozonic&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Over £50', 'Floral'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_floral&minPrice=50&maxPrice=120&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Over £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=50&maxPrice=120&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Soothing', 'Over £50', 'Ozonic'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_ozonic&minPrice=50&maxPrice=120&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Warming', 'Under £30', 'Gourmand'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_gourmand&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'Warming', 'Under £30', 'Spicy'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_spicy&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'Warming', 'Under £30', 'Woody'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_woody&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'Warming', 'Under £50', 'Gourmand'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_gourmand&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'Warming', 'Under £50', 'Spicy'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_spicy&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'Warming', 'Under £50', 'Woody'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_woody&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'Uplifting', 'Under £30', 'Citrus'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_citrus&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Under £30', 'Fruity'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_fruity&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Under £30', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=30&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Under £50', 'Citrus'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_citrus&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Under £50', 'Fruity'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_fruity&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Under £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=0&maxPrice=50&minPriceRange=0&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Over £50', 'Citrus'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_citrus&minPrice=50&maxPrice=120&minPriceRange=10&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Over £50', 'Fruity'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_fruity&minPrice=50&maxPrice=120&minPriceRange=10&maxPriceRange=120'
  }, {
    keywords: ['Home', 'Uplifting', 'Over £50', 'Herbal'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance_families-sm%3Aav_herbal&minPrice=50&maxPrice=120&minPriceRange=10&maxPriceRange=120'
  }, {
    keywords: ['Home', 'No Preference', 'Under £30', 'Bestsellers', 'Seychelles'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_seychelles&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=140'
  }, {
    keywords: ['Home', 'No Preference', 'Under £50', 'Bestsellers', 'Seychelles'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_seychelles&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=140'
  }, {
    keywords: ['Home', 'No Preference', 'Over £50', 'Bestsellers', 'Seychelles'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_seychelles&minPrice=50&maxPrice=140&minPriceRange=10&maxPriceRange=140'
  }, {
    keywords: ['Home', 'No Preference', 'Under £30', 'Bestsellers', 'Winter'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_winter&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'No Preference', 'Under £50', 'Bestsellers', 'Winter'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_winter&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'No Preference', 'Over £50', 'Bestsellers', 'Winter'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_winter&minPrice=50&maxPrice=60&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'No Preference', 'Under £30', 'Bestsellers', 'Lime & Bay'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_lime_and_bay&minPrice=10&maxPrice=30&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'No Preference', 'Under £50', 'Bestsellers', 'Lime & Bay'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_lime_and_bay&minPrice=10&maxPrice=50&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'No Preference', 'Over £50', 'Bestsellers', 'Lime & Bay'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/c/home-fragrances?q=%3Arelevance%3Af_fragrance-sm%3Aav_lime_and_bay&minPrice=50&maxPrice=60&minPriceRange=10&maxPriceRange=60'
  }, {
    keywords: ['Home', 'No Preference', 'Gift Sets', 'Over £50'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/Gift-Sets/c/home-fragrance-gift-sets?q=%3Arelevance&minPrice=50&maxPrice=190',
  }, {
    keywords: ['Home', 'No Preference', 'Gift Sets', 'Under £30'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/Gift-Sets/c/home-fragrance-gift-sets?q=%3Arelevance&minPrice=20&maxPrice=30&minPriceRange=20&maxPriceRange=190',
  }, {
    keywords: ['Home', 'No Preference', 'Gift Sets', 'Under £50'],
    plpUrl: 'https://www.thewhitecompany.com/uk/Candles-and-Fragrance/View-All-Candles-and-Fragrance/Gift-Sets/c/home-fragrance-gift-sets?q=%3Arelevance&minPrice=20&maxPrice=50&minPriceRange=20&maxPriceRange=190',
  }]
};
const priceExclusionList = {
  options: [{
    keywords: ['for yourself', 'Body', 'Skincare'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['gift', 'Over £50', 'Home'],
    optionToExclude: 'Warming',
  }, {
    keywords: ['gift', 'Under £30', 'Body', 'Warming'],
    optionToExclude: 'Woody',
  }, {
    keywords: ['gift', 'Over £50', 'Body', 'Bathing', 'Uplifting'],
    optionToExclude: ['Citrus', 'Fruity'],
  }, {
    keywords: ['gift', 'Over £50', 'Body', 'Bathing', 'Warming'],
    optionToExclude: 'Spicy',
  }, {
    keywords: ['gift', 'Over £50', 'Body', 'Bathing', 'No Preference'],
    optionToExclude: 'Bestsellers',
  }, {
    keywords: ['Body', 'Bathing', 'Soothing', 'Herbal'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['gift', 'Over £50', 'Body', 'Bathing'],
    optionToExclude: 'Soothing',
  }, {
    keywords: ['Body', 'Bathing', 'Warming', 'Spicy'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['Body', 'Bathing', 'Warming', 'Woody'],
    optionToExclude: 'Under £30',
  }, {
    keywords: ['gift', 'Over £50', 'Body'],
    optionToExclude: ['Skincare', 'Perfume'],
  }, {
    keywords: ['for yourself', 'Body', 'Bathing', 'Soothing', 'Floral'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['for yourself', 'Home', 'Warming', 'Spicy'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['for yourself', 'Home', 'Warming', 'Woody'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['for yourself', 'Home', 'Warming', 'Gourmand'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['Body', 'Bathing', 'Uplifting', 'Fruity'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['for yourself', 'Body', 'Bathing', 'Uplifting', 'Citrus'],
    optionToExclude: 'Over £50',
  }, {
    keywords: ['for yourself', 'Body', 'Bathing', 'No Preference', 'Bestsellers', 'Spa'],
    optionToExclude: ['Under £50', 'Over £50'],
  }]
};
const backButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
var errorElement = document.querySelector('.info-box');
var isCurrentQuestionAnswered = false;
var currentlySelectedAnswer;
var selectedAnswerArray = [];
var currentOptions = quizObject.options;
var currentSlideNumber = 1;
var quizOptions;
var slideIdPartial = '#slide-';
var endOfTree = false;
var currentArraysDepth = -1;
var currentlyActiveSlide = 0;
var slides;
var optionToHide = '';
var nextArrow = document.getElementById("next");
var prevArrow = document.getElementById("prev");
var slideIsVisible = true;
backButton.addEventListener('click', previousQuestion);
nextButton.addEventListener('click', nextQuestion);
addEventListenersToOptions();

function addEventListenersToOptions() {
  quizOptions = document.querySelectorAll('.quiz-option');
  quizOptions.forEach(element => {
    element.addEventListener('click', addAnswer);
  });
}

function checkIfAnAnswerIsSelected() {
  console.log("checkIfAnAnswerIsSelected function");
  var quizOptionImages = document.querySelectorAll(`#slide-${currentSlideNumber} > .slide-content > .quiz-option > img`);
  for(let i = 0; i < quizOptionImages.length; i++){
    if(quizOptionImages[i].classList.contains("selected")){
      isCurrentQuestionAnswered = true;
      break;
    }
    else if(!quizOptionImages[i].classList.contains("selected")){
      isCurrentQuestionAnswered = false;
    }
  }
}

function getDepthOfDtree() {
  console.log("getDepthOfDtree function");
  currentArraysDepth = 0;
  const assignDepth = (selectedArray, depth = 0, index = 0) => {
    if (depth > 2) return;
    if (selectedArray[index] && index < selectedArray[index]?.options?.options?.length) {
      currentArraysDepth = depth + 1;
      return assignDepth(selectedArray[index]?.options, depth + 1, 0);
    }
    if (index < selectedArray?.options?.length) {
      currentArraysDepth = depth;
      if (selectedArray.options[index]?.additionalQuestion) {
        return assignDepth(selectedArray.additionalOptions, depth + 1, 0);
      }
      if (selectedArray.options[index]?.options?.options?.length) {
        return assignDepth(selectedArray.options[index]?.options, depth + 1, 0);
      }
      return assignDepth(selectedArray, depth, index + 1);
    }
    return;
  };
  if (optionToHide) {
    const excludeArrayItem = optionToHide.optionToExclude;
    let newSelectedArray = currentOptions;
    if (Array.isArray(optionToHide.optionToExclude)) {
      optionToHide?.optionToExclude.forEach(item => {
        newSelectedArray = newSelectedArray?.options ? newSelectedArray?.options?.filter(element => element.text.toLowerCase() !== item.toLowerCase()) : newSelectedArray.filter(element => element.text.toLowerCase() !== item.toLowerCase());
      });
      assignDepth(newSelectedArray);
    } else {
      newSelectedArray = currentOptions?.options?.filter(element => element.text.toLowerCase() !== excludeArrayItem.toLowerCase());
      assignDepth(newSelectedArray);
    }
  } else {
    assignDepth(currentOptions);
  }
}

function updateProgressBar(increment, finalStep = false) {
  const progressBar = document.querySelector('#progress-bar');
  if (finalStep) {
    progressBar.dataset.value = progressBar.max;
    progressBar.style.width = '100%';
    progressBar.style.opacity = 1;
    progressBar.style.transition = "0.2s ease 0.01s";
  } else if (currentArraysDepth !== -1 && currentArraysDepth === 0) {
    progressBar.dataset.value = 80;
    progressBar.style.width = '90%';
    progressBar.style.opacity = 1;
  } else {
    const updatedValue = parseInt(progressBar.getAttribute('data-value')) + increment;
    progressBar.dataset.value = updatedValue;
    progressBar.style.width = updatedValue + '%';
    progressBar.style.opacity = 1;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    if (updatedValue === progressBar.max) {
      nextButton.disabled = true;
    }
  }
  return true;
}

function populateNextSlide(newOptions) {
  console.log("populateNextSlide function");
  optionToHide = '';
  currentSlideNumber += 1;
  currentOptions = newOptions.options || newOptions;
  const updatedQuestion = newOptions.options?.question || newOptions.question;
  const updatedAnswers = newOptions.options?.options || newOptions.options;
  const newSlideDiv = document.createElement('div');
  newSlideDiv.classList.add("slide");
  newSlideDiv.setAttribute('id', 'slide-' + currentSlideNumber);
  const questionTag = document.createElement('h3');
  questionTag.classList.add("question");
  questionTag.innerHTML = updatedQuestion;
  newSlideDiv.appendChild(questionTag);
  const imageContainer = document.createElement('div');
  imageContainer.classList.add("slide-content");
  updatedAnswers.forEach(element => {
    optionToHide = priceExclusionList.options.find(entry => {
      const keywords = entry.keywords;
      const searchResult = matchKeywords(selectedAnswerArray, keywords);
      if (searchResult) {
        return entry.optionToExclude;
      }
    }) || null;
    if (optionToHide) {
      if ((Array.isArray(optionToHide.optionToExclude) && optionToHide.optionToExclude.includes(element.text)) || (!Array.isArray(optionToHide.optionToExclude) && element.text.toLowerCase() === optionToHide?.optionToExclude.toLowerCase())) {
        return;
      }
    }
    if (updatedAnswers.length > 3 && !optionToHide) {
      imageContainer.classList.add("align-content");
    }
    const optionContainer = document.createElement('div');
    const imageTag = document.createElement('img');
    const spanTag = document.createElement('span');
    optionContainer.classList.add("quiz-option");
    spanTag.classList.add("question-label");
    spanTag.innerHTML = element.text;
    optionContainer.appendChild(spanTag);
    imageTag.src = element.imageUrl;
    imageTag.classList.add("slider-image");
    imageTag.setAttribute('alt', element.text);
    optionContainer.appendChild(imageTag);
    if (element?.description) {
      const descTag = document.createElement('p');
      descTag.classList.add('description');
      descTag.innerHTML = element?.description;
      optionContainer.appendChild(descTag);
    }
    imageContainer.appendChild(optionContainer);
    newSlideDiv.appendChild(imageContainer);
  });
  const infoBoxContainer = document.createElement('div');
  infoBoxContainer.classList.add("info-box");
  const infoIconTag = document.createElement('img');
  infoIconTag.classList.add("info-icon");
  infoIconTag.src = "https://media.thewhitecompany.com/i/white/warning";
  infoIconTag.setAttribute('alt', 'error icon');
  infoBoxContainer.appendChild(infoIconTag);
  const errorTag = document.createElement('p');
  errorTag.classList.add("error");
  errorTag.innerHTML = 'Please choose an option';
  infoBoxContainer.appendChild(errorTag);
  newSlideDiv.insertBefore(infoBoxContainer, imageContainer);
  const getSlideContainer = document.querySelector('.slider-container');
  getSlideContainer.appendChild(newSlideDiv);
  isCurrentQuestionAnswered = false;
  document.querySelector('#next').classList.add("next-disabled");
}

function getNextSlideInfo() {
  console.log("getNextSlideInfo function");
  let updatedOptions;
  if (!currentOptions?.additionalOptions) {
    if (!currentOptions?.options) {
      currentOptions?.forEach(item => {
        if (item.text.toLowerCase() === currentlySelectedAnswer.toLowerCase()) {
          updatedOptions = item;
        }
      });
    } else {
      currentOptions.options.forEach(item => {
        if (item.text.toLowerCase() === currentlySelectedAnswer.toLowerCase()) {
          updatedOptions = item;
        }
      });
    }
  } else {
    if (currentOptions?.options) {
      currentOptions?.options?.forEach(item => {
        if ((item.text.toLowerCase() === currentlySelectedAnswer.toLowerCase()) && !(item?.additionalQuestion)) {
          updatedOptions = item;
        }
      });
    }
    if (!updatedOptions) {
      updatedOptions = currentOptions.additionalOptions;
    }
  }
  const selectedSlideId = slideIdPartial + currentSlideNumber;
  hideCurrentSlide(selectedSlideId);
  populateNextSlide(updatedOptions);
  const topElement = document.querySelector('.main');
  topElement.scrollIntoView(true);
}

function hideCurrentSlide(slideName) {
  const slideContentDiv = document.querySelector(slideName);
  slideContentDiv.classList.add('hide');
}

function showCurrentSlide(slideName) {
  const slideContentDiv = document.querySelector(slideName);
  slideContentDiv.classList.remove('hide');
}

function matchKeywords(userSelected, urlArray) {
  console.log("matchKeywords function");
  return urlArray.every(word => userSelected.includes(word));
}

function nextQuestion() {
  console.log("nextQuestion function");
  checkIfAnAnswerIsSelected();
  if (isCurrentQuestionAnswered) {
    selectedAnswerArray.push(currentlySelectedAnswer);
    const retrieveOptions = currentOptions?.options || currentOptions;
    const selectedAnswerObj = retrieveOptions?.find(entry => entry.text.toLowerCase().replace('&amp;', "&") === currentlySelectedAnswer.toLowerCase().replace('&amp;', "&"));
    if (selectedAnswerObj?.endOfNode) {
      console.log("inside endOfNode");
      const progress = updateProgressBar(12, true);
      urlList.options.forEach(entry => {
        const keywords = entry.keywords;
        const testResult = matchKeywords(selectedAnswerArray, keywords);
        console.log(selectedAnswerArray);
        console.log(testResult);
        if (testResult) {
          window.location.href = entry.plpUrl;
        }
      });
    } else {
      const selectedSlideId = slideIdPartial + (currentSlideNumber + 1);
      const isNextSlideExist = document.querySelector(selectedSlideId);
      if (!isNextSlideExist) {
        getNextSlideInfo();
        addEventListenersToOptions();
      } else {
        hideCurrentSlide(slideIdPartial + currentSlideNumber);
        currentSlideNumber += 1;
        showCurrentSlide(selectedSlideId);
        document.querySelector('#next').classList.add("next-disabled");
      }
      getDepthOfDtree();
      updateProgressBar(12, false);
      enableBackButton();
    }
  } else {
    displayError();
    isCurrentQuestionAnswered = false;
  }
}

function previousQuestion() {
  const activeSlideId = slideIdPartial + currentSlideNumber;
  hideCurrentSlide(activeSlideId);
  currentSlideNumber -= 1;
  const newActiveSlideId = slideIdPartial + currentSlideNumber;
  showCurrentSlide(newActiveSlideId);
  isCurrentQuestionAnswered = true;
  currentArraysDepth = -1;
  updateProgressBar(-12, false);
  if (currentSlideNumber === 1) {
    disableBackButton();
  }
  if (isCurrentQuestionAnswered == true) {
    enableNextButton();
  }
}

function addAnswer(event) {
  const activeSlideId = slideIdPartial + currentSlideNumber;
  const activeSlide = document.querySelector(activeSlideId);
  quizOptions = activeSlide.querySelectorAll('.quiz-option');
  quizOptions.forEach(element => {
    const currentClassList = element.querySelector('.slider-image').classList;
    const alreadySelected = currentClassList.contains('selected');
    if (alreadySelected) {
      currentClassList.remove('selected');
    }
  });
  currentlySelectedAnswer = event.target.closest('.quiz-option').querySelector('.question-label').innerHTML?.replace("&amp;", "&");
  if (event.target.classList.contains('question-label')) {
    event.target.nextElementSibling.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
  isCurrentQuestionAnswered = true;
  removeError();
  enableNextButton();
  removeSubsequentSlides();
}

function removeSubsequentSlides() {
  console.log("removeSubsequentSlides function");
  const nextSlideId = slideIdPartial + (currentSlideNumber + 1);
  const nextSlideNode = document.querySelector(nextSlideId);
  if (nextSlideNode) {
    const listOfSlides = Array.from(document.querySelectorAll('.slide'));
    const listOfNodesToDelete = listOfSlides.filter(element => element.id.match(/\d+/)[0] > currentSlideNumber);
    listOfNodesToDelete.forEach(element => {
      element.remove();
    });
    const slicedArray = selectedAnswerArray.slice(0, currentSlideNumber - 1);
    selectedAnswerArray = slicedArray;
    const nestingKey = 'options';
    const searchText = currentlySelectedAnswer;
    const findNewCurrentOptions = (orginalArray, textValue, key, parent = []) => (orginalArray.reduce((lastItem, item) => {
      if (lastItem) return lastItem;
      if (item.text.toLowerCase() === textValue.toLowerCase()) return parent;
      if (item.additionalQuestion) return findNewCurrentOptions(parent.additionalOptions?.options, textValue, key, parent.additionalOptions);
      if (item?.options) return findNewCurrentOptions(item?.options.options, textValue, key, item?.options);
      if (parent?.options?.options) return findNewCurrentOptions(parent.options?.options, textValue, key, parent.options);
    }, null));
    let selectedPath;
    quizObject.options.forEach(subArray => {
      const rootSelection = selectedAnswerArray[0];
      if (rootSelection) {
        if (subArray.text.toLowerCase() === rootSelection.toLowerCase()) {
          selectedPath = subArray;
        }
      }
    });
    if (selectedPath?.options?.options) {
      currentOptions = findNewCurrentOptions(selectedPath.options.options, searchText, nestingKey, selectedPath.options);
      if (currentOptions) return;
    } else if (selectedPath?.additionalOptions?.options) {
      currentOptions = findNewCurrentOptions(selectedPath?.additionalOptions?.options, searchText, nestingKey, selectedPath?.additionalOptions);
      if (currentOptions) return;
    } else {
      currentOptions = quizObject.options;
    }
  }
}

function displayError() {
  const activeSlideId = slideIdPartial + currentSlideNumber;
  const activeSlide = document.querySelector(activeSlideId);
  errorElement = activeSlide.querySelector('.info-box');
  errorElement.style.visibility = "visible";
  if(window.innerWidth > 321){
    errorElement.style.margin = "20px auto";
  }
  else if(window.innerWidth < 321){
    errorElement.style.margin = "25px auto 20px";
  }
}

function removeError() {
  const activeSlideId = slideIdPartial + currentSlideNumber;
  const activeSlide = document.querySelector(activeSlideId);
  errorElement = activeSlide.querySelector('.info-box');
  errorElement.style.margin = "0";
  errorElement.style.visibility = "hidden";
}

function enableBackButton() {
  document.querySelector('#prev').disabled = false;
}

function disableBackButton() {
  document.querySelector('#prev').disabled = true;
}

function enableNextButton() {
  document.querySelector('#next').classList.remove("next-disabled");
}

window.addEventListener("scroll", () => {
  var bottomOfNav = document.querySelector('.main-header').getBoundingClientRect().bottom;
  var hidingPoint = document.querySelector(".slider-wrapper").getBoundingClientRect().height * 0.25;
  var bottomOfQuiz = document.querySelector(".slider-wrapper").getBoundingClientRect().bottom;
  var hidingPointForButtons = bottomOfQuiz - hidingPoint;

  if (bottomOfNav > hidingPointForButtons) {
    prevArrow.style.opacity = 0;
    prevArrow.style.transition = "0.2s ease 0.01s";
    nextArrow.style.opacity = 0;
    nextArrow.style.transition = "0.2s ease 0.01s";
  } else if (bottomOfNav < hidingPointForButtons) {
    prevArrow.style.opacity = 1;
    prevArrow.style.transition = "0.2s ease 0.01s";
    nextArrow.style.opacity = 1;
    nextArrow.style.transition = "0.2s ease 0.01s";
  }
});