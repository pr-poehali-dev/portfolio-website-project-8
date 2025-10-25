import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const categories = [
  'ALL',
  'AI + REAL PRODUCT',
  'VIDEO',
  'PHOTO',
  'FACES',
  'CINEMATIC SHOTS'
];

const portfolioItems = [
  { id: 1, category: 'AI + REAL PRODUCT', title: 'AI Product Design', image: 'https://cdn.poehali.dev/projects/c0b3405b-3088-4eff-b74c-180ff2f3833e/files/1fcc29b5-221e-4d77-9b5d-f82cf23c64af.jpg', type: 'image' },
  { id: 2, category: 'VIDEO', title: 'Motion Reel', image: '/placeholder.svg', type: 'video' },
  { id: 3, category: 'PHOTO', title: 'Studio Session', image: '/placeholder.svg', type: 'image' },
  { id: 4, category: 'FACES', title: 'Portrait Series', image: 'https://cdn.poehali.dev/projects/c0b3405b-3088-4eff-b74c-180ff2f3833e/files/479ffb1c-0def-4b9e-9cf0-251cdbe10dce.jpg', type: 'image' },
  { id: 5, category: 'CINEMATIC SHOTS', title: 'Film Frame', image: 'https://cdn.poehali.dev/projects/c0b3405b-3088-4eff-b74c-180ff2f3833e/files/1dde8f5c-fe84-419e-8465-72faee2ff582.jpg', type: 'image' },
  { id: 6, category: 'AI + REAL PRODUCT', title: 'Product Visualization', image: '/placeholder.svg', type: 'image' },
  { id: 7, category: 'VIDEO', title: 'Documentary Cut', image: '/placeholder.svg', type: 'video' },
  { id: 8, category: 'PHOTO', title: 'Studio Session', image: '/placeholder.svg', type: 'image' },
  { id: 9, category: 'FACES', title: 'Character Study', image: 'https://cdn.poehali.dev/files/ba388569-c9db-43e4-ac0f-677c2b181026.png', type: 'image' },
  { id: 10, category: 'CINEMATIC SHOTS', title: 'Wide Angle Scene', image: '/placeholder.svg', type: 'image' },
  { id: 11, category: 'AI + REAL PRODUCT', title: 'Tech Integration', image: '/placeholder.svg', type: 'image' },
  { id: 12, category: 'VIDEO', title: 'Commercial Spot', image: '/placeholder.svg', type: 'video' },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">
            PORTFOLIO / Sytyugina Yana AI - creator
          </h1>
        </div>
      </header>

      <nav className="fixed top-20 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-accent-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-xs font-medium tracking-wider mb-2 opacity-80">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-heading font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Play" size={20} className="text-primary-foreground ml-0.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          {selectedItem && (
            <div className="relative w-full h-full flex items-center justify-center bg-primary/5">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
              
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-full object-contain animate-scale-in"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-8">
                <p className="text-xs font-medium tracking-wider mb-2 text-muted-foreground">
                  {selectedItem.category}
                </p>
                <h2 className="text-3xl font-heading font-bold">
                  {selectedItem.title}
                </h2>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Portfolio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">Behance</a>
              <a href="#" className="hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;