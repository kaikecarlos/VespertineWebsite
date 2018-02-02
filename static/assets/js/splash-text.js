var d = new Date();
var m = d.getMonth();
var n = d.getDate();
var w = d.getDay();

var splashTexts = [
"VIPs ajudam o PocketDreams!",
"Contém Traços de Leite!",
"100% puro!",
"90% sem bugs!",
"Discord > Skype!",
"Volte para o PocketDreams!",
"Melhor que o SparklyPower!",
"Ô loco meu!",
"Se vira nos trinta!",
"Quem sabe faz ao vivo!",
"ERRRROOOOOOOOOUUUUUUUU!!!!",
"TÁ PEGANDO FOGO BICHO!",
"Ih Serjão Sujou!",
"ERROU!",
"12345 é uma senha insegura!",
"while (true) { party(); }",
"We Are Number One!",
"Selo Loritta de Qualidade!",
"https://loritta.website/",
"OwO what's this?",
"Wow, textos amarelos!",
"& Knuckles!",
"<img src='http://127.0.0.1:60600/assets/img/smol_lori_putassa_aline.png'></img>",
"<img src='http://127.0.0.1:60600/assets/img/lori_ok_hand.png'></img>",
"<img src='http://127.0.0.1:60600/assets/img/lori_triste.png'></img>",
"<img src='http://127.0.0.1:60600/assets/img/loritta.png'></img>",
"<img src='http://127.0.0.1:60600/assets/img/eu_te_moido.png'></img>",
"Pantufa é a minha amiga!",
"Pergunte para a sua mãe!",
"Kotlin!",
"Java 8!",
"Hello, World!",
"Wow!",
"Compre coisas na nossa loja!",
"Uma Loritta de pelúcia seria legal :3",
"eu te moido :3",
"Bem divertido!",
"Bem legalzinho!",
"Melhor que a concorrência!",
"Invicto!",
"Twittado sobre!",
"Milhares de cores!",
"Made in Brazil!",
"Made in São Paulo!",
"Vai pelo o Butantã!",
"covfefe",
"O limite é o céu!",
"Várias novidades a cada dia!",
"Olá, Mundo!",
"x = -b +- raiz de b² - 4ac / 2a",
"66,6% automatizado!",
"Não jogue enquanto estiver dirigindo!",
"Sexy!",
"Sensacional!",
"Regra #1: Nunca é culpa minha",
"Normalizando Rede Social",
"*insira texto aleatório aqui*",
"Bonito!",
"Pode conter blocos em posições aleatórias!",
"dê rt por favor ok obg",
"K-pop é... legal, eu acho!",
"BungeeCord!",
"Paper!",
"Spigot!",
"Diga adeus ao tédio!",
"Criado para a diversão, otimizado para o sucesso!",
"Entre e dê aquela craftada marota!",
"Um servidor que é uma caixinha de surpresas",
"qualidade & sincronia",
":^)",
"*insira mensagem criativa aqui*",
"Aquele servidor que tem pastel de flango",
"Aquele servidor que tem Funk do Yudi",
"Feito com muito amor e glitter!",
"Feito com amor e carinho!",
"*bocejo*",
"Eita Giovanna, o forninho caiu!",
"kk eae men",
"South America Memes!",
"Pixels!",
"Agora com mais abraços!",
"Agora com mais coisas!",
"Eae seus p*tos!",
"99% sem amoebas!",
"Sr. Sr. Wilson",
"Século XXI!",
"Tá fácil dizer que me ama!",
"Tá doido de pedra!",
"Linux!",
"You are going to have a bad time.",
"Hopes and Dreams!",
"99% sem bodes fofinhos",
"CanalCanalha > RezendeEvil",
"jooj",
"oao",
"Votar ajuda o PocketDreams!",
"Vote!",
"eu amo você :3",
"https://discord.gg/V7Kbh4z",
"Adicione a Loritta no seu servidor!",
"Loritta é a mascote mais fofa que existe!",
"i luv u",
"NullPointerException",
"Nunca nem vi",
"#daora",
"Cê tem demência?",
"Supimpa!",
"ata",
"atapo",
"Tão bom quanto Strogonoff",
"Maior que algo pequeno",
"Não mendigue coisas!",
"Como visto na TV!",
"Caso persistirem os sintomas o médico deverá ser consultado",
"Épico!",
"Comunidade Incrível!",
"Jogatina casual!",
"Confira!",
"Recuse imitações!",
"Siga o trem, CJ!",
"/give @a hugs 64",
"Servidor do Ano!",
"Haha, LOL!",
"Várias visualizações no YouTube!",
"Melhor que tudo que você já viu!",
"Mais quente que o sol!",
"ay caramba!",
"Eu tenho uma sugestão",
"O melhor comeback da história!",
"Inspirador!",
"Online!",
"É um servidor!",
"Turn it up, get down!",
"Amado por milhões!",
"PocketDreams!",
"Aceitamos Bitcoin!",
"Aceitamos Dogecoin!",
"Celular não incluso",
"Computador não incluso",
"Peças vendidas separadamente",
"Survival não é Factions!",
"-w-",
"Se for abusar nem entra",
"CHUCKLES",
"Bolso não incluso",
"Conteúdo Family Friendly!",
"Você + PocketDreams = ❤",
"i love 🍮",
"Veio com dinheiro?",
"Vai ter VIP nesse servidor?",
"Melhor que o Beuteu<span class='random-text'>geu</span>!",
"Farm Simulator " + d.getFullYear() + "!",
"Mining Simulator " + d.getFullYear() + "!",
"<span class='random-text'>LOL FUNKY</span>",
"Você só fala groselha!",
"Me deixou com os pepinos aqui",
"Loritta é mais fofa que o Wumpus!",
"Minecraft > Roblox",
"oof",
"Pantufa > SparklyBot",
"Loritta > Pantufa",
"Playlist de Funk com a Dani Russo",
"Não use @everyone para avisar coisas inúteis!",
"Não use @here para avisar coisas inúteis!",
"Rolêzinho no shopping com a Loritta Morenitta!",
"Loritta Morenitta",
"Aqui tem batidão daora!",
"Olha o aviãozinho!",
"Temos nenhuma relação com o DreamCra<span class='random-text'>ft</span>!",
"Melhor Servidor Survival do Brasil! [citação necessária]",
"Respeite as regras!",
"Contém peças pequenas, não adequado para crianças menores de 5 anos.",
"Em breve em um computador perto de você!",
"Em breve em um celular perto de você!",
"Que a força esteja com você.",
"Que os blocos estejam com você.",
"Melhor que a vida real!",
"Dividindo por zero!",
"Diversão é Infinita: PocketDreams",
"Divulgação apenas na #mendigagem!",
"The quick brown fox jumps over the lazy doggo",
"wow, such server, very fun",
"rawr -w-",
"^-^",
"Keep Your Head Up!!",
"Survival é melhor que Factions!",
"Survival é melhor que Full PvP!",
"ayy lmao",
"Loritta = Lori Jackrabbit + Carlotta Taylor Shay",
"...",
"Me adiciona no Orkut!",
"Me adiciona no Facebook!",
"Me adiciona no ZipZop!",
"Cuidado que o povo do SAM é brabo!",
"O Felix já mandou o recado!",
"Turma da Inbonha",
"Foi sem querer querendo...",
"Mas o que é isso na tela do meu computador?",
"Criar frases que quase ninguém vai ver > Melhorar o PocketDreams",
"Melhor que Pabllo Vittar!",
"Cadê meus óculos Juliana?",
"Sem cópias de outros servidores!",
"Derp!",
"the ting goes skraaaaaaaaaa",
"Adoro as fan arts que fizeram de mim! ^-^",
"Memes de qualidade™",
"Torradeiras torram torradas",
"Que o caminho do Herói leve à Triforce",
"Get Over Here!",
"Reinicia o servidor!",
"mds o cara tá de hack bane ele staff",
"Proerd é o programa, Proerd é a solução!",
"Cepo de madeira bem forte",
"Não custa nada entrar e se divertir!",
"Frete grátis",
"Já apertou uma raposa hoje? ^w^",
"Você sabe o que significa Malakoi?",
"Após aberto consumir em até 30 dias",
"A Gabizinha que fez a minha linda foto!",
"Blindado contra recalque!",
"Vários players online!",
"Mais rápido que Uno de firma (aqueles com escadinha)",
"Festa de fim de ano da firma!",
"Lucas do Sonhosismos",
"Porquê você está lendo isso?",
"Chame seus amigos!",
"Fatality!",
"2 + 2 = 4 - 1 = 3 quick mafs",
"extra thicc",
"Não divulgue o PocketDreams em outros servidores, obrigada! ^-^",
"Isso aqui que é cultura!",
"Mais viciante que droga!",
"O Jogo: Você perdeu",
"Aaaaaaaalô, quem fala? Você quer ganhar o quê?",
"PreiSteicho, PreiSteicho, PreiSteicho!",
"Bem-Vindo(a) a LorittaLand!",
"4002-8922",
"Loritta#0219",
"Pantufa#3783",
"Eu ❤ Minecraft!",
"Se divirta em nossos sonhos!",
"Strange, Isn't It?",
"Baseado em fatos imaginários!",
"Você usou 100% da internet e a navegação foi interrompida",
"Memory Leaks são do capeta!",
"Herp derp!",
"Não gostou? Vá embora!",
"Mais engraçado que o Tio do Pavê",
"É pá vê ou pá joga?",
"Can you Feel the Sunshine?",
"Não seja inimigo da Loritta!",
"Cadê minha mochila?!",
"Genesis does what Nintendon't",
"PocketDreams does what Beuteudon't",
"Mochilas não guardam Mochilas!",
"Jogue até seu pulso quebrar!",
"Para todas as idades!",
"Livre para todas as idades!",
"Tchu tcha tcha tchu tchu tcha",
"Tá em shokk?",
"Essa vai para o Treta News!",
"Essa vai para o Paz News!",
"Camaro Amarelo",
"666",
"Como vou pro Survival?",
"pfv quero virar da staff",
"Como jogo?",
"Perdi minha casa, e agora?",
"A vida só é chata porque não tem respawn",
"Alguém me dá money?",
"Eis que a 10/10 também joga no PocketDreams",
"Oppa Gangam Style!",
"Pow Pow Tey Tey",
"Esse é o meu jeito de viver",
"Já ajudei, agora posso ser ajudante?",
"Pau de Selfie!",
"Tudo calculado",
"MC Lan novamente",
"bunda",
"Quer um passaporte para o PocketDreams?",
"Não sou conduzido, conduzo.",
"Ei seu bunda mole",
"Parece que temos um xeroque homes aqui!",
". ..- / - . / -- --- .. -.. ---",
"gg!",
"iCarly é mais engraçado que Zoey 101!",
"Opa, eae vey, beleza?",
"Quem nunca quis comer um taco de macarrão do Spencer?",
"fofa :3",
"Herobrine existe! 👻",
"Herobrine não existe! 👻",
"Mais modinha que Fidget Spinner!",
"E as namoradinhas?",
"Olha o pasteeeeeeeeeeeeeeeeeeeeel!",
"Fuleco",
"Zakumi",
"Zabivaka",
"Olha o Menino Neymar, garoto futebol!",
"Várias pessoas estão digitando...",
"I Gotta Believe!",
"Jogue até a sua bateria acabar!",
"Recomendo comprar uma bateria externa antes de jogar",
"vem de zap 9vinha",
"Melhor que Netflix",
"Pelo ou menos é melhor que Crepúsculo",
"Já tivemos mais histórias de amor que foram melhores que Crepúsculo!",
"Só fortes entenderam todas as referências!",
"cool",
"Turn Down For What!",
"One More Time",
"🔥 + 🆒",
"A música \"Too Long\" é realmente muito grande!",
"saudades monark",
"é o venoninho estueme",
"git reset --hard"
]

var splashText = splashTexts[Math.floor(Math.random() * splashTexts.length)];

if (w == 5) {
var splashTextsSexta = [
"HOJE É SEXTA-FEIRA! <img src='http://127.0.0.1:60600/assets/img/emojo_sextafeira.gif'></img>",
"SEXTOU! <img src='http://127.0.0.1:60600/assets/img/emojo_sextafeira.gif'></img>",
"VEM SEXTAR COM A GENTE! <img src='http://127.0.0.1:60600/assets/img/emojo_sextafeira.gif'></img>",
"MEU AVÔ MORREU, MAS HOJE É SEXTA-FEIRA! <img src='http://127.0.0.1:60600/assets/img/emojo_sextafeira.gif'></img>"
]

splashText = splashTextsSexta[Math.floor(Math.random() * splashTextsSexta.length)];
}

if (m == 11 && (n == 24 || n == 25)) { // Natal
splashText = "Feliz Natal! 🎅"
}

if (m == 0 && n == 1) { // Ano Novo
splashText = "Feliz Ano Novo! 🎉"
}

if (m == 0 && (n == 3)) { // owo
splashText = "MrPowerGamerBR ❤ Thaay"
}

if (m == 2 && (n == 30)) { // Loritta
splashText = "Feliz Aniversário Loritta!"
}

if (m == 99 && (n == 99)) { // PocketDreams
splashText = "Feliz Aniversário PocketDreams!"
}

if (m == 7 && (n == 11)) { // MrPowerGamerBR
splashText = "Feliz Aniversário MrPowerGamerBR!"
}

if (m == 3 && (n == 21)) { // Tiradentes
splashText = "Tiradentes!"
}

if (m == 4 && (n == 1)) { // Dia do Trabalhador
splashText = "Feliz Dia do Trabalhador!"
}

if (m == 5 && (n == 12)) { // Dia dos Namorados
splashText = "Feliz Dia dos Namorados! ❤"
}

if (m == 5 && (n == 24)) { // Dia de São João
splashText = "Feliz Dia de São João!"
}

if (m == 6 && (n == 20)) { // Dia do Amigo
splashText = "Feliz Dia do Amigo!"
}

if (m == 8 && (n == 7)) { // Independência
splashText = "Independência ou Morte!"
}

if (m == 9 && (n == 12)) { // Crianças
splashText = "Feliz Dia das Crianças!"
}

if (m == 9 && (n == 15)) { // Professor
splashText = "Feliz Dia dos Professores!"
}

if (m == 10 && (n == 15)) { // Proclamação
splashText = "Feliz Dia da Proclamação da República!"
}

$("#splash-text").html(splashText)

var html = $.parseHTML(splashText); //parseHTML return HTMLCollection
var text = $(html).text(); //use $() to get .text() method

var length = text.length
var size = 1.5 - (length * 0.02)
$("#splash-text").css("font-size", size + "em")