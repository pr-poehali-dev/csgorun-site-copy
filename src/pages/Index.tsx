import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [balance, setBalance] = useState(1500.50);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: 'Player123', level: 15 });
  const [rouletteSpinning, setRouletteSpinning] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  // Game States
  const [coinflipBet, setCoinflipBet] = useState(100);
  const [crashMultiplier, setCrashMultiplier] = useState(1.00);
  const [jackpotPool, setJackpotPool] = useState(12750.30);

  const games = [
    { id: 1, name: 'Рулетка', icon: 'Target', color: 'bg-red-500', players: 124 },
    { id: 2, name: 'Джекпот', icon: 'Crown', color: 'bg-yellow-500', players: 89 },
    { id: 3, name: 'Coinflip', icon: 'Coins', color: 'bg-blue-500', players: 45 },
    { id: 4, name: 'Crash', icon: 'TrendingUp', color: 'bg-green-500', players: 78 },
  ];

  const cases = [
    { id: 1, name: 'Legendary Case', price: 500, image: '🎁', rarity: 'legendary' },
    { id: 2, name: 'Epic Case', price: 250, image: '📦', rarity: 'epic' },
    { id: 3, name: 'Rare Case', price: 100, image: '🎀', rarity: 'rare' },
    { id: 4, name: 'Common Case', price: 50, image: '📋', rarity: 'common' },
  ];

  const inventory = [
    { id: 1, name: 'AK-47 Redline', value: 150.50, rarity: 'epic', image: '🔫' },
    { id: 2, name: 'AWP Dragon Lore', value: 2500.00, rarity: 'legendary', image: '🎯' },
    { id: 3, name: 'Knife Karambit', value: 800.75, rarity: 'legendary', image: '🗡️' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleRoulettePlay = () => {
    setRouletteSpinning(true);
    setTimeout(() => {
      setRouletteSpinning(false);
      const winAmount = Math.random() > 0.5 ? coinflipBet * 1.8 : 0;
      if (winAmount > 0) {
        setBalance(balance + winAmount);
      } else {
        setBalance(balance - coinflipBet);
      }
    }, 3000);
  };

  const handleCrash = () => {
    const newMultiplier = parseFloat((Math.random() * 10 + 1).toFixed(2));
    setCrashMultiplier(newMultiplier);
    setBalance(balance + (coinflipBet * newMultiplier - coinflipBet));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow">
              <Icon name="Gamepad2" size={24} className="text-black" />
            </div>
            <h1 className="text-2xl font-bold text-primary">CSGO RUN</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {['Главная', 'Игры', 'Кейсы', 'Инвентарь', 'История'].map((item) => (
              <Button key={item} variant="ghost" className="text-foreground hover:text-primary">
                {item}
              </Button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{currentUser.username}</div>
                  <div className="text-primary font-bold">${balance.toFixed(2)}</div>
                </div>
                <Button className="neon-border">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Пополнить
                </Button>
              </>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary text-primary-foreground neon-glow hover:bg-primary/90">
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-primary">Авторизация</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <Input placeholder="Логин" className="bg-input border-border" />
                    <Input type="password" placeholder="Пароль" className="bg-input border-border" />
                    <Button type="submit" className="w-full bg-primary text-primary-foreground neon-glow">
                      Войти
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section with Bonus */}
      <section className="py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Добро пожаловать в будущее игр
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Испытай удачу в самых захватывающих играх CS:GO
          </p>
          
          {isLoggedIn && (
            <div className="max-w-md mx-auto mb-8">
              <Card className="game-card">
                <CardHeader>
                  <CardTitle className="text-primary">🎁 Ежедневный бонус</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-2">+$50.00</div>
                  <Button className="w-full neon-border" onClick={() => setBalance(balance + 50)}>
                    Забрать бонус
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Games Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-primary">🎮 Игры</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {games.map((game) => (
              <Card key={game.id} className="game-card cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${game.color} rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow`}>
                    <Icon name={game.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-center text-foreground">{game.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge variant="secondary">{game.players} игроков</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Live Games */}
          <Tabs defaultValue="roulette" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-secondary">
              <TabsTrigger value="roulette">Рулетка</TabsTrigger>
              <TabsTrigger value="jackpot">Джекпот</TabsTrigger>
              <TabsTrigger value="coinflip">Coinflip</TabsTrigger>
              <TabsTrigger value="crash">Crash</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roulette" className="mt-6">
              <Card className="game-card">
                <CardHeader>
                  <CardTitle className="text-primary">🎯 Рулетка</CardTitle>
                  <CardDescription>Выбери цвет и выиграй до x14!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className={`w-32 h-32 rounded-full border-4 border-primary mx-auto mb-4 flex items-center justify-center text-4xl ${rouletteSpinning ? 'animate-spin' : ''}`}>
                      🎰
                    </div>
                    <div className="flex justify-center space-x-4 mb-4">
                      <Button className="bg-red-500 hover:bg-red-600">Красный x2</Button>
                      <Button className="bg-green-500 hover:bg-green-600">Зеленый x14</Button>
                      <Button className="bg-gray-700 hover:bg-gray-600">Черный x2</Button>
                    </div>
                    <div className="flex items-center space-x-4 justify-center">
                      <Input 
                        type="number" 
                        value={coinflipBet} 
                        onChange={(e) => setCoinflipBet(Number(e.target.value))}
                        className="w-32"
                        min="10"
                      />
                      <Button 
                        onClick={handleRoulettePlay}
                        disabled={rouletteSpinning}
                        className="neon-border"
                      >
                        {rouletteSpinning ? 'Крутим...' : 'Играть'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jackpot" className="mt-6">
              <Card className="game-card">
                <CardHeader>
                  <CardTitle className="text-yellow-500">👑 Джекпот</CardTitle>
                  <CardDescription>Общий банк: ${jackpotPool.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center text-2xl font-bold text-accent mb-4">
                      💰 ${jackpotPool.toFixed(2)}
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="text-sm text-muted-foreground text-center">
                      Розыгрыш через 2:34
                    </div>
                    <div className="flex justify-center">
                      <Button className="neon-border">Вступить в джекпот</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coinflip" className="mt-6">
              <Card className="game-card">
                <CardHeader>
                  <CardTitle className="text-blue-500">🪙 Coinflip</CardTitle>
                  <CardDescription>Орел или решка - 50/50 шансы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-6xl mb-4">🪙</div>
                    <div className="flex justify-center space-x-4">
                      <Button className="bg-blue-500 hover:bg-blue-600">Орел</Button>
                      <Button className="bg-purple-500 hover:bg-purple-600">Решка</Button>
                    </div>
                    <div className="flex items-center space-x-4 justify-center">
                      <Input 
                        type="number" 
                        value={coinflipBet} 
                        onChange={(e) => setCoinflipBet(Number(e.target.value))}
                        className="w-32"
                      />
                      <Button className="neon-border">Бросить монету</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="crash" className="mt-6">
              <Card className="game-card">
                <CardHeader>
                  <CardTitle className="text-green-500">📈 Crash</CardTitle>
                  <CardDescription>Выйди до краха и умножь ставку!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-accent mb-4">
                      {crashMultiplier.toFixed(2)}x
                    </div>
                    <div className="w-full h-32 bg-secondary rounded-lg flex items-center justify-center mb-4">
                      <div className="text-2xl">📊 График роста</div>
                    </div>
                    <div className="flex items-center space-x-4 justify-center">
                      <Input 
                        type="number" 
                        value={coinflipBet} 
                        onChange={(e) => setCoinflipBet(Number(e.target.value))}
                        className="w-32"
                      />
                      <Button onClick={handleCrash} className="neon-border">Играть</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-primary">📦 Кейсы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((case_) => (
              <Card key={case_.id} className="game-card cursor-pointer">
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{case_.image}</div>
                  <CardTitle className="text-center">{case_.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge variant={case_.rarity === 'legendary' ? 'default' : 'secondary'}>
                      {case_.rarity}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-4">${case_.price}</div>
                    <Button className="w-full neon-border">Открыть кейс</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      {isLoggedIn && (
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">🎒 Инвентарь</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inventory.map((item) => (
                <Card key={item.id} className="game-card">
                  <CardHeader>
                    <div className="text-4xl text-center mb-2">{item.image}</div>
                    <CardTitle className="text-center text-sm">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Badge variant={item.rarity === 'legendary' ? 'default' : 'secondary'} className="mb-2">
                        {item.rarity}
                      </Badge>
                      <div className="text-xl font-bold text-accent mb-4">${item.value.toFixed(2)}</div>
                      <Button variant="outline" size="sm" className="neon-border">
                        Продать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Button variant="ghost" size="sm">Поддержка</Button>
            <Button variant="ghost" size="sm">Правила</Button>
            <Button variant="ghost" size="sm">FAQ</Button>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 CSGO RUN. Играй ответственно. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;