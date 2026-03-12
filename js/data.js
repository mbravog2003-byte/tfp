const libros = [
  {
  numero: 1,
  imgPortada: "1.webp",
  titulo: "Intermezzo",
  autoria: "Sally Rooney",
  fechaPublicacion: "2024",
  sinopsis: "After their father’s death, Peter and Ivan Koubek confront grief from opposite ends of adulthood—one a successful but emotionally entangled lawyer, the other a socially awkward chess prodigy. As both are drawn into complicated relationships that challenge their ideas of intimacy and responsibility, long-buried tensions surface. Precise and emotionally incisive, Rooney explores love, guilt, and the fragile structures holding family together."
},
{
  numero: 2,
  imgPortada: "2.webp",
  titulo: "Cleopatra and Frankenstein",
  autoria: "Coco Mellors",
  fechaPublicacion: "2022",
  sinopsis: "When twenty-four-year-old British painter Cleo marries Frank, a wealthy New Yorker nearly twenty years her senior, their impulsive romance quickly exposes deeper fractures. As addiction, ambition, and loneliness strain their marriage, the lives of those around them begin to unravel as well. Sharp and unflinching, this novel captures the disillusionment and intensity of modern love."
},
{
  numero: 3,
  imgPortada: "3.webp",
  titulo: "The Strength of the Few",
  autoria: "James Islington",
  fechaPublicacion: "2024",
  sinopsis: "In the Hierarchy, where willpower can alter reality and memory itself is political currency, fragile alliances begin to fracture. As buried truths emerge and power shifts threaten the established order, survival demands impossible choices. Expansive and strategically intricate, this epic fantasy deepens the moral and political stakes of its world."
},
{
  numero: 4,
  imgPortada: "4.webp",
  titulo: "The Memory Police",
  autoria: "Yoko Ogawa",
  fechaPublicacion: "1994",
  sinopsis: "On an unnamed island, objects disappear one by one—and with them, the memories they hold. Those who continue to remember are hunted by the Memory Police. As a novelist hides her editor, one of the few still capable of recall, the world steadily empties around them. Spare and haunting, this dystopian tale explores erasure, repression, and identity."
},
{
  numero: 5,
  imgPortada: "5.webp",
  titulo: "Babel",
  autoria: "R. F. Kuang",
  fechaPublicacion: "2022",
  sinopsis: "Robin Swift, a Cantonese orphan raised in England, enters Oxford’s Royal Institute of Translation, where magic is forged through the power of language. There he discovers that scholarship fuels British imperial expansion. Torn between belonging and resistance, Robin must decide where his loyalties lie. Erudite and devastating, Babel is a fierce critique of empire and complicity."
},
{
  numero: 6,
  imgPortada: "6.webp",
  titulo: "Wild Reverence",
  autoria: "Rebecca Ross",
  fechaPublicacion: "2023",
  sinopsis: "In luminous, meditative verse, Rebecca Ross explores longing, faith, and the sacred hush of the natural world. Her poems linger on transformation and connection, finding transcendence in small, quiet moments. Gentle yet resonant, this collection invites reflection on what binds us to the earth and to one another."
},
{
  numero: 7,
  imgPortada: "7.webp",
  titulo: "The Secret History",
  autoria: "Donna Tartt",
  fechaPublicacion: "1992",
  sinopsis: "At an elite Vermont college, Richard Papen becomes entangled with a charismatic group of classics students whose obsession with beauty and transcendence leads them toward murder. Narrated through the lens of guilt and inevitability, this modern classic dissects privilege, morality, and the seductive danger of intellectual elitism."
},
{
  numero: 8,
  imgPortada: "8.webp",
  titulo: "My Year Of Rest and Relaxation",
  autoria: "Ottessa Moshfegh",
  fechaPublicacion: "2018",
  sinopsis: "In pre-9/11 New York, a wealthy and disillusioned young woman decides to chemically induce a year-long hibernation, convinced it will reset her life. Guided by an inept psychiatrist and tethered to a toxic friendship, her retreat becomes both darkly comic and unsettling. A biting exploration of privilege, alienation, and emotional numbness."
},
{
  numero: 9,
  imgPortada: "9.webp",
  titulo: "The Devil Three Times",
  autoria: "Rickey Fayne",
  fechaPublicacion: "2023",
  sinopsis: "Across generations in the American South, a mysterious devil figure appears at pivotal moments in a Black family’s history. As faith, violence, and inherited trauma shape their lives, folklore and reality intertwine. Lyrical and unsettling, this novel examines the spiritual and historical burdens carried through bloodlines."
},
{
  numero: 10,
  imgPortada: "10.webp",
  titulo: "Just For The Summer",
  autoria: "Abby Jimenez",
  fechaPublicacion: "2024",
  sinopsis: "Justin and Emma share the same strange curse: everyone they date finds their soulmate immediately after. Convinced they can break the pattern, they agree to date just for the summer. What begins as a calculated plan soon deepens into something far more vulnerable. Warm and emotionally grounded, this romance balances humor with real stakes."
},
{
  numero: 11,
  imgPortada: "11.webp",
  titulo: "The Poet Empress",
  autoria: "Ilana Kurshan",
  fechaPublicacion: "2024",
  sinopsis: "Reimagining the life of a formidable historical woman, this novel traces how poetry becomes both refuge and instrument of influence. Navigating political limitations and personal sacrifice, she crafts a voice that endures beyond her era. Intimate and reflective, it is a meditation on authorship, resilience, and legacy."
},
{
  numero: 12,
  imgPortada: "12.webp",
  titulo: "Great Big Beautiful Life",
  autoria: "Emily Henry",
  fechaPublicacion: "2024",
  sinopsis: "Two rival writers with clashing creative philosophies are forced into collaboration, each guarding private ambitions and insecurities. As professional tension gives way to unexpected intimacy, they confront the lives they imagined versus the ones they inhabit. Effervescent and emotionally precise, this romance celebrates risk and reinvention."
},
{
  numero: 13,
  imgPortada: "13.webp",
  titulo: "Project Hail Mary",
  autoria: "Andy Weir",
  fechaPublicacion: "2021",
  sinopsis: "Ryland Grace awakens alone aboard a spacecraft with no memory of his mission. Gradually he learns that Earth faces extinction from a cosmic threat—and he is humanity’s last hope. Blending rigorous science, humor, and an unexpected alliance, this gripping adventure proves survival depends on ingenuity and trust."
},
{
  numero: 14,
  imgPortada: "25.webp",
  titulo: "We Free The Stars",
  autoria: "Hafsah Faizal",
  fechaPublicacion: "2021",
  sinopsis: "With darkness tightening its grip on Arawiya, Zafira and Nasir race to restore the Sisters’ magic and heal a fractured world. But rebellion demands sacrifice, and loyalty is tested by betrayal and grief. Lush and emotionally charged, this conclusion delivers hard-won redemption and hope."
},
{
  numero: 15,
  imgPortada: "15.webp",
  titulo: "Not Quite Dead Yet",
  autoria: "Holly Jackson",
  fechaPublicacion: "2024",
  sinopsis: "After surviving a brutal attack, Jet Mason refuses to let fear define her. Determined to uncover who tried to kill her, she digs into secrets that shake her small town to its core. Fast-paced and tightly plotted, this thriller delivers sharp twists and mounting tension."
},
{
  numero: 16,
  imgPortada: "16.webp",
  titulo: "Lessons In Chemistry",
  autoria: "Bonnie Garmus",
  fechaPublicacion: "2022",
  sinopsis: "Elizabeth Zott is a brilliant chemist sidelined by sexism in 1960s America. When she becomes the unlikely star of a television cooking show, she uses it to teach science, independence, and self-worth. Witty and empowering, this novel blends satire with heartfelt social commentary."
},
{
  numero: 17,
  imgPortada: "17.webp",
  titulo: "Crying in H Mart",
  autoria: "Michelle Zauner",
  fechaPublicacion: "2021",
  sinopsis: "After her mother’s death, Michelle Zauner turns to food and memory to reconnect with her Korean heritage. Through intimate reflections on family, culture, and loss, she traces grief in grocery aisles and kitchen rituals. Tender and piercingly honest, this memoir explores identity and belonging."
},
{
  numero: 18,
  imgPortada: "18.webp",
  titulo: "The Familiar",
  autoria: "Leigh Bardugo",
  fechaPublicacion: "2024",
  sinopsis: "In Golden Age Madrid, Luzia Cotado, a servant with a hidden magical gift, is thrust into a web of aristocratic ambition and suspicion. As her abilities draw both opportunity and danger, survival demands strategic alliances. Darkly atmospheric, this fantasy examines faith, class, and power."
},
{
  numero: 19,
  imgPortada: "19.webp",
  titulo: "One Golden Summer",
  autoria: "Carley Fortune",
  fechaPublicacion: "2024",
  sinopsis: "Returning to Barry’s Bay years after a formative summer, Alice reconnects with Charlie, the boy who once shaped her happiest memories. As old chemistry resurfaces, both must face who they were and who they’ve become. Nostalgic yet emotionally grounded, this romance lingers on timing and second chances."
},
{
  numero: 20,
  imgPortada: "20.webp",
  titulo: "Alchemy Of Secrets",
  autoria: "Stephanie Garber",
  fechaPublicacion: "2024",
  sinopsis: "When a young woman uncovers ties to a powerful alchemical legacy, she is drawn into a world of hidden bargains and dangerous truths. As alliances shift and deception deepens, destiny demands a cost. Lush and intricately woven, this fantasy blends enchantment with intrigue."
},
{
  numero: 21,
  imgPortada: "21.webp",
  titulo: "The Listeners",
  autoria: "Maggie Stiefvater",
  fechaPublicacion: "2024",
  sinopsis: "At a secluded luxury hotel built atop strange geological forces, guests begin experiencing intrusive thoughts that may not be their own. As paranoia spreads and buried secrets surface, something ancient stirs beneath the foundations. Atmospheric and psychologically charged, this novel explores perception and control."
},
{
  numero: 22,
  imgPortada: "22.webp",
  titulo: "Shy Girl",
  autoria: "Tess Sharpe",
  fechaPublicacion: "2024",
  sinopsis: "Often underestimated, a quiet teenage girl finds herself trapped in a volatile and dangerous situation. Forced to rely on instincts she never knew she possessed, she must outthink escalating threats. Taut and character-driven, this coming-of-age thriller centers resilience and survival."
},

  // --- book-page.html ---
  {
    numero: 23,
    imgPortada: "23.webp",
    titulo: "We Free The Stars",
    autoria: "Hafsah Faizal",
    fechaPublicacion: "2021",
    sinopsis: "The battle on Sharr is over. The dark forest has fallen. Altair may be captive, but Zafira, Nasir, and Kifah are bound for Sultan's Keep, determined to finish the plan he set in motion: restoring the hearts of the Sisters of Old to the minarets of each caliphate, and finally returning magic to all of Arawiya. Lush and striking, hopeful and devastating, the masterful conclusion to the Sands of Arawiya duology."
  },
  {
  numero: 24,
  imgPortada: "26.webp",
  titulo: "A Tempest of Tea",
  autoria: "Hafsah Faizal",
  fechaPublicacion: "2024",
  sinopsis: "By day, Arthie Casimir runs White Roaring’s most prestigious tearoom. By night, it becomes an illicit bloodhouse serving the vampires society pretends not to need. When her establishment is threatened, Arthie strikes a dangerous bargain and assembles a crew of outcasts to infiltrate the glittering vampire elite known as the Athereum. But betrayal lurks within her ranks, and what begins as a heist soon unravels into a conspiracy far larger than her self-made empire. Dark, sharp, and romantic, this fantasy blends vengeance, found family, and high-stakes intrigue."
},
{
  numero: 25,
  imgPortada: "27.webp",
  titulo: "A Steeping of Blood",
  autoria: "Hafsah Faizal",
  fechaPublicacion: "2024",
  sinopsis: "As tensions escalate between warring powers, a hidden order manipulates events from the shadows, weaving bloodshed into prophecy. Bound by secrets and sharpened by betrayal, unlikely allies must confront the cost of vengeance. Dark and atmospheric, this installment deepens a world where ambition and sacrifice walk hand in hand."
},
{
  numero: 26,
  imgPortada: "28.webp",
  titulo: "The Wishless Ones",
  autoria: "Hafsah Faizal",
  fechaPublicacion: "2024",
  sinopsis: "In a kingdom where wishes are currency and magic extracts a brutal toll, those born without the power to bargain are cast aside. When one such outcast uncovers a truth that could unravel the system itself, rebellion sparks from the margins. Fierce and immersive, this fantasy interrogates power, fate, and the cost of desire."
},
{
  numero: 27,
  imgPortada: "29.webp",
  titulo: "The Knight And The Moth",
  autoria: "Rachel Gillig",
  fechaPublicacion: "2024",
  sinopsis: "In a realm shadowed by prophecy and divine judgment, a knight sworn to duty crosses paths with a woman marked by secrets and survival. As faith collides with forbidden attraction, both must question the systems they serve. Lyrical and gothic in tone, this fantasy explores devotion, identity, and dangerous love."
},
{
  numero: 28,
  imgPortada: "30.webp",
  titulo: "Divine Rivals",
  autoria: "Rebecca Ross",
  fechaPublicacion: "2023",
  sinopsis: "When rival journalists Iris Winnow and Roman Kitt begin exchanging anonymous letters through a magical typewriter, their sharp professional competition gives way to unexpected intimacy. But as gods wage war and the front lines draw closer, words may not be enough to keep them safe. Tender and quietly epic, this fantasy romance intertwines love and conflict."
},
{
  numero: 29,
  imgPortada: "31.webp",
  titulo: "The Wrath And The Dawn",
  autoria: "Renée Ahdieh",
  fechaPublicacion: "2015",
  sinopsis: "Each dawn in Khorasan brings death: the Caliph takes a new bride every night, and by morning she is gone. When Shahrzad volunteers to marry him in order to avenge her best friend, she enters the palace armed with stories—and a plan to survive. Lush and suspenseful, this reimagining of One Thousand and One Nights weaves romance with revenge."
},
{
  numero: 30,
  imgPortada: "32.webp",
  titulo: "The Raven Scholar",
  autoria: "Antonia Hodgson",
  fechaPublicacion: "2025",
  sinopsis: "In the empire of Orrun, seven elite contenders gather to compete for the throne as Emperor Bersun’s long reign comes to an end. But when one candidate is murdered, the trials turn deadly. Neema Kraa, the empire’s brilliant and unconventional High Scholar, must unravel a conspiracy rooted in generations of secrets—while competing against ruthless rivals who would see her fall. Playful yet razor-sharp, this fantasy blends imperial intrigue, dark ambition, and a scholar forced to outwit warriors to survive."
},
{
  numero: 31,
  imgPortada: "33.webp",
  titulo: "A Song To Drown Rivers",
  autoria: "Ann Liang",
  fechaPublicacion: "2024",
  sinopsis: "Inspired by the legend of Xishi, this historical fantasy follows a young woman chosen for her beauty and sent to infiltrate an enemy court. As she becomes a pawn in a strategy to topple a kingdom, loyalty and personal desire begin to clash. Sweeping and emotionally resonant, the novel explores sacrifice, strategy, and the quiet strength behind legend."
},
{
  numero: 32,
  imgPortada: "34.webp",
  titulo: "These Violent Delights",
  autoria: "Chloe Gong",
  fechaPublicacion: "2020",
  sinopsis: "In 1920s Shanghai, rival gangs rule the streets—until a mysterious contagion drives victims to madness. Juliette Cai and Roma Montagov, heirs to opposing factions and former lovers, must form an uneasy alliance to uncover the truth. Gritty and atmospheric, this Romeo and Juliet retelling pulses with political tension and doomed romance."
},
// --- profile.html (Want to read) ---
{
  numero: 33,
  imgPortada: "36.webp",
  titulo: "Red City",
  autoria: "Marie Lu",
  fechaPublicacion: "2026",
  sinopsis: "Red City is a dark contemporary fantasy set in an alternate Los Angeles where rival crime syndicates control alchemy, a hidden craft used to produce a drug that \"perfects\" its users. Childhood friends Sam and Ari become enemies within opposing factions as a fragile peace collapses, forcing them to confront the personal cost of ambition and power in a city where transformation comes at a deadly price."
},
{
  numero: 34,
  imgPortada: "37.webp",
  titulo: "Gifted & Talented",
  autoria: "Olivie Blake",
  fechaPublicacion: "2025",
  sinopsis: "From the New York Times bestselling author of The Atlas Six comes the story of three siblings who, upon the death of their father, are forced to reckon with their long-festering rivalries, dangerous abilities, and the crushing weight of all their unrealized adolescent potential."
},
{
  numero: 35,
  imgPortada: "38.webp",
  titulo: "Orbital",
  autoria: "Samantha Harvey",
  fechaPublicacion: "2026",
  sinopsis: "A slender novel of epic power and the winner of the Booker Prize 2024, Orbital deftly snapshots one day in the lives of six women and men traveling through space."
},
{
  numero: 58,
  imgPortada: "58.png",
  titulo: "The Poppy War",
  autoria: "R. F. Kuang",
  fechaPublicacion: "2018",
  sinopsis: "When war orphan Rin earns a place at the prestigious Sinegard Academy, she discovers she possesses a rare and dangerous shamanic power. As conflict erupts between the Nikara Empire and the Federation of Mugen, Rin is drawn into a brutal war that will test the limits of her strength, morality, and humanity."
},
{
  numero: 59,
  imgPortada: "59.png",
  titulo: "The Dragon Republic",
  autoria: "R. F. Kuang",
  fechaPublicacion: "2019",
  sinopsis: "After surviving the horrors of war and unleashing catastrophic power, Rin seeks revenge against the empress who betrayed her. Aligning with a powerful warlord, she becomes entangled in political intrigue and shifting alliances. But as she struggles with the destructive force of the Phoenix within her, Rin must decide whether victory is worth the cost."
},
{
  numero: 60,
  imgPortada: "60.png",
  titulo: "The Burning God",
  autoria: "R. F. Kuang",
  fechaPublicacion: "2020",
  sinopsis: "With the empire collapsing and enemies closing in from all sides, Rin leads a desperate campaign to unify the fractured land. As she leans further into the Phoenix's devastating power, she risks losing herself entirely. The final chapter of the trilogy explores vengeance, sacrifice, and the terrible cost of absolute power."
},
{
  numero: 61,
  imgPortada: "61.png",
  titulo: "Yellowface",
  autoria: "R. F. Kuang",
  fechaPublicacion: "2023",
  sinopsis: "After the sudden death of her literary rival Athena Liu, struggling writer June Hayward steals Athena’s unfinished manuscript and publishes it as her own under the ambiguous name Juniper Song. The book becomes a massive success—but the truth refuses to stay buried. Sharp and satirical, Yellowface dissects publishing, cultural appropriation, and the machinery of fame."
},
{
  numero: 62,
  imgPortada: "62.png",
  titulo: "Katabasis",
  autoria: "R. F. Kuang",
  fechaPublicacion: "2025",
  sinopsis: "Two rival graduate students must journey into Hell to rescue their brilliant but reckless professor after a magical experiment goes catastrophically wrong. As they descend through a surreal and dangerous underworld, their academic rivalry gives way to uneasy cooperation. Darkly imaginative and intellectually playful, Katabasis blends myth, philosophy, and rivalry in a story about ambition and the cost of knowledge."
}
];
