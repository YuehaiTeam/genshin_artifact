import character from "../character/en"
import artifact from "../artifact/en"
import { default as weapon, effect as weaponEffect } from "../weapon/en"
import config from "../config/en"

export default {
    webName: "MonaUranai",
    intro: {
        opensource: "Open source",
        opensourceMonaDescription: "- Frontend<br>- Mona DSL<br>- DSL Book",
        opensourceYasDescription: "- Yas scanner",

        useCase1: "Reactive damage calculator/Single Character Artifact Optimization",
        useCase1Description: "- Using advanced algorithm to optimize artifacts, to get maximum damage and more<br>- reactive calculator",
        useCase2: "Team artifacts optimization",
        useCase2Description: "Optimize a team of characters without artifacts conflict",
        useCase3: "Artifact potential",
        useCase3Description: "Potential is the expected score an artifact can achieve when upgraded to lvl20, which can be used to filter good artifacts",
        useCase4: "Artifact scan",
        useCase4Description: "Export your artifacts easily",

        feedback: "Feedback",
        fbGithubIssue: "Github Issue",
        fbIssueDescription: "Create an issue on github",
        // fbQQ: "QQ group",
        // fbQQDescription: "Give feed backs （群号：801106595）",
        // fbNGA: "NGA讨论帖",
        // fbNGADescription: "在NGA进行反馈"
    },
    nav: {
        nav: "Navigation",
        home: "Home",
        repo: "My Repo",
        artifact: "Artifact",
        kumi: "Artifact Group",
        preset: "Preset",
        compute: "Computation",
        calculate: "Calculator",
        teamOptimize: "Team Optimize",
        potential: "Artifact Potential",
        monaDB: "Mona DB",
        other: "Other",
        playground: "Playground",
        about: "About",
        help: "Help",
        exportTool: "Export Tools",
        link: "Other Links",
        setup: "Settings",
    },
    misc: {
        character: "Character",
        mainStat: "Main Stat",
        subStat: "Sub Stat",
        any: "any",
        copy: "Copy",
        "import": "Import",
        "export": "Export",
        cancel: "Cancel",
        confirm: "Confirm",
        artifact: "Artifact",
        clear: "Clear",
        recommend: "Recommend",
        total: "Total",
        scan: "Scan",
        artifactSet: "Artifact set",
        hint: "Hint",
        lock: "Lock",
        unlock: "Unlock",
        del: "Delete",
        edit: "Edit",
        rename: "Rename",
        search: "Search",
        calculator: "Calculator",
        preset: "Preset",
        artSet: "Artifact Set",
        artSlot: "Artifact Slot",
        quality: "Quality",
        lvl: "Lvl",
        random: "Random",
        cont: "Continue",
        flower: "Flower of Life",
        Flower: "Flower of Life",
        feather: "Plume of Death",
        Feather: "Plume of Death",
        sand: "Sands of Eon",
        Sand: "Sands of Eon",
        cup: "Goblet of Eonothem",
        Goblet: "Goblet of Eonothem",
        head: "circlet of Logos",
        Head: "circlet of Logos",
        algo: "Algorithm",
        skill: "Skill",
        conste: "Constellation",
        weapon: "Weapon",
        refine: "Refine",
        tf: "Target Function",
        code: "Code",
        charSpecific: "Character Specific",
        general: "General",
        dmg: "DMG",
        type1: "Type",
        art4: "Set4: ",
        stat: "Stat",
        value: "Value",
        stat1: "Valuable Stat", // todo
        rollCount: "Roll Count",
        selected: "Selected",
        panel: "Stats",
        lang: "Language",
    },
    stat: {
        cureEffect: "Healing Bonus",
        criticalDamage: "Crit DMG",
        critical: "Crit Rate",
        attackStatic: "ATK",
        attackPercentage: "ATK%",
        elementalMastery: "Elemental Mastery",
        recharge: "Energy Recharge",
        lifePercentage: "HP%",
        defendPercentage: "DEF%",
        lifeStatic: "HP",
        defendStatic: "DEF",
        thunderBonus: "Electro DMG Bonus",
        fireBonus: "Pyro DMG Bonus",
        waterBonus: "Hydro DMG Bonus",
        iceBonus: "Cryo DMG Bonus",
        windBonus: "Anemo DMG Bonus",
        rockBonus: "Geo DMG Bonus",
        dendroBonus: "Dendro DMG Bonus",
        physicalBonus: "Physical DMG Bonus",
        shield: "Shield Strength",
        base: "Base Stats",
        advanced: "Advanced Stats",
        ele: "Elemental Type",
    },
    character,
    artifact,
    weapon,
    weaponEffect,
    config,
    ele: {
        Pyro: "Pyro",
        Cryo: "Cryo",
        Hydro: "Hydro",
        Electro: "Electro",
        Anemo: "Anemo",
        Dendro: "Dendro",
        Geo: "Geo",
        Physical: "Physical",
    },
    artPage: {
        shareDesc: "Use share link to import artifacts, expires in 1 day",
        deleteUnseen: "delete unseen artifacts",
        edit: "edit",
        recommend: "recommend",
        unlockAll: "unlock all",
        exportMona: "export Mona JSON",
        shareLink: "share link",
        confirmClear: "continue to clear? Will also clear artifact sets",
        monaJSON: "Mona JSON",
        show16: "Show only lvl > 16",
        copied: "Copied!",
        creating: "Creating",
        createDesc: "Mona is creating share link",
        wrongFormat: "Wrong format",
        importing: "Importing...",
        msg1: "Add a calculation preset to use this",
    },
    kumiPage: {
        selectArt: "Select Artifact",
        newFolder: "New Folder",
        newKumi: "New Artifact Group",
        deleteFolder: "Delete Folder",
        enterFolder: "Please enter new folder name",
        renameFolder: "Rename Folder",
        enterKumi: "Please enter new group name",
        renameKumi: "Rename Artifact Group"
    },
    presetPage: {
        exportAll: "Export All",
        go: "Please go to",
        toCalc: "page to add new presets",
        wrongFormat: "Wrong format"
    },
    calcPage: {
        selectArt: "Select Artifact",
        dmgComp: "Damage Composition",
        selectBuff: "Select BUFF",
        setupCalc: "Computation Setup",
        algoDesc: "A*：Recommend<br>Heuristic Cutoff: Not ensure optimal result, but faster<br>Naive: Do not use",
        plzSetConst: "Please constraint artifact set or main stats, or it might be very time consuming, and leads to timeout",
        aStar: "A*",
        heuristic: "Heuristic Cutoff",
        naive: "Naive",
        constSet: "Constraint Artifact Set",
        constMain: "Constraint Main Stats",
        constMin: "Constraint Min Value",
        filKumi: "Filter Artifact Group",
        artAnalysis: "Artifacts Analysis",
        statCurve: "Stats Gain Curve",
        selectKumi: "Select Artifact Group",
        setupEnemy: "Enemy Setup",
        setupArt: "Artifact Effect Setup",
        artMode: "Artifact Effect Mode",
        modeAuto: "Auto",
        modeCustom: "Custom",
        artEffect: "Artifact Effects(Only works in custom mode)",
        start: "Optimize",
        newPreset: "New Preset",
        savePreset: "Save Preset",
        saveAsPreset: "Save as Preset",
        tfNormal: "Normal",
        beta: "BETA",
        statAnalysis: "Stat Analysis",
        saveKumi: "Save as Artifact Group",
        useKumi: "Use Artifact Group",
        effect4: "Set4 Effect:",
        dmg: "DMG Calculation",
        detail: "Detail",
        dmg2: "Transformative DMG",
        panel: "Panel",
        selectDir: "Select Dir",
        name: "Name",
        enterName: "Enter Name",
        bonus1: "1 Roll Gain", // todo
        statCount: "Roll Count", // todo
        gain: "Relative Gain",
    },
    tfName: {
        MaxATK: "Max ATK",
        MaxDEF: "Max DEF",
        MaxHP: "Max HP",
        MaxEM: "Max EM",
        PyroDamage: "Pyro DMG",
        CryoDamage: "Cryo DMG",
        HydroDamage: "Hydro DMG",
        ElectroDamage: "Electro DMG",
        AnemoDamage: "Anemo DMG",
        GeoDamage: "Geo DMG",
        PhysicalDamage: "Physical DMG",
        MaxVaporize: "Max Vaporize DMG",
        MaxMelt: "Max Melt DMG",
        ExpectVaporize: "Expect Vaporize DMG",
        ExpectMelt: "Expect Melt DMG",

        AlbedoDefault: "Albedo Default",
        AloyDefault: "Aloy Default",
        AmberDefault: "Amber Default",
        AratakiIttoDefault: "Itto Default",
        BarbaraDefault: "Barbara Default",
        BeidouDefault: "北斗-无冕的龙王",
        BennettDamage: "班尼特-副C",
        BennettDefault: "班尼特-命运试金石",
        ChongyunDefault: "重云-雪融有踪",
        DilucDefault: "迪卢克-晨曦酒庄的贵公子",
        DionaDefault: "迪奥娜-猫尾特调",
        EulaDefault: "优菈-浪花骑士",
        FischlDefault: "菲谢尔-断罪皇女！！",
        GanyuDefault: "甘雨-循循守月",
        GorouDefault: "五郎-戎犬锵锵",
        HuTaoDefault: "胡桃-雪霁梅香",
        JeanDefault: "琴-蒲公英骑士",
        KaedeharaKazuhaDamage: "枫原万叶-输出",
        KaedeharaKazuhaDefault: "枫原万叶-红叶逐荒波",
        KaeyaDefault: "凯亚-寒风剑士",
        KamisatoAyakaDefault: "神里绫华-白鹭霜华",
        KamisatoAyakaDps: "神里绫华-DPS",
        KamisatoAyatoDefault: "神里绫人-磐祭叶守",
        KeqingDefault: "刻晴-霆霓快雨",
        KleeDefault: "可莉-逃跑的太阳",
        KujouSaraDamage: "九条裟罗-副C",
        KujouSaraDefault: "九条裟罗-黑羽鸣镝",
        LisaDefault: "丽莎-蔷薇魔女",
        MonaDefault: "莫娜-星天水镜",
        NingguangDefault: "凝光-掩月天权",
        NoelleDefault: "诺艾尔-未授勋之花",
        QiqiDefault: "七七-冻冻回魂夜",
        RaidenShogunDefault: "雷电将军-一心净土",
        RazorDefault: "雷泽-奔狼领的传说",
        RosariaDefault: "罗莎莉亚-棘冠恩典",
        SangonomiyaKokomiDefault: "珊瑚宫心海-真珠之智",
        SayuDefault: "早柚-忍里之貉",
        ShenheDefault: "申鹤-孤辰茕怀",
        SucroseDefault: "砂糖-无害甜度",
        TartagliaDefault: "达达利亚-「公子」",
        ThomaDefault: "托马-渡来介者",
        VentiDefault: "温迪-风色诗人",
        XianglingDefault: "香菱-万民百味",
        XiaoDefault: "魈-护法夜叉",
        XingqiuDefault: "行秋-少年春衫薄",
        XinyanDamage: "辛焱-输出",
        XinyanDefault: "辛焱-燥热旋律",
        YaeMikoDefault: "八重神子-浮世笑百姿",
        YanfeiDefault: "烟绯-智明无邪",
        YelanDefault: "夜兰-兰生幽谷",
        YoimiyaDefault: "宵宫-琉焰华舞",
        YunjinDefault: "云堇-红毹婵娟",
        ZhongliDefault: "钟离-尘世闲游",
        KukiShinobuDefault: "久岐忍-烦恼刈除",
    },
    tfDesc: {
        MaxATK: "最大化攻击力",
        MaxDEF: "最大化防御力",
        MaxHP: "最大化生命值",
        MaxEM: "最大化元素精通",
        PyroDamage: "火元素伤害最大化或最大化期望",
        CryoDamage: "冰元素伤害最大化或最大化期望",
        HydroDamage: "水元素伤害最大化或最大化期望",
        ElectroDamage: "雷元素伤害最大化或最大化期望",
        AnemoDamage: "风元素伤害最大化或最大化期望",
        GeoDamage: "岩元素伤害最大化或最大化期望",
        PhysicalDamage: "物理伤害最大化或最大化期望",
        MaxVaporize: "使得蒸发反应的伤害最高。<br><b>注意：</b>仅考虑最简单的情况，特殊机制不考虑（例如某些技能的属性转化等）",
        MaxMelt: "使得融化反应的伤害最高。<br><b>注意：</b>仅考虑最简单的情况，特殊机制不考虑（例如某些技能的属性转化等）",
        ExpectVaporize: "使得蒸发反应的期望伤害最高。<br><b>注意：</b>仅考虑最简单的情况，特殊机制不考虑（例如某些技能的属性转化等）",
        ExpectMelt: "使得融化反应的期望伤害最高。<br><b>注意：</b>仅考虑最简单的情况，特殊机制不考虑（例如某些技能的属性转化等）",

        AlbedoDefault: "普通副C阿贝多",
        AloyDefault: "普通输出埃洛伊",
        AmberDefault: "普通输出安柏",
        AratakiIttoDefault: "荒泷一斗输出",
        BarbaraDefault: "使得芭芭拉Q技能治疗效果最好",
        BeidouDefault: "普通北斗弹反流",
        BennettDamage: "普通副C班尼特",
        BennettDefault: "普通辅助班尼特",
        ChongyunDefault: "普通副C重云",
        DilucDefault: "普通输出迪卢克",
        DionaDefault: "普通治疗、护盾辅助",
        EulaDefault: "普通优菈输出",
        FischlDefault: "普通元素输出菲谢尔",
        GanyuDefault: "普通输出甘雨",
        GorouDefault: "普通岩辅五郎",
        HuTaoDefault: "普通输出主C胡桃",
        JeanDefault: "普通六边形琴",
        KaedeharaKazuhaDamage: "普通输出枫原万叶（兼辅助）",
        KaedeharaKazuhaDefault: "普通辅助万叶",
        KaeyaDefault: "普通冰伤凯亚",
        KamisatoAyakaDefault: "普通主C绫华",
        KamisatoAyakaDps: "期望DPS输出，输出手法模拟如下循环：4s 左右辅助铺场，平a4段接重击，有e放e，有大开大",
        KamisatoAyatoDefault: "普通水系输出绫人",
        KeqingDefault: "普通雷伤刻晴",
        KleeDefault: "可莉火伤输出",
        KujouSaraDamage: "副C九条裟罗",
        KujouSaraDefault: "普通雷系辅助九条",
        LisaDefault: "普通输出丽莎",
        MonaDefault: "普通输出莫娜",
        NingguangDefault: "普通输出凝光",
        NoelleDefault: "普通输出诺艾尔",
        QiqiDefault: "普通治疗辅助七七",
        RaidenShogunDefault: "普通输出雷军",
        RazorDefault: "普通输出物理雷泽",
        RosariaDefault: "普通辅助罗莎莉亚兼一定的输出",
        SangonomiyaKokomiDefault: "普通输出心海",
        SayuDefault: "普通输出型早柚",
        ShenheDefault: "普通辅助申鹤",
        SucroseDefault: "普通辅助砂糖",
        TartagliaDefault: "普通输出达达利鸭",
        ThomaDefault: "普通盾辅托马",
        VentiDefault: "普通输出温迪",
        XianglingDefault: "普通输出火伤香菱",
        XiaoDefault: "普通输出魈",
        XingqiuDefault: "普通副C行秋",
        XinyanDamage: "普通物伤输出辛焱",
        XinyanDefault: "普通辅助辛焱",
        YaeMikoDefault: "普通输出八重神子",
        YanfeiDefault: "普通输出烟绯",
        YelanDefault: "普通输出夜兰。使得Q伤害最大",
        YoimiyaDefault: "普通输出宵宫",
        YunjinDefault: "普通增伤辅助云堇",
        ZhongliDefault: "普通爆发钟离",
        KukiShinobuDefault: "输出型久岐忍。使其大招和越祓雷草之轮伤害按一定比例之和最大",
    },
    dmg: {
        electroCharged: "Electro-Charged",
        overload: "Overloaded",
        shattered: "Shattered",
        superConduct: "Superconduct",
        swirlElectro: "Swirl(Electro)",
        swirlPyro: "Swirl(Pyro)",
        swirlCryo: "Swirl(Cryo)",
        swirlHydro: "Swirl(Hydro)",
        "Pyro": "Pyro DMG",
        "Hydro": "Hydro DMG",
        "Electro": "Electro DMG",
        "Cryo": "Cryo DMG",
        "Dendro": "Dendro DMG",
        "Geo": "Geo DMG",
        "Anemo": "Anemo DMG",
        "Physical": "Physical DMG",
        expect: "Expect DMG",
        crit: "Crit DMG",
        nonCrit: "Non Crit DMG",
        melt: "Melt",
        vaporize: "Vaporize",
        heal: "Regeneration",
    },
    characterSkill: {
        Albedo: ["Normal Attack: Favonius Bladework - Weiss", "Abiogenesis: Solar Isotoma", "Rite of Progeniture: Tectonic Tide"],
        Aloy: ["Normal Attack: Rapid Fire", "Frozen Wilds", "Prophecies of Dawn"],
        Amber: ["Normal Attack: Sharpshooter", "Explosive Puppet", "Fiery Rain"],
        AratakiItto: ["Normal Attack: Fight Club Legend", "Masatsu Zetsugi: Akaushi Burst!", "Royal Descent: Behold, Itto the Evil!"],
        Barbara: ["Normal Attack: Whisper of Water", "Let the Show Begin♪", "Shining Miracle♪"],
        Beidou: ["Normal Attack: Oceanborne", "Tidecaller", "Stormbreaker"],
        Bennett: ["Normal Attack: Strike of Fortune", "Passion Overload", "Fantastic Voyage"],
        Chongyun: ["Normal Attack: Demonbane", "Spirit Blade: Chonghua's Layered Frost", "Spirit Blade: Cloud-Parting Star"],
        Diluc: ["Normal Attack: Tempered Sword", "Searing Onslaught", "Dawn"],
        Diona: ["Normal Attack: Kätzlein Style", "Icy Paws", "Signature Mix"],
        Eula: ["Normal Attack: Favonius Bladework - Edel", "Icetide Vortex", "Glacial Illumination"],
        Fischl: ["Normal Attack: Bolts of Downfall", "Nightrider", "Midnight Phantasmagoria"],
        Ganyu: ["Normal Attack: Liutian Archery", "Trail of the Qilin", "Celestial Shower"],
        Gorou: ["Normal Attack: Ripping Fang Fletching", "Inuzaka All-Round Defense", "Juuga: Forward Unto Victory"],
        HuTao: ["Normal Attack: Secret Spear of Wangsheng", "Guide to Afterlife", "Spirit Soother"],
        Jean: ["Normal Attack: Favonius Bladework", "Gale Blade", "Dandelion Breeze"],
        KaedeharaKazuha: ["Normal Attack: Garyuu Bladework", "Chihayaburu", "Kazuha Slash"],
        Kaeya: ["Normal Attack: Ceremonial Bladework", "Frostgnaw", "Glacial Waltz"],
        KamisatoAyaka: ["Normal Attack: Kamisato Art - Kabuki", "Kamisato Art: Hyouka", "Kamisato Art: Soumetsu"],
        KamisatoAyato: ["Normal Attack: Kamisato Art - Marobashi", "Kamisato Art: Kyouka", "Kamisato Art: Suiyuu"],
        Keqing: ["Normal Attack: Yunlai Swordsmanship", "Stellar Restoration", "Starward Sword"],
        Klee: ["Normal Attack: Kaboom!", "Jumpy Dumpty", "Sparks 'n' Splash"],
        KujouSara: ["Normal Attack: Tengu Bowmanship", "Tengu Stormcall", "Subjugation: Koukou Sendou"],
        KukiShinobu: ["Normal Attack: Shinobu's Shadowsword", "Sanctifying Ring", "Gyoei Narukami Kariyama Rite"],
        Lisa: ["Normal Attack: Lightning Touch", "Violet Arc", "Lightning Rose"],
        Mona: ["Normal Attack: Ripple of Fate", "Mirror Reflection of Doom", "Stellaris Phantasm"],
        Ningguang: ["Normal Attack: Sparkling Scatter", "Jade Screen", "Starshatter"],
        Noelle: ["Normal Attack: Favonius Bladework - Maid", "Breastplate", "Sweeping Time"],
        Qiqi: ["Normal Attack: Ancient Sword Art", "Adeptus Art: Herald of Frost", "Adeptus Art: Preserver of Fortune"],
        RaidenShogun: ["Normal Attack: Origin", "Transcendence: Baleful Omen", "Secret Art: Musou Shinsetsu"],
        Razor: ["Normal Attack: Steel Fang", "Claw and Thunder", "Lightning Fang"],
        Rosaria: ["Normal Attack: Spear of the Church", "Ravaging Confession", "Rites of Termination"],
        SangonomiyaKokomi: ["Normal Attack: The Shape of Water", "Kurage's Oath", "Nereid's Ascension"],
        Sayu: ["Normal Attack: Shuumatsuban Ninja Blade", "Yoohoo Art: Fuuin Dash", "Yoohoo Art: Mujina Flurry"],
        Shenhe: ["Normal Attack: Dawnstar Piercer", "Spring Spirit Summoning", "Divine Maiden's Deliverance"],
        Sucrose: ["Normal Attack: Wind Spirit Creation", "Astable Anemohypostasis Creation - 6308", "Forbidden Creation - Isomer 75 / Type II"],
        Tartaglia: ["Normal Attack: Cutting Torrent", "Foul Legacy: Raging Tide", "Havoc: Obliteration"],
        Thoma: ["Normal Attack: Swiftshatter Spear", "Blazing Blessing", "Crimson Ooyoroi"],
        Venti: ["Normal Attack: Divine Marksmanship", "Skyward Sonnet", "Wind's Grand Ode"],
        Xiangling: ["Normal Attack: Dough-Fu", "Guoba Attack", "Pyronado"],
        Xiao: ["Normal Attack: Whirlwind Thrust", "Lemniscatic Wind Cycling", "Bane of All Evil"],
        Xingqiu: ["Normal Attack: Guhua Style", "Guhua Sword: Fatal Rainscreen", "Guhua Sword: Raincutter"],
        Xinyan: ["Normal Attack: Dance on Fire", "Sweeping Fervor", "Riff Revolution"],
        YaeMiko: ["Normal Attack: Spiritfox Sin-Eater", "Yakan Evocation: Sesshou Sakura", "Great Secret Art: Tenko Kenshin"],
        Yanfei: ["Normal Attack: Seal of Approval", "Signed Edict", "Done Deal"],
        Yelan: ["Normal Attack: Stealthy Bowshot", "Lingering Lifeline", "Depth-Clarion Dice"],
        Yoimiya: ["Normal Attack: Firework Flare-Up", "Niwabi Fire-Dance", "Ryuukin Saxifrage"],
        Yunjin: ["Normal Attack: Cloud-Grazing Strike", "Opening Flourish", "Cliffbreaker's Banner"],
        Zhongli: ["Normal Attack: Rain of Stone", "Dominus Lapidis", "Planet Befall"],
    },
    dmgName: ["1-Hit DMG","2-Hit DMG","3-Hit DMG","4-Hit DMG","5-Hit DMG","Charged Attack-1","Charged Attack-2","Plunge DMG","Low Plunge DMG","High Plunge DMG","Initial Cutting DMG","Max Cutting DMG","Initial Storm DMG","Max Storm DMG","Tornado DMG","Additional Pyro DMG","Additional Hydro DMG","Additional Electro DMG","Additional Cryo DMG","Skill DMG","Transient Blossom DMG","Tectonic Tide DMG","Flower of Life","1-Hit DMG-1","1-Hit DMG-2","2-Hit DMG-1","3-Hit DMG-1","4-Hit DMG-1","Aimed Shot","Fully-Charged Aimed Shot","冰尘弹伤害","Freeze Bomb DMG","Explosion DMG","Fiery Rain DMG Per Wave","Total Fiery Rain DMG","Arataki Kesagiri Combo Slash DMG","Arataki Kesagiri Final Slash DMG","Saichimonji Slash DMG","Charged Attack DMG","Regeneration on Hit","Continuous Regeneration","Droplet DMG","Healing","Charged Attack Spinning DMG","Charged Attack Final DMG","Base DMG","一层伤害","二层伤害","闪电伤害","点按伤害","Charge Level 1 DMG-1","Charge Level 1 DMG-2","Charge Level 2 DMG-1","Charge Level 2 DMG-2","Continuous Regeneration","Slashing DMG","DoT","Explosion DMG","Slashing DMG","Continuous Field DMG","3-Hit DMG-2","5-Hit DMG-1","5-Hit DMG-2","Hold DMG","Icewhirl Brand DMG","Shattered Lightfall Sword","Lightfall Sword","Oz's ATK DMG","Summoning DMG","Falling Thunder DMG","6-Hit DMG","Aimed Shot Charge Level 1","Frostflake Arrow DMG","Frostflake Arrow Bloom DMG","Ice Shard DMG","Crystal Collapse DMG","Blood Blossom DMG","Low HP Skill DMG","Field Entering/Exiting DMG","Field Activation Healing","5-Hit DMG/3","Midare Ranzan: Plunge DMG","Midare Ranzan: Low Plunge DMG","Midare Ranzan: High Plunge DMG","Midare Ranzan: Pyro DMG","Midare Ranzan: Hydro DMG","Midare Ranzan: Cryo DMG","Midare Ranzan: Electro DMG","Press Skill DMG","Hold Skill DMG","4-Hit DMG/3","Charged Attack/3","Cutting DMG","Bloom DMG","Shunsuiken 1-Hit DMG","Shunsuiken 2-Hit DMG","Shunsuiken 3-Hit DMG","Water Illusion DMG","Bloomwater Blade DMG","4-Hit DMG-2","Lightning Stiletto DMG","Thunderclap Slash DMG/2","Consecutive Slash DMG/8","Last Attack DMG","Charged Attack DMG(With Talent)","Jumpy Dumpty DMG","Mine DMG","Sparks 'n' Splash DMG","Tengu Juurai: Ambush DMG","Tengu Juurai: Titanbreaker DMG","Tengu Juurai: Stormcluster DMG","Grass Ring of Sanctification Healing","Grass Ring of Sanctification DMG","Single Instance DMG","Total DMG","Total DMG-Low HP","Non-Conductive Hold DMG","Stack 1 Conductive Hold DMG","Stack 2 Conductive Hold DMG","Stack 3 Conductive Hold DMG","Discharge DMG","Illusory Bubble Explosion DMG","Normal Attack DMG","DMG per Star Jade","DMG Per Gem","Herald of Frost DMG","Coordinated ATK DMG","Musou no Hitotachi Base DMG","Soul Companion-1-Hit DMG","Soul Companion-2-Hit DMG","Soul Companion-3-Hit DMG","Soul Companion-4-Hit DMG","3-Hit DMG/2","Skill DMG-1","Skill DMG-2","Ice Lance DoT","Ripple DMG","Fuufuu Windwheel DMG","Fuufuu Whirlwind Kick Press DMG","Fuufuu Whirlwind Kick Hold DMG","Fuufuu Windwheel Pyro DMG","Fuufuu Windwheel Hydro DMG","Fuufuu Windwheel Cryo DMG","Fuufuu Windwheel Electro DMG","Fuufuu Whirlwind Pyro Elemental DMG","Fuufuu Whirlwind Kick Hydro DMG","Fuufuu Whirlwind Kick Cryo DMG","Fuufuu Whirlwind Kick Electro DMG","Skill Activation DMG","Skill Activation Healing","Muji-Muji Daruma DMG","Muji-Muji Daruma Healing","Riptide Flash DMG","Riptide Burst DMG","Stance Change DMG","6-Hit DMG-1","6-Hit DMG-2","Riptide Slash DMG","Skill DMG: Melee","Skill DMG: Ranged","Riptide Blast DMG","Fiery Collapse DMG","4-Hit DMG/4","Flame DMG","1-Hit Swing DMG","2-Hit Swing DMG","3-Hit Swing DMG","Pyronado DMG","Sword Rain DMG","Swing DMG","Pyro DoT","Sesshou Sakura DMG: Level 1","Sesshou Sakura DMG: Level 2","Sesshou Sakura DMG: Level 3","Sesshou Sakura DMG: Level 4","Tenko Thunderbolt DMG","Charged Attack-No Scarlet Seals","Charged Attack-1 Scarlet Seals","Charged Attack-2 Scarlet Seals","Charged Attack-3 Scarlet Seals","Charged Attack-4 Scarlet Seals","Talent2 Additional DMG","4-Hit DMG/2","Breakthrough Barb DMG","Exquisite Throw DMG","1-Hit DMG/2","Kindling Arrow DMG","Aurous Blaze Explosion DMG","Charge Level 1 DMG","Charge Level 2 DMG","5-Hit DMG/4","Stone Stele DMG","Resonance DMG"],
    res: {
        Pyro: "Pyro Res",
        Cryo: "Cryo Res",
        Hydro: "Hydro Res",
        Electro: "Electro Res",
        Anemo: "Anemo Res",
        Dendro: "Dendro Res",
        Geo: "Geo Res",
        Physical: "Physical Res",
    },
    teamPage: {
        start: "Start",
        add: "Add Member",
        member: "Member",
        weight: "Weight",
        showStat: "Show Stats",
    },
    poPage: {
        start: "Start",
    },
    pfName: {
        ArtifactEff: "Artifact Eff",
    },
    pfDesc: {
        ArtifactEff: "1 point for a max-valued roll",
    },
    dbPage: {
        tooSmall: "Too little character data",
        weapon: "Weapon Usage",
        art: "Artifact Recommendation",
        mainStat: "Main Stat Recommendation",
        subStat: "Sub Stats Distribution Recommendation",
        count: "Rolls",
    },
    setupPage: {
        storage: "Storage",
        clear: "Clear local storage",
        confirmClear: "Confirm clear local storage?",
        loading: "Switching language",
    }
}