const db = require('./database')

const hihi = `
Search "habbo.nl" (89 hits in 2 files of 2 searched)
  C:\Users\Renan\Downloads\Telegram Desktop\arquivos\@txtbase post 1908 #2.txt (12 hits)
	Line   339107: https://www.habbo.nl/ marcellino007@live.nl:Pariah2015!
	Line   597165: https://www.habbo.nl/registration Bjarnelindeijer@gmail.com:Ippon2006
	Line   792996: https://www.habbo.nl/registration simone@445.nl:ikhouvaneten1
	Line 1095949: https://www.habbo.nl/ louisjennard@gmail.com:portugal1032280705
	Line 1096427: https://www.habbo.nl/ louisjennard@gmail.com:portugal1032280705
	Line 2040219: https://www.habbo.nl/ marcellino007@live.nl:Pariah2015!
	Line 2298277: https://www.habbo.nl/registration Bjarnelindeijer@gmail.com:Ippon2006
	Line 2494108: https://www.habbo.nl/registration simone@445.nl:ikhouvaneten1
	Line 2797061: https://www.habbo.nl/ louisjennard@gmail.com:portugal1032280705
	Line 2797539: https://www.habbo.nl/ louisjennard@gmail.com:portugal1032280705
	Line 3948593: https://habbo.nl/:annewester@home.nl:An28021999
	Line 4113100: https://habbo.nl/:annewester@home.nl:An28021999
  C:\Users\Renan\Downloads\Telegram Desktop\arquivos\@txtbaseurl post 1908.txt (77 hits)
	Line   208992: https://www.habbo.nl:immanuel2717:saad208
	Line   234778: https://www.habbo.nl/registration:Trufaah02@gmail.com:Samkroon1990
	Line   276361: https://www.habbo.nl/:larsiparsi55@icloud.com:supertroll123467
	Line   313480: https://www.habbo.nl/registration:jordyvanriet1@gmail.com:scylanders2006
	Line   314406: https://www.habbo.nl/:aledin5@hotmail.com:indy12
	Line   336079: https://www.habbo.nl/:joepio2000@gmail.com:joepio01
	Line   354662: https://www.habbo.nl/account/password/resetIdentity:manalrabhi@live.nl:paramocro123
	Line   388818: http://www.habbo.nl/:ray_paraiba@hotmail.com:48903911X
	Line   417036: https://www.habbo.nl/:juliannieborg@hotmail.com:juul10sax.
	Line   493283: https://www.habbo.nl/:haider_alrammahi11@hotmail.com:error1010
	Line   509100: https://www.habbo.nl/registration:essaidi-mo@hotmail.com:paplienko1
	Line   554151: https://www.habbo.nl/:esdonk.jari@outlook.com:Jari2002
	Line   675068: https://www.habbo.nl/:bedwarsplayer400@gmail.com:Samkroon1990
	Line   699758: https://www.habbo.nl/account/submit:regfdgfd@fsdgrd.nl:lol123
	Line   707814: https://www.habbo.nl/registration:x.nuisker@outlook.com:yoshi013
	Line   731527: https://www.habbo.nl/:colin1234@live.nl:klaas123
	Line   731827: https://www.habbo.nl/:dylanahuiskens@hotmail.com:dylana10
	Line   744296: https://www.habbo.nl/registration:jdvag010@gmail.com:diogo2005
	Line   784140: https://www.habbo.nl/registration:Trufaah01@gmail.com:elviraislekker2
	Line   804270: https://www.habbo.nl/registration:appiecool8777@gmail.com:sara2005
	Line   813093: https://www.habbo.nl/registration:smiedra@gmail.com:Smiedra2005!
	Line   839777: https://www.habbo.nl/:jamietsang10@gmail.com:Ipad2004
	Line   874786: https://www.habbo.nl/:morrismiddelkoop@gmail.com:M29102003
	Line   980213: https://www.habbo.nl/:Trufaah03@gmail.com:Samkroon1990
	Line 1024827: https://www.habbo.nl/hotel:jessepot08@gmail.com:jesse200812
	Line 1039978: https://www.habbo.nl/registration:randykomt@gmail.com:randy2004
	Line 1092117: https://www.habbo.nl/:marijndam@gmail.com:Marijn13
	Line 1171712: https://www.habbo.nl/registration:jamessteinbach12@outlook.com:Skaapje007
	Line 1181432: https://www.habbo.nl/registration:61634218@live.nl:papamama1
	Line 1192143: https://www.habbo.nl/registration:wienholtsthomas@gmail.com:welkom123
	Line 1216513: https://www.habbo.nl/registration:oaydogant@gmail.com:omer2004
	Line 1218034: https://www.habbo.nl:gamzepolat2007@gmail.com:gamzepolat123414145
	Line 1332962: https://www.habbo.nl/account/submit:monsma_habfly@hotmail.nl:05junior
	Line 1346028: https://www.habbo.nl/account/submit:NickyMonsma2000:05junior
	Line 1374477: https://www.habbo.nl/registration:kevinbakker094@gmail.com:kevin2004
	Line 1405092: https://www.habbo.nl/:Digo111:monkie243
	Line 1424722: https://pahabbo.nl/:Eliotrope:Alex12345
	Line 1465383: https://www.habbo.nl/:patrick-bot@outlook.com:QweNM123
	Line 1517691: https://www.habbo.nl/registration:mwlitjes@gmail.com:Mekker55
	Line 1532490: https://www.habbo.nl/account/submit:hoidoeioke:05junior
	Line 1551595: https://www.habbo.nl/account/submit:jorisnie@hotmail.com:hoijoris11
	Line 1629520: https://www.habbo.nl/:immanuel2717:saad208
	Line 1673251: https://www.habbo.nl/:diniboy123@hotmail.com:Offspring1
	Line 1694341: https://www.habbo.nl/:romarvervloed@hotmail.nl:romar2009
	Line 1724770: https://www.habbo.nl/account/submit:xnickyxmonsma:lol123
	Line 1778980: https://www.habbo.nl/hotel:omarsaid62@hotmail.com:Silfense321
	Line 1820064: https://www.habbo.nl/:liltwata@gmail.com:Alexlit123
	Line 1826958: https://www.habbo.nl/:lichellalittel@hotmail.com:lichella9
	Line 1832779: https://www.habbo.nl/account/submit:timvandoorn1999@hotmail.com:6Klklk
	Line 1865967: https://www.habbo.nl/:JC.hordijk@hotmail.nl:JJC17062002
	Line 1914883: https://www.habbo.nl/registration:hussain_alrammahi11@hotmail.com:error1010
	Line 1987208: https://www.habbo.nl/account/submit:monsma@habfly.nl:05junior
	Line 2032391: https://www.habbo.nl/:emailvdlaar@gmail.com:laartjes11
	Line 2074235: https://www.habbo.nl/registration:juliusjan23@gmail.com:12091erds
	Line 2114227: https://www.habbo.nl/:mikaspeijers@gmail.com:LoL2108.
	Line 2119913: https://www.habbo.nl/account/password/resetIdentity:maxzagers1@gmail.com:Maxzhndaanhn1
	Line 2139482: https://www.habbo.nl/:mrbluewolfgames@gmail.com:Noortje6
	Line 2153169: https://www.habbo.nl/:hans.martine.dejong@ziggo.nl: 
	Line 2168943: https://www.habbo.nl:sami_07@live.nl:ik:ben:sami
	Line 2962804: https://www.habbo.nl/registration:randy.spijkers@gmail.com:Voetbal66
	Line 3202263: https://www.habbo.nl/registration:128699@andreascollege.nl:Jarno2019
	Line 3224050: https://www.habbo.nl/registration:jamiybijen@outlokk.com:C@hXissHC6xsqu$
	Line 3331366: https://www.habbo.nl/registration:steamissteamzegiknu@gmail.com:123LEEt123
	Line 3586390: https://www.habbo.nl/registration:ademkok2018@gmail.com:@M@p8,@uBm6#ZGC
	Line 3594072: https://www.habbo.nl:jeffreydevos50@hotmail.com:ajax1998
	Line 3762491: https://www.habbo.nl/registration:impsicodelic@gmail.com:leonardo99
	Line 4003275: https://www.habbo.nl:deangerjan@gmail.com:deaN!?80
	Line 4161439: https://www.habbo.nl/registration:lenbeast2006@gmail.com:Lennon2006
	Line 4322975: https://www.habbo.nl/registration:thimo2109@outlook.com:2109Thimo
	Line 4733788: https://www.habbo.nl:jaybasant@live.nl:Jaybasant1
	Line 4739732: https://www.habbo.nl/registration:jijdikkemoeder@Gmail.com:diesel01
	Line 4758693: https://www.habbo.nl/registration:sharkboy4@gmail.com:rock1212
	Line 4892951: https://www.habbo.nl/registration:2bogaert400@gmail.com:Hopeloos.
	Line 5026820: https://www.habbo.nl/:bassellies@live.nl:Kieren11
	Line 5131705: https://www.habbo.nl/registration:camieldinandkamstra@gmail.com:Camiel2006
	Line 6767110: https://www.habbo.nl/registration:frenniehopman@gmail.com:Cool1234
	Line 7218515: https://www.habbo.nl/registration:sofiavaldez190@hotmail.com:registrate345
`

const filtrador = (s, n) => {
	const test = s.split("\n");
	const test2 = n.split("\n");
	const newArr = [];
	const newArr2 = [];
	const filterArr = [];
	const filterArr2 = [];

	for (let i = 0; i < test.length; i++) {
		const index = test[i].indexOf("w");
		if (index !== -1) {
			newArr.push(test[i].slice(index));
		} else {
			newArr.push(test[i]);
		}
	}

	for (let i = 0; i < test2.length; i++) {
		const index = test2[i].indexOf("w");
		if (index !== -1) {
			newArr2.push(test2[i].slice(index));
		} else {
			newArr2.push(test2[i]);
		}
	}

	for (let i = 0; i < newArr.length; i++) {
		if (
			!(
				newArr[i].includes("registration") ||
				newArr[i].includes("register") ||
				newArr[i].includes("request") ||
				!newArr[i].includes("@") ||
				!newArr[i].includes("habbo.nl")
			)
		) {
			filterArr.push(newArr[i]);
		}
	}

	for (let i = 0; i < newArr2.length; i++) {
		if (
			!(
				newArr2[i].includes("registration") ||
				newArr2[i].includes("register") ||
				newArr2[i].includes("request") ||
				!newArr2[i].includes("@")
			)
		) {
			filterArr2.push(newArr2[i]);
		}
	}

	const filtro = filterArr2.filter((item) => !filterArr.includes(item));

	const sortArr = [...filterArr].sort();
	const sortArr2 = [...filtro].sort();
	const lastArr = [];
	const lastArr2 = [];

	for (let i = 0; i < sortArr.length; i++) {
		if (sortArr[i] !== sortArr[i - 1]) {
			lastArr.push(sortArr[i]);
		}
	}

	for (let i = 0; i < sortArr2.length; i++) {
		if (sortArr2[i] !== sortArr2[i - 1]) {
			lastArr2.push(sortArr2[i]);
		}
	}

	const fs = require("fs");

	const filteredData = lastArr2.join("\n");

	const filePath = "email.txt";

	fs.writeFile(filePath, filteredData, (err) => {
		if (err) {
			console.error("not worked!", err);
		} else {
			console.log("Done");
		}
	});
	console.log(lastArr2);
};
console.log(filtrador(db, hihi));
