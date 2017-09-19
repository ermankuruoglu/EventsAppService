import mongoose from 'mongoose';
import Event from './models/event';

const events = [
  {
    name: 'İzmir Çim Konserleri 2017',
    description: 'İzmir Büyükşehir Belediyesi\'nin 2009\'dan bu yana düzenlediği ücretsiz \"Çim Konserleri\" bu yıl 17 Ağustos\'ta ünlü sanatçı Cem Adrian ile start alacak. Eylül ve Ekim aylarında devam edecek konserler dizisi başta Tarihi Havagazı Fabrikası olmak üzere İnciraltı Kent Ormanı - Hasanağa Bahçesi ve Aşık Veysel Rekreasyon Alanı\'nı şenlendirecek.',
    latitude: 38.424037,
    longitude: 27.139717,
    imageUrl: 'https://1.bp.blogspot.com/-osBwGcK5Ggw/Vzt87yHy95I/AAAAAAAAEhs/OTFT-lfx3gAgFt6cmuVTFHoUF8h6Lx9HgCLcB/s1600/incesaz.jpg',
  },
  {
    name: 'Yüksek Sadakat Konseri',
    description: 'Türk rock müziğinin sevilen gruplarından Yüksek Sadakat, İzmir Bios sahnesinde...\"Belki Üstümüzden Bir Kuş Geçer\", \"Kafile\", \"Haydi Gel İçelim\",\"Aşk Durdukça\", \"Ben Seni Arayamam\" gibi hitleriyle tanınan, ülkenin en iyi rock gruplarından Yüksek Sadakat, en özel bir performanslarından biriyle rockseverlerle buluşuyor.',
    latitude: 38.428761,
    longitude: 27.145468,
    imageUrl: 'https://i.ytimg.com/vi/E9n_maiSt3Q/hqdefault.jpg',
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/events');

// Go through each event
events.map(data => {
  // Initialize a model with event data
  const event = new Event(data);
  // and save it into the database
  
  event.save();
});
