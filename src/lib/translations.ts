export type Language = 'ru' | 'en' | 'es' | 'zh' | 'de' | 'fr';

export const languages: Record<Language, { name: string; flag: string }> = {
  ru: { name: 'Русский', flag: '🇷🇺' },
  en: { name: 'English', flag: '🇺🇸' },
  es: { name: 'Español', flag: '🇪🇸' },
  zh: { name: '中文', flag: '🇨🇳' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
};

export const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    'site.title': 'CSGO RUN',
    'nav.home': 'Главная',
    'nav.games': 'Игры',
    'nav.cases': 'Кейсы',
    'nav.inventory': 'Инвентарь',
    'nav.history': 'История',
    'nav.login': 'Войти',
    'nav.topup': 'Пополнить',
    
    // Hero Section
    'hero.title': 'Добро пожаловать в будущее игр',
    'hero.subtitle': 'Испытай удачу в самых захватывающих играх CS:GO',
    
    // Login
    'login.title': 'Авторизация',
    'login.username': 'Логин',
    'login.password': 'Пароль',
    'login.submit': 'Войти',
    
    // Daily Bonus
    'bonus.title': '🎁 Ежедневный бонус',
    'bonus.claim': 'Забрать бонус',
    
    // Games
    'games.title': '🎮 Игры',
    'games.roulette': 'Рулетка',
    'games.jackpot': 'Джекпот',
    'games.coinflip': 'Coinflip',
    'games.crash': 'Crash',
    'games.players': 'игроков',
    
    // Roulette
    'roulette.title': '🎯 Рулетка',
    'roulette.description': 'Выбери цвет и выиграй до x14!',
    'roulette.red': 'Красный x2',
    'roulette.green': 'Зеленый x14',
    'roulette.black': 'Черный x2',
    'roulette.play': 'Играть',
    'roulette.spinning': 'Крутим...',
    
    // Jackpot
    'jackpot.title': '👑 Джекпот',
    'jackpot.pool': 'Общий банк:',
    'jackpot.timer': 'Розыгрыш через 2:34',
    'jackpot.join': 'Вступить в джекпот',
    
    // Coinflip
    'coinflip.title': '🪙 Coinflip',
    'coinflip.description': 'Орел или решка - 50/50 шансы',
    'coinflip.heads': 'Орел',
    'coinflip.tails': 'Решка',
    'coinflip.flip': 'Бросить монету',
    
    // Crash
    'crash.title': '📈 Crash',
    'crash.description': 'Выйди до краха и умножь ставку!',
    'crash.chart': '📊 График роста',
    'crash.play': 'Играть',
    
    // Cases
    'cases.title': '📦 Кейсы',
    'cases.open': 'Открыть кейс',
    'cases.legendary': 'Legendary Case',
    'cases.epic': 'Epic Case',
    'cases.rare': 'Rare Case',
    'cases.common': 'Common Case',
    
    // Inventory
    'inventory.title': '🎒 Инвентарь',
    'inventory.sell': 'Продать',
    
    // Footer
    'footer.support': 'Поддержка',
    'footer.rules': 'Правила',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2024 CSGO RUN. Играй ответственно. 18+',
    
    // Rarities
    'rarity.legendary': 'legendary',
    'rarity.epic': 'epic',
    'rarity.rare': 'rare',
    'rarity.common': 'common',
  },
  en: {
    // Header
    'site.title': 'CSGO RUN',
    'nav.home': 'Home',
    'nav.games': 'Games',
    'nav.cases': 'Cases',
    'nav.inventory': 'Inventory',
    'nav.history': 'History',
    'nav.login': 'Login',
    'nav.topup': 'Top Up',
    
    // Hero Section
    'hero.title': 'Welcome to the Future of Gaming',
    'hero.subtitle': 'Try your luck in the most exciting CS:GO games',
    
    // Login
    'login.title': 'Authorization',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.submit': 'Login',
    
    // Daily Bonus
    'bonus.title': '🎁 Daily Bonus',
    'bonus.claim': 'Claim Bonus',
    
    // Games
    'games.title': '🎮 Games',
    'games.roulette': 'Roulette',
    'games.jackpot': 'Jackpot',
    'games.coinflip': 'Coinflip',
    'games.crash': 'Crash',
    'games.players': 'players',
    
    // Roulette
    'roulette.title': '🎯 Roulette',
    'roulette.description': 'Choose a color and win up to x14!',
    'roulette.red': 'Red x2',
    'roulette.green': 'Green x14',
    'roulette.black': 'Black x2',
    'roulette.play': 'Play',
    'roulette.spinning': 'Spinning...',
    
    // Jackpot
    'jackpot.title': '👑 Jackpot',
    'jackpot.pool': 'Total pool:',
    'jackpot.timer': 'Draw in 2:34',
    'jackpot.join': 'Join Jackpot',
    
    // Coinflip
    'coinflip.title': '🪙 Coinflip',
    'coinflip.description': 'Heads or tails - 50/50 chances',
    'coinflip.heads': 'Heads',
    'coinflip.tails': 'Tails',
    'coinflip.flip': 'Flip Coin',
    
    // Crash
    'crash.title': '📈 Crash',
    'crash.description': 'Cash out before crash and multiply your bet!',
    'crash.chart': '📊 Growth Chart',
    'crash.play': 'Play',
    
    // Cases
    'cases.title': '📦 Cases',
    'cases.open': 'Open Case',
    'cases.legendary': 'Legendary Case',
    'cases.epic': 'Epic Case',
    'cases.rare': 'Rare Case',
    'cases.common': 'Common Case',
    
    // Inventory
    'inventory.title': '🎒 Inventory',
    'inventory.sell': 'Sell',
    
    // Footer
    'footer.support': 'Support',
    'footer.rules': 'Rules',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2024 CSGO RUN. Play responsibly. 18+',
    
    // Rarities
    'rarity.legendary': 'legendary',
    'rarity.epic': 'epic',
    'rarity.rare': 'rare',
    'rarity.common': 'common',
  },
  es: {
    // Header
    'site.title': 'CSGO RUN',
    'nav.home': 'Inicio',
    'nav.games': 'Juegos',
    'nav.cases': 'Cajas',
    'nav.inventory': 'Inventario',
    'nav.history': 'Historia',
    'nav.login': 'Iniciar Sesión',
    'nav.topup': 'Recargar',
    
    // Hero Section
    'hero.title': 'Bienvenido al Futuro de los Juegos',
    'hero.subtitle': 'Prueba tu suerte en los juegos más emocionantes de CS:GO',
    
    // Login
    'login.title': 'Autorización',
    'login.username': 'Usuario',
    'login.password': 'Contraseña',
    'login.submit': 'Iniciar Sesión',
    
    // Daily Bonus
    'bonus.title': '🎁 Bono Diario',
    'bonus.claim': 'Reclamar Bono',
    
    // Games
    'games.title': '🎮 Juegos',
    'games.roulette': 'Ruleta',
    'games.jackpot': 'Bote',
    'games.coinflip': 'Volado',
    'games.crash': 'Crash',
    'games.players': 'jugadores',
    
    // Roulette
    'roulette.title': '🎯 Ruleta',
    'roulette.description': '¡Elige un color y gana hasta x14!',
    'roulette.red': 'Rojo x2',
    'roulette.green': 'Verde x14',
    'roulette.black': 'Negro x2',
    'roulette.play': 'Jugar',
    'roulette.spinning': 'Girando...',
    
    // Jackpot
    'jackpot.title': '👑 Bote',
    'jackpot.pool': 'Pozo total:',
    'jackpot.timer': 'Sorteo en 2:34',
    'jackpot.join': 'Unirse al Bote',
    
    // Coinflip
    'coinflip.title': '🪙 Volado',
    'coinflip.description': 'Cara o cruz - 50/50 posibilidades',
    'coinflip.heads': 'Cara',
    'coinflip.tails': 'Cruz',
    'coinflip.flip': 'Lanzar Moneda',
    
    // Crash
    'crash.title': '📈 Crash',
    'crash.description': '¡Retira antes del crash y multiplica tu apuesta!',
    'crash.chart': '📊 Gráfico de Crecimiento',
    'crash.play': 'Jugar',
    
    // Cases
    'cases.title': '📦 Cajas',
    'cases.open': 'Abrir Caja',
    'cases.legendary': 'Caja Legendaria',
    'cases.epic': 'Caja Épica',
    'cases.rare': 'Caja Rara',
    'cases.common': 'Caja Común',
    
    // Inventory
    'inventory.title': '🎒 Inventario',
    'inventory.sell': 'Vender',
    
    // Footer
    'footer.support': 'Soporte',
    'footer.rules': 'Reglas',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.copyright': '© 2024 CSGO RUN. Juega responsablemente. 18+',
    
    // Rarities
    'rarity.legendary': 'legendario',
    'rarity.epic': 'épico',
    'rarity.rare': 'raro',
    'rarity.common': 'común',
  },
  zh: {
    // Header
    'site.title': 'CSGO RUN',
    'nav.home': '首页',
    'nav.games': '游戏',
    'nav.cases': '箱子',
    'nav.inventory': '库存',
    'nav.history': '历史',
    'nav.login': '登录',
    'nav.topup': '充值',
    
    // Hero Section
    'hero.title': '欢迎来到游戏的未来',
    'hero.subtitle': '在最激动人心的CS:GO游戏中试试运气',
    
    // Login
    'login.title': '授权',
    'login.username': '用户名',
    'login.password': '密码',
    'login.submit': '登录',
    
    // Daily Bonus
    'bonus.title': '🎁 每日奖励',
    'bonus.claim': '领取奖励',
    
    // Games
    'games.title': '🎮 游戏',
    'games.roulette': '轮盘',
    'games.jackpot': '奖池',
    'games.coinflip': '抛硬币',
    'games.crash': '崩盘',
    'games.players': '玩家',
    
    // Roulette
    'roulette.title': '🎯 轮盘',
    'roulette.description': '选择颜色，赢取高达x14的奖励！',
    'roulette.red': '红色 x2',
    'roulette.green': '绿色 x14',
    'roulette.black': '黑色 x2',
    'roulette.play': '开始游戏',
    'roulette.spinning': '旋转中...',
    
    // Jackpot
    'jackpot.title': '👑 奖池',
    'jackpot.pool': '总奖池：',
    'jackpot.timer': '2:34后开奖',
    'jackpot.join': '加入奖池',
    
    // Coinflip
    'coinflip.title': '🪙 抛硬币',
    'coinflip.description': '正面或反面 - 50/50机会',
    'coinflip.heads': '正面',
    'coinflip.tails': '反面',
    'coinflip.flip': '抛硬币',
    
    // Crash
    'crash.title': '📈 崩盘',
    'crash.description': '在崩盘前退出并倍增您的赌注！',
    'crash.chart': '📊 增长图表',
    'crash.play': '开始游戏',
    
    // Cases
    'cases.title': '📦 箱子',
    'cases.open': '开启箱子',
    'cases.legendary': '传说箱子',
    'cases.epic': '史诗箱子',
    'cases.rare': '稀有箱子',
    'cases.common': '普通箱子',
    
    // Inventory
    'inventory.title': '🎒 库存',
    'inventory.sell': '出售',
    
    // Footer
    'footer.support': '客服',
    'footer.rules': '规则',
    'footer.faq': '常见问题',
    'footer.copyright': '© 2024 CSGO RUN. 理性游戏. 18+',
    
    // Rarities
    'rarity.legendary': '传说',
    'rarity.epic': '史诗',
    'rarity.rare': '稀有',
    'rarity.common': '普通',
  },
  de: {
    // Header
    'site.title': 'CSGO RUN',
    'nav.home': 'Startseite',
    'nav.games': 'Spiele',
    'nav.cases': 'Kisten',
    'nav.inventory': 'Inventar',
    'nav.history': 'Geschichte',
    'nav.login': 'Anmelden',
    'nav.topup': 'Aufladen',
    
    // Hero Section
    'hero.title': 'Willkommen in der Zukunft des Spielens',
    'hero.subtitle': 'Versuchen Sie Ihr Glück in den aufregendsten CS:GO-Spielen',
    
    // Login
    'login.title': 'Autorisierung',
    'login.username': 'Benutzername',
    'login.password': 'Passwort',
    'login.submit': 'Anmelden',
    
    // Daily Bonus
    'bonus.title': '🎁 Täglicher Bonus',
    'bonus.claim': 'Bonus erhalten',
    
    // Games
    'games.title': '🎮 Spiele',
    'games.roulette': 'Roulette',
    'games.jackpot': 'Jackpot',
    'games.coinflip': 'Münzwurf',
    'games.crash': 'Crash',
    'games.players': 'Spieler',
    
    // Roulette
    'roulette.title': '🎯 Roulette',
    'roulette.description': 'Wählen Sie eine Farbe und gewinnen Sie bis zu x14!',
    'roulette.red': 'Rot x2',
    'roulette.green': 'Grün x14',
    'roulette.black': 'Schwarz x2',
    'roulette.play': 'Spielen',
    'roulette.spinning': 'Dreht sich...',
    
    // Jackpot
    'jackpot.title': '👑 Jackpot',
    'jackpot.pool': 'Gesamtpool:',
    'jackpot.timer': 'Ziehung in 2:34',
    'jackpot.join': 'Jackpot beitreten',
    
    // Coinflip
    'coinflip.title': '🪙 Münzwurf',
    'coinflip.description': 'Kopf oder Zahl - 50/50 Chancen',
    'coinflip.heads': 'Kopf',
    'coinflip.tails': 'Zahl',
    'coinflip.flip': 'Münze werfen',
    
    // Crash
    'crash.title': '📈 Crash',
    'crash.description': 'Steigen Sie vor dem Crash aus und vervielfachen Sie Ihren Einsatz!',
    'crash.chart': '📊 Wachstumsdiagramm',
    'crash.play': 'Spielen',
    
    // Cases
    'cases.title': '📦 Kisten',
    'cases.open': 'Kiste öffnen',
    'cases.legendary': 'Legendäre Kiste',
    'cases.epic': 'Epische Kiste',
    'cases.rare': 'Seltene Kiste',
    'cases.common': 'Gewöhnliche Kiste',
    
    // Inventory
    'inventory.title': '🎒 Inventar',
    'inventory.sell': 'Verkaufen',
    
    // Footer
    'footer.support': 'Support',
    'footer.rules': 'Regeln',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2024 CSGO RUN. Spiele verantwortlich. 18+',
    
    // Rarities
    'rarity.legendary': 'legendär',
    'rarity.epic': 'episch',
    'rarity.rare': 'selten',
    'rarity.common': 'gewöhnlich',
  },
  fr: {
    // Header
    'site.title': 'CSGO RUN',
    'nav.home': 'Accueil',
    'nav.games': 'Jeux',
    'nav.cases': 'Caisses',
    'nav.inventory': 'Inventaire',
    'nav.history': 'Historique',
    'nav.login': 'Se connecter',
    'nav.topup': 'Recharger',
    
    // Hero Section
    'hero.title': 'Bienvenue dans le Futur du Gaming',
    'hero.subtitle': 'Tentez votre chance dans les jeux CS:GO les plus excitants',
    
    // Login
    'login.title': 'Autorisation',
    'login.username': "Nom d'utilisateur",
    'login.password': 'Mot de passe',
    'login.submit': 'Se connecter',
    
    // Daily Bonus
    'bonus.title': '🎁 Bonus Quotidien',
    'bonus.claim': 'Récupérer le bonus',
    
    // Games
    'games.title': '🎮 Jeux',
    'games.roulette': 'Roulette',
    'games.jackpot': 'Jackpot',
    'games.coinflip': 'Pile ou Face',
    'games.crash': 'Crash',
    'games.players': 'joueurs',
    
    // Roulette
    'roulette.title': '🎯 Roulette',
    'roulette.description': 'Choisissez une couleur et gagnez jusqu\'à x14 !',
    'roulette.red': 'Rouge x2',
    'roulette.green': 'Vert x14',
    'roulette.black': 'Noir x2',
    'roulette.play': 'Jouer',
    'roulette.spinning': 'Rotation...',
    
    // Jackpot
    'jackpot.title': '👑 Jackpot',
    'jackpot.pool': 'Cagnotte totale :',
    'jackpot.timer': 'Tirage dans 2:34',
    'jackpot.join': 'Rejoindre le Jackpot',
    
    // Coinflip
    'coinflip.title': '🪙 Pile ou Face',
    'coinflip.description': 'Pile ou face - 50/50 chances',
    'coinflip.heads': 'Pile',
    'coinflip.tails': 'Face',
    'coinflip.flip': 'Lancer la pièce',
    
    // Crash
    'crash.title': '📈 Crash',
    'crash.description': 'Encaissez avant le crash et multipliez votre mise !',
    'crash.chart': '📊 Graphique de croissance',
    'crash.play': 'Jouer',
    
    // Cases
    'cases.title': '📦 Caisses',
    'cases.open': 'Ouvrir la caisse',
    'cases.legendary': 'Caisse Légendaire',
    'cases.epic': 'Caisse Épique',
    'cases.rare': 'Caisse Rare',
    'cases.common': 'Caisse Commune',
    
    // Inventory
    'inventory.title': '🎒 Inventaire',
    'inventory.sell': 'Vendre',
    
    // Footer
    'footer.support': 'Support',
    'footer.rules': 'Règles',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2024 CSGO RUN. Jouez de manière responsable. 18+',
    
    // Rarities
    'rarity.legendary': 'légendaire',
    'rarity.epic': 'épique',
    'rarity.rare': 'rare',
    'rarity.common': 'commun',
  },
};

export const useTranslation = (language: Language) => {
  const t = (key: string): string => {
    return translations[language]?.[key] || translations['ru'][key] || key;
  };

  return { t };
};