import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importuj CommonModule dla *ngFor
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Option {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  expanded: boolean;
}

@Component({
  selector: 'app-character-selection',
  imports: [CommonModule],
  templateUrl: './character-selection.component.html',
  styleUrl: './character-selection.component.css'
})
export class CharacterSelectionComponent {
  selectedOptionId: number | null = null;
  options: Option[] = [
    { id: 1, name: 'ROCKERBOYS - REBEL ROCKERS WHO USE MUSIC AND REVOLT TO FIGHT AUTHORITY', image: 'images/RockerBoy.jpg', expanded: false,
      description:
       "If you live to rock, this is where you belong. Rockerboys are the street poets, social consciences and rebels of the 2000\'s. With the advent of digital porta-studios and garage laser disk mastering, every Rocker with a message can take it to the street; putitin the record stores, bounce it off the comsats.\
Sometimes, this message isn’t something the Corporations or the Government wants to hear. Sometimes what you say is going to get right in the faces of the powerful people who really run this world. But you don’t care, because as a Rockerboy, you know it’s your\
place to challenge authority, whether in straight-out protest songs that tell it like it is, or just by playing kick-ass rock n\’ roll to get the people away from the TV sets and into the Streets. You have a proud history as a Rockerboy Dylan, Springsteen, Who, Elvis, the Stones the legions of hardrock heroes who told the truth with screaming guitars and gut-honest lyrics.\
As a Rockerboy, you have the power to get the people up to lead, inspire and inform. Asong from you can give the timid courage, the weak stren-gth, and the blind vision. Rockerboy legends have led armies against Corporations and Governments. Rockerboy songs have exposed corruption, brought down dictators. It’s a lot of power for a guy doing gigs every night in another city. But you can handle it. After all you came to play!,",
  shortDescription: "I\'ll always knew what I had to do. It was really obvious. There were these scum out there who were messing with the world. They were killing people, raping the land, and lying In our faces when we caught ‘em.\ \"So I decided I had to put the heat on ‘em and make 'em sweat. That's why I became a Rockerboy.\
                          \"Music always gets hammered down to the Three A's. Axe, Attitude and Audience. Me, I had an Axe and an Attitude. All | had to do was get the third one...\" \n Kerry Eurodyne, Rockerboy.",      
     },
    { id: 2, name: 'SOLOS - HIRED ASSASSINS, BODYGUARDS, KILLERS, SOLDIERS', 
      shortDescription : "\"After I got out of the Army, I had this problem. I was good at what I did, but no one was hiring. I mean, what do you do when you're a highly trained killer with a background in demolitions? Read the want ads?\"\n \
      \"After a few 20. months on the Street, I got into a dustdown with a local Booster lord. I flatlined him and went back to my drink. Within ten minutes, the recruiter from Militech came up to me and dropped a business card ...\" \
      \"Now I'm a Company man. The pay's good, the Work steady, and they pay for my spare parts. So far, I'm still alive. So far, so good.\" \
      Morgan Blackhand.",
      description: 'You were re-born with a gunin yourhand the flesh and blood hand, not the metallic weapons factory that covers most of your other arm. Whether as a freelance guard and killerfor-hire, or as one of the Corporate cybersoldiers that enforce business deals and the Company\’s “black operations”, you\'re one of the elite fighting machines of the Cyberpunk world.\' \
Most Solos have put in military time, either in a Corporate army or in one of the Government’s continual “police actions” around the world. As the battle damage piles up, you start to rely more and more upon hardware cyberlimbs for weapons and armor, bio-program chips to increase your reflexes and awareness, combat drugs to give you that edge over your opponents. When you\'re the best of the best, you might even leave the ranks of Corporate samurai and go ronin  freelancing your lethal talents as killer, bodyguard or enforcer to whoever can pay your very high fees.\
Sounds good? There’s a price a heavy one. You\'ve lost so much of your original meat body that you’re almost a machine. Your killing reflexes are so jacked up that you have to restrain yourself from going beserk at any moment. Years of combat drugs taken to keep the edge have given you terrifying addictions. You can’t trust anyone your mother, your friends, your lovers no one. One night you sleep in a penthouse condo in the City the next in a filthy alley on the Street. But that\’s the price of being the best.\
And you are the best. You’re a Solo',
       image: 'images/Solos.jpg', expanded: false },

    { id: 3, name: 'CYBERNETIC COMPUTER HACKERS',
       shortDescription : '"You guys who live in Realspace;you move so slow. Me, I like Netspace. It moves fast. You don\'t get old, you don\'t get slow and sloppy. You Just leave the meat behind and go screamin."\n \
"First system I ever hit, I think they had some weeflerunner playin\' Sysop for them. I burned in, jolted the guy with a borrowed Hellbolt,  and did the major plunder action all over the Data Fortress."\n \
"Somewhere out there is a guy with half his forebrain burned out. I wonder if they ever found the body. I wonder if they\'ll find mine the same way ... "\n \
-Spider Murphy',
        description: 'At three, your parents bought you an old Apple IV GS with a Radius 241 wall screen, and your life was changed. By fifth grade, you\'d already mastered everything the school computer literacy lab could throw at you  you were already using Cand META-LINGUA to crack into the district’s mainframe and change your grades. When you were thirteen, you shifted enough funds out of unprotected TransAmerican Bank accounts to finance your first neural interface plugs.\
        Now, nothing can stop you. With your direct mental link to the computer, you can plunge headfirst into the dizzying data-winds of the Net; the worldwide telecommunications system that joins humanity together. As an electronic wraith, you are the ultimate “hacker”, your brain wired into special modems and computer links. You slip into the “hardest” mainframe systems with ease. Your defense and offense programs are arrayed at a touch of your mental fingertips a quick jolt of Demon or Vampire and the data fortresses fall. EBM. ITT. SonyMatsushita-Ford. You\'ve tackled them all, buying, trading and selling their deepest secrets at will.\n \
        Sometimes you uncover important things  Corporate treachery or deadly secrets. But that’s not why you Netrun. You live for the new program, the next satellite downlink  the next piece of hot data that comes your way. It’s only a matter of time, you think  every year, the counter intrustion programs get better, the Artificial Intelligences smarter. Sooner or later, a faster program or programmer\'s going to catch up; reach out with electronic fingers through your interface plugs, and stop your heart. But time’s on your side, and until the ride runs out, you\'ll be there, barebrained and headfirst in the Net.',
       image: 'images/Netrunners.jpg', expanded: false },

    { id: 4, name: 'TECHIES - RENEGADE MECHANICS AND DOCTORS',
       shortDescription : '"So you want me to build a delay switch into the thing? And you don\'t care about explosion radius? \n \
"No problem. At least you gota simple job. Last guy in here, he wanted me to build him a cyberhand that had a built-in _ aw, frack, you don\'t wanna know. People want the weirdest stuff these days...\n \
"I hear with the new cyberwear they\'re coming up with in Chiba, you\'re gonna be able to cram your body with more options than a frackin\' Mercedes aerodyne...No problem. If you can get parts, I can fix it. Count on it, chombatta." \n \
Mister Ice Head of Design Technix , Inc.',
       description: 'You can’t leave anything alone if it sits near you for more than five minutes, you\'ve disassembled it and made itinto something new. You\'ve always got at least two screwdrivers and a wrench in your pockets. Computer down? No problem. Hydrogen burner out in your Metrocar? No problem. Can’‘t get the video to run or your interface plugs feedbacking? No problem. \n \
You make your living building, fixing and modifying a crucial occupation in a technological world where no one person really knows how half the stuff works. You can make some good bucks fixing everyday stuff, but for the serious money, you need to tackle the big jobs. Illegal weapons. Illegal or stolen cybertech. Corporate espionage and counterespionage gear for the big boys’ “black operations”. Neat little gadgets like thermite bombs and and hunter-killer robots for the occasional “termination.”\n \
If you’re any good, you’re making a lot of money. And that money goes into new gadgets, hardware and information. You\'ll buy almost any new thing because it might have a dozen side applications you can use. Of course, your black market work isn’t just making you friends it’s also racking you up an impressive number of enemies as well; people who\'ve run into your handiwork and resented it. So you\'ll invest alot in defense systems and, if really pushed to the wall, call in a few markers on a Solo or two. \n \
Your cousin down the street is just like you, but he’s a Medtechie. In a world where half of medicine is related to mechanics, it makes sense. He can do a black market surgical technique faster than you can fix a toaster, and the Solos are always running to him to patch up wounds or install new illegal cybernetics. He’s got a lot of the same problems you have, but he’s hoping his new job with Trauma Team Inc.™ will loosen things up. You hope he’s right. You may be needing his services sooner than you think. ',
       image: 'images/Techies.jpg', expanded: false },

    { id: 5, name: 'MEDIAS - NEWSMEN AND REPORTERS WHO GO TO THE WALL FOR THE TRUTH',
       shortDescription : '"Okay, so it\'s dangerous. Look, I\'ll tell you something. When I was a kid, I used to watch those reporters on the TV news. They wore those chill trenchcoats and were always broadcasting from some exotic place like Mozambique or Saigon. They went right into the Central American warzones with the \n \
cybergrunts, and they got the story even when the shooting was maximally fierce. \n \
"That\'s the part I like; the danger." \n \
Lyle Mcclellan, \n \
Network 54',
       description: 'They’re bending the truth out there. And you’re going to stop them. Someone has to do it. The Corporations rule the world. They dump toxics, destabilize economies and commit murder with equal impunity. The Government won’t stop them they own the Government. The only thing between the Corporations and world domination is the Media. And that’s you. \n \
You\'ve got a videocam and a press pass and you\'re not afraid to use them. You\'re a national figure, seen nightly on a million TV sets worldwide. You\'ve gotfans, contracts and your own Corporation backing you. They can’t make you disappear. When you dig down for the dirt and slime the corrupt officials and Corporate lapdogs try to cover up, you can dig deep. The next morning, you can put the details of their crimes all over the screamsheets and vidscreens. Then the Government has to act. \n \
A week ago, you followed a hot lead and discovered a medical corporation dumping illegal drugs on the Street. This week, you\'re uncovering a secret Corporate war in South America a war with jets, bombs, and cybertroops that’s killed almost seven thousand innocent people. Each new story you get to the air is one more blow for freedom and justice. Not to mention ratings. \n \
it isn’t easy. They\'ve tried to pressure your Mediacorp dozens of times. You\'ve had stories suppressed once, Corporate pressure forced them to cancel your news show. Each time, you went to the top, backed by your news director and your crew, and fought to get the story out. Three or four times, they tried to kill you that’s why your backup’s a crack Solo bodyguard and you\'ve got one of the top ‘Runners in the business digging through the Net to back your stories. You have to be good, or else. \n \
Your ‘Runner\'s just phoned in with a hot lead. He’s found a line on twenty tons of illegal weapons being shifted to a port in Bolivia possibly nuclear. You grab your gear and flag your backup. You\'re going to break those bastards. \n \
This time, for sure',
        image: 'images/Medias.jpg', expanded: false },

    { id: 6, name: 'COPS - MAXIMUM LAWMEN ON MEAN 21ST CENTURY STREETS', 
      shortDescription : '"Drop it, punk. | fie: f don\'t wanna hear Nag i17~ your life story, and c Idon\'t care what   Se Society did to you. : oS YY } I just wanna see wz, Ly that gun hit the floor. Now... \n \
Before I give you an extra nostril..."\n \
-Set, Max Hammerman NCPD',
       description: 'In the old days, they would have called you a yuppie a hard driven, fast-track MBA on his way up the Corporate ladder. Sure, it’s selling your soul to the Company, but face it; the Corporations rule the Cyberpunk world. They control governments, markets, nations, armies you name it. And you know that whoever controls the Corporations controls everything else. \n \
Right now, your life as a junior executive is anything but easy. There are guys underneath you who\'d kill for a shot at your job. There are guys over you who\'d kill to keep you out of their jobs. And they’re not kidding about the killing every up and comer in the Corporation has his own crew of Solos and Netrunners to cover his pet projects. Sabotage? Constantly. Bribery? Routine. Blackmail? Common. Promotion by assassination? Always a possibilty. The stakes are that high one slip and you could be out on the Street with the rest of the trash. Or dead. \n \
And the projects your supervisors give you! Some are pretty straightforward; design a new productivity schedule for the Corporation’s medical subsidiary. Some are pretty raw send a “black operations” team into the City to spread a designer plague so the Marketing team can clean up selling the vaccine. Last week, you led a mixed team of Solos, ‘Runners and Techies on aheadhunting run to kidnap a researcher from a rival company. The week before, your project was to steal plans for a new suborbital shuttle from the EuroSpace Agency (so that the Aerospace Division could copy the design and sell it to the Soviets).\n \
You told yourself you joined the Corporation to make it a better place work from the inside, you said. But now you\'re not so sure. Your ideals are a little tarnished and things are getting pretty bleak. But you can’t worry about ethics now. You\'ve got a report due in an hour, and it looks like that guy in Sales is planning to ice your database for good. You\'re gonna ice him first.',
        image: 'images/Cops.jpg', expanded: false },

    { id: 7, name: 'CORPORATES - SLICK BUSINESS RAIDERS AND MULTI MILLIONAIRES',
       shortDescription : '"Money. Yeah, 1 _ ON oN a got money: anew : BMW aerodyne, _and a penthouse flat in the Corporate Zone. All the money ain\'t worth frack. You play this _ game for power. The power to get things done; to make the big decisions; to affect things. You make a phone call, and the next thing you know, you\'re telling the president of some bushleague Euronation that he\'d better play it your way, or he\'s history. \n \
"That\'s why you play. That\'s why I\'m with the Company." \n \
 An Unidentified Corporate', 
       description: 'In the old days, they would have called you a yuppie a hard driven, fast-track MBA on his way up the Corporate ladder. Sure, it’s selling your soul to the Company, but face it; the Corporations rule the Cyberpunk world. They control governments, markets, nations, armies you name it. And you know that whoever controls the Corporations controls everything else. \n \
Right now, your life as a junior executive is anything but easy. There are guys underneath you who\'d kill for a shot at your job. There are guys over you who\'d kill to keep you out of their jobs. And they’re not kidding about the killing every up and comer in the Corporation has his own crew of Solos and Netrunners to cover his pet projects. Sabotage? Constantly. Bribery? Routine. Blackmail? Common. Promotion by assassination? Always a possibilty. The stakes are that high one slip and you could be out on the Street with the rest of the trash. Or dead. \n \
And the projects your supervisors give you! Some are pretty straightforward; design a new productivity schedule for the Corporation’s medical subsidiary. Some are pretty raw send a “black operations” team into the City to spread a designer plague so the Marketing team can clean up selling the vaccine. Last week, you led a mixed team of Solos, ‘Runners and Techies on aheadhunting run to kidnap a researcher from a rival company. The week before, your project was to steal plans for a new suborbital shuttle from the EuroSpace Agency (so that the Aerospace Division could copy the design and sell it to the Soviets). \n \
You told yourself you joined the Corporation to make it a better place work from the inside, you said. But now you\'re not so sure. Your ideals are a little tarnished and things are getting pretty bleak. But you can’t worry about ethics now. You\'ve got a report due in an hour, and it looks like that guy in Sales is planning to ice your database for good. You\'re gonna ice him first.', 
       image: 'images/Corporates.jpg', expanded: false },

    { id: 8, name: 'FIXERS - DEAL MAKERS, SMUGGLERS, ORGANIZERS AND INFORMATION BROKERS',
       shortDescription : '"Don\'t give me this "Robin Hood" stuff. I\'m doin\' a job, no more. I give people what they want, an\' they pay me out. \n \
"Okay, so maybe I even a few scores here and there, but that\'s good for business. You make a friend they\'ll take you in when the Street\'s too hot, and they\'ll pass you a few bits of data when you  call in the markers. But that\'s business. \n \
"I got a slogan ... "How much you pay me?" \n \
-Phil "Nacho" \n \
Hernandez \n \
Fixer', 
       description: 'You realized fast that you weren\'t ever going to get into a Corporate job. And you didn’t think you were tough enough or crazy enough to be a Solo either. But as a small time punk, you knew you had a knack for figuring out what other people wanted, and how to getit for them. Fora price, of course. \n \
Now your deals have moved past the nickleand-dime stuff into the big time. Maybe you move illegal weapons over the border. Or steal and resell medical supplies from the Corporations. Perhaps you’re a skill broker acting as an agent for high priced Solos and ‘Runners, or even hiring a whole Nomad pack to back aclient’s contracts. You buy and sell favors like an old-style Mafia godfather. You have connections into all kinds of businesses, deals and political groups. You don’t do this directly, of course no, you use your contacts and allies as part of a vast web of intrigue and coersion. If there’s a hot nightclub in the City, you’ve boughtinto it. If there are new military-class weapons on the Street, you smuggled ‘em in. If there’s a Corporate war going down, you\'re negotiating between sides with an eye on the main chance. \n \
But you\'re not entirely in it for the bucks. If someone needs to get the heat off, you\'ll hide them. You get people housing when there isn’t any, and you bring in food when the neighborhoods are blockaded. Maybe you do it because you know they\'ll owe you later, but you’re not sure. You’re one part Robin Hood and two parts Al Capone. Back in the 90\'s, they would have called you a crimelord. But this is the fragmented, nasty, deadly 2020s. Now they call you a Fixer.',
        image: 'images/Fixers.jpg', expanded: false },

    { id: 9, name: 'NOMADS - ROAD WARRIORS AND GYPSIES WHO ROAM THE HIGHWAYS',
       shortDescription : '"Guns. Guns and cyberbikes. That\'s how we hold the line. We don\'t have any home except the Caravan. We don\'t have any rights except what we take. We get run   ‘ out of town by the Y oT cops; we get , raided by the eas roadwarrior packs, and we : survive because we\'ve got guns and bikes... \n \
"There\'s kids, old f men and women  s families here. This ain\'t no boostergang. These people are my family." \n \
Nomad Santiago',
        description: 'They drove your family off the Farm tenyearsago. The Corporations rolled in, took over the land, and put rent-acops all over the place. It wasn’t the first time it’d happened; it wouldn\'t be the last. Gradually, your family fell in with a bunch of other homeless families, and they met another group...until you’d created a Nomad pack of nearly two hundred members. \n \
Now, crammed into a huge, ragtag fleet of cars, vans, buses and RV’s, your Nomad pack roams the freeways. You look for supplies, odd jobs and spare parts in a world where society has fragmented. The pack is your home it has teachers, Med Techs, leaders, and mechanics it’s virtually a town on wheels in which everyone is related by marriage or kinship. Sometimes the Pack pulls into a town just to fuel up or get grub. Other times, it swings south to follow the harvest; you pick crops in trade for cash or food. Less law abiding Packs are like mobile armies, terrorizing cities and hiring out as muscle in Corporate wars. For obvious reasons, the cops don’t like Nomads. But it doesn’t matter your vehicles are usually well armored and bristling with stolen weapons; mini guns, rocketlaunchers and the like. Every kid knows how to use a rifle, and everyone packsa knife. Being homeless in the 2000\'s isn’t easy. \n \
The most visible members of the Pack are the Scouts leather armored riders on bikes or in fast muscle cars, who protect the convoy from attacks and hunt up safe campsites. As a Scout, you’re on the lookout for trouble, and you usually can find enough of it, with rival Nomad Packs, the Law, and the Corporates all after you. Like a modern day cowboy, you ride the hard trail. You\'ve gota gun, a bike and that’s all you need. You\'re a Nomad.',
         image: 'images/Nomads.jpg', expanded: false }
  ];

 // constructor(private sanitizer: DomSanitizer) {}

  // Method to sanitize and inject HTML (for line breaks)
  //getSanitizedShortDescription(description: string): SafeHtml {
   // const formattedDescription = description.replace(/\n/g, '<br>');
  //  return this.sanitizer.bypassSecurityTrustHtml(formattedDescription);
  //}

  toggleDescription(option: Option) {
    option.expanded = !option.expanded;
  }

  selectOption(optionId: number) {
    this.selectedOptionId = optionId;
  }

  confirmSelection() {
    if (this.selectedOptionId !== null) {
      alert(`Wybrano opcję ${this.selectedOptionId}`);
    } else {
      alert('Proszę wybrać opcję przed potwierdzeniem');
    }
  }
}
