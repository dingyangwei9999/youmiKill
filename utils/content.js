var prayContent = {
  level: [
    "上签", //1
    "下签",
    "下签",
    "上签",
    "中签",

    "中签", //6
    "下签",
    "上签",
    "中签",
    "上签",

    "中签", //11
    "上签",
    "中签",
    "中签",
    "中签",

    "中签", //16
    "中签",
    "上签",
    "中签",
    "中签",

    "上签", //21
    "中签",
    "中签",
    "下签",
    "中签",

    "中签", //26
    "中签",
    "中签",
    "中签",
    "中签",

    "中签", //31
    "中签",
    "中签",
    "中签",
    "中签",

    "中签", //36
    "中签",
    "下签",
    "下签",
    "中签",

    "中签", //41
    "上签",
    "上签",
    "中签",
    "上签",

    "中签", //46
    "上签",
    "中签",
    "中签",
    "中签",

    "上签", //51
    "中签",
    "中签",
    "下签",
    "中签",

    "中签", //56
    "中签",
    "中签",
    "中签",
    "下签",

    "中签", //61
    "中签",
    "中签",
    "下签",
    "下签",

    "下签", //66
    "上签",
    "中签",
    "中签",
    "下签",

    "中签", //71
    "中签",
    "上签",
    "下签",
    "中签",

    "中签", //76
    "中签",
    "上签",
    "中签",
    "上签",

    "上签", //81
    "中签",
    "中签",
    "下签",
    "中签",

    "上签", //86
    "中签",
    "中签",
    "上签",
    "上签",

    "中签", //91
    "上签",
    "中签",
    "下签",
    "中签",

    "上签", //96
    "中签",
    "下签",
    "下签",
    "下签",
    "上上签(SSR级)",
  ],
  title: [
    "第一签  【钟离成道】",
    "第二签  【苏秦不第】",
    "第三签  【董永遇仙】",
    "第四签  【玉莲会十朋】",
    "第五签  【刘晨遇仙】",
    "第六签  【仁贵遇主】",
    "第七签  【苏娘走难】",
    "第八签  【姚能遇仙】",
    "第九签  【孔明点将】",
    "第十签  【庞涓观阵】",
    "第十一签  【书荐姜维】",
    "第十二签  【武吉遇师】",
    "第十三签  【罗通拜师】",
    "第十四签  【子牙弃官】",
    "第十五签  【苏秦得志】",
    "第十六签  【叶梦熊朝帝】",
    "第十七签  【话梅止渴】",
    "第十八签  【曹国舅为仙】",
    "第十九签  【子仪封王】",
    "第二十签  【姜太公遇文王】",
    "第二十一签  【李旦龙凤配合】",
    "第二十二签  【六郎逢救】",
    "第二十三签  【怀德招亲】",
    "第二十四签  【殷郊遇师】",
    "第二十五签  【姚能受职】",
    "第二十六签  【钟馗得道】",
    "第二十七签  【刘基谏主】",
    "第二十八签  【李后寻包公】",
    "第二十九签  【赵子龙救阿斗】",
    "第三十签  【棋盘大会】",
    "第三十一签  【佛印会东坡】",
    "第三十二签  【刘备求贤】",
    "第三十三签  【咬金聘仁贵】",
    "第三十四签  【桃园结义】",
    "第三十五签  【唐僧取经】",
    "第三十六签  【湘子遇宾(宝)】",
    "第三十七签  【李靖归山】",
    "第三十八签  【何文秀遇难】",
    "第三十九签  【姜女寻夫】",
    "第四十签  【武则天登位】",
    "第四十一签  【董卓收吕布】",
    "第四十二签  【目莲救母】",
    "第四十三签  【行者得道】",
    "第四十四签  【姜维邓艾斗阵】",
    "第四十五签  【仁宗遇仙】",
    "第四十六签  【渭水钓鱼】",
    "第四十七签  【梁灝登科】",
    "第四十八签  【韩信挂帅】",
    "第四十九签  【王祥求鲤】",
    "第五十签  【陶朱归五湖】",
    "第五十一签  【孔明入川】",
    "第五十二签  【太白醉捞明月】",
    "第五十三签  【刘备招亲】",
    "第五十四签  【马超追曹】",
    "第五十五签  【周武王登位】",
    "第五十六签  【禄山谋反】",
    "第五十七签  【董仲寻亲】",
    "第五十八签  【文王问卜】",
    "第五十九签  【张良隐山】",
    "第六十签  【赤壁鏖兵】",
    "第六十一签  【苏小妹难夫】",
    "第六十二签  【唐僧得道】",
    "第六十三签  【女娲氏炼石】",
    "第六十四签  【马前覆水】",
    "第六十五签  【孙滨困庞涓】",
    "第六十六签  【霸王被困】",
    "第六十七签  【金星试窦儿】",
    "第六十八签  【郭汾阳祝寿】",
    "第六十九签  【梅开二度】",
    "第七十签  【李密反唐】",
    "第七十一签  【文君访相如】",
    "第七十二签  【王莽求贤】",
    "第七十三签  【陈桥兵变】",
    "第七十四签  【秦败擒三帅】",
    "第七十五签  【伍员夜出昭关】",
    "第七十六签  【洪武看牛】",
    "第七十七签  【捧壁归赵】",
    "第七十八签  【临潼救驾】",
    "第七十九签  【暗扶倒铜旗】",
    "第八十签  【智远投军】",
    "第八十一签  【风送滕王阁】",
    "第八十二签  【火烧葫芦谷】",
    "第八十三签  【李渊登位】",
    "第八十四签  【庄子试妻】",
    "第八十五签  【韩文公遇雪】",
    "第八十六签  【商辂中三元】",
    "第八十七签  【咬金探地穴】",
    "第八十八签  【庞洪畏包公】",
    "第八十九签  【大看琼花】",
    "第九十签  【苇佩遇仙】",
    "第九十一签  【三英战吕布】",
    "第九十二签  【蔡卿报恩】",
    "第九十三签  【高君保招亲】",
    "第九十四签  【伯牙访友】",
    "第九十五签  【曹丕称帝】",
    "第九十六签  【窦燕山积善】",
    "第九十七签  【六出祁山】",
    "第九十八签  【吉平遇难】",
    "第九十九签  【陶三春挂帅】",
    "第一百签  【三教谈道】",
    "第一百零一签  【高中状元】",
  ],
  brief: [
    ["开天辟地作良缘，吉日良时万物全；|若得此签非小可，人行忠正帝王宣。"],  //1

    ["鲸鱼未变守江河，不可升腾更望高；|异日峥嵘身变化，许君一跃跳龙门。"],

    ["临风冒雨去还乡，正是其身似燕儿；|衔得坭来欲作垒，到头垒坏复须坭。"],

    ["千年古镜复重圆，女再求夫男再婚；|自此门庭重改换，更添福禄在儿孙。"],

    ["一锥草地要求泉，努力求之得最难；|无意俄然遇知己，相逢携手上青天。"],  //5

    ["投身岩下铜鸟居，须是还他大丈夫；|拾得营谋谁可得，通行天地此人无。"],

    ["奔波阻隔重重险，带水拖坭去度山；|更望他乡求用事，千乡万里未回还。"],

    ["茂林松柏正兴旺，雨雪风霜总莫为；|异日忽然成大用，功名成就栋梁材。"],

    ["烦君勿作私心事，此意偏宜说问公；|一片明心光皎洁，宛如皎月正天心。"],

    ["石藏无价玉和珍，只管他乡外客寻；|宛如持灯更觅火，不如收拾枉劳心。"],    //10

    ["欲求胜事可非常，争奈亲姻日暂忙；|到头竟必成鹿箭，贵人指引贵人乡。"],

    ["否去泰来咫尺间，暂交君子出於山；|若逢虎兔佳音信，立志忙中事即闲。"],

    ["自小生在富贵家，眼前万物总奢华；|蒙君赐紫金角带，四海声名定可夸。"],

    ["宛如仙鹤出凡笼，脱得凡笼路路通；|南北东西无阻隔，任君直上九霄宫。"],

    ["行人怨日气难吞，忽有灾事勿近前；|鸟破林巢无所宿，可寻深处稳安身。"],  //15

    ["愁眉思虑暂时开，启出云霄喜自来；|宛如粪土中藏玉，良工一举出尘埃。"],

    ["莫听闲言说是非，晨昏只好念阿弥；|若将狂话为真实，书饼如何止得饥。"],

    ["金乌西坠兔东升，日夜循环至古今；|僧道得知无不利，士农工商各从心。"],

    ["急水滩头放船归，风波作浪欲何为；|若要安然求稳静，等待浪静道此危。"],

    ["当春久雨喜开晴，玉兔金乌渐渐明；|旧事消散新事遂，看看一跳过龙门。"], //20

    ["阴阳道合总由天，女嫁男婚喜偎然；|但见龙蛇相会合，熊熊入梦喜团圆。"],

    ["旱时田裏皆枯槁，谢天甘雨落淋淋；|花果草木皆润泽，始知一雨值千金。"],

    ["欲扳仙桂入蟾宫，岂虑天门不任君；|忽遇一般音信好，人人皆笑岭顶花。"],

    ["不成理论不成家，水性痴人似落花；|若问君恩须得力，到头方见事如麻。"],

    ["过了忧危事几重，从今再立永无空；|宽心自有宽心计，得遇高人立大功。"],  //25

    ["上下传来事转虚，天边接得一封书；|书中许我功名遂，直到终时亦是虚。"],

    ["一谋一用一番书，虑後思前不敢为；|时到贵人相助力，如山墙立可安居。"],

    ["东边月上正蝉娟，顷刻云遮亦暗存；|或有圆时还有缺，更言非者亦闲言。"],

    ["宝剑出匣耀光明，在匣全然不惹尘；|今得贵人携出现，有威有势众人钦。"],

    ["劝君切莫向他求，似鹤飞来暗箭投；|若去采薪蛇在草，恐遭毒口也忧愁。"], //30

    ["清闲无忧静处坐，饱後吃茶时坐卧；|汝下身心不用忙，必定不招冤与祸。"],

    ["前程杳杳定无疑，石中藏玉有谁知；|一朝良匠分明剖，始觉安然碧玉期。"],

    ["内藏无价宝和珍，得玉何须外界寻；|不如等待高人识，宽心犹且更宽心。"],

    ["行藏出入礼义恭，言必忠良信必聪；|心不了然且静撤，光明红日正当中。"],

    ["衣冠重整旧家风。道是无穹却有功；|扫却当途荆棘刺。三人约议再和同。"],   //35

    ["眼前病讼不须忧，实地资财尽可求；|恰似猿猴金锁脱，自归山洞去来游。"],

    ["欲待身安运泰时，风中灯烛不相宜；|不如收拾深堂坐，庶免光瑶静处明。"],

    ["月照天书静处期，忽遭云雾又昏迷；|宽心祈待云霞散，此时更改好施为。"],

    ["天边消息实难思，切莫多心望强求；|若把石头磨作镜，曾知枉费己工夫。"],

    ["红轮西坠兔东升，阴长阳消百事亭；|是若女人宜望用，增添财禄福其心。"],   //40

    ["无限好言君记取，却为认贼将作子；|莫贪眼下有些甜，更虑他年前样看。"],

    ["君皇圣后总为恩，复待祈禳无损增；|一切有情皆受用，人间天上得期亨。"],

    ["天地变通万物全，自荣自养自安然；|生罗万象皆精彩，事事如心谢圣贤。"],

    ["棋逢敌手著相宜，黑白盘中未决时；|皆因一著知胜败，须教自有好推宜。"],

    ["温柔自古胜刚强，积善之门大吉昌；|若是有人占此卦，宛如正渴湡琼浆。"],   //45

    ["劝君耐守旧生涯，把定心肠勿起歹；|直待有人轻著力，枯枝老树再生花。"],

    ["锦上添花色愈鲜，运来禄马喜双全；|时人莫恨功名晚，一举登科四海传。"],

    ["昆鸟秋来化作鹏，好游快桨喜飞腾；|翱翔万里云霄去，馀外诸禽总不能。"],

    ["天寒地冻水成冰，何须贫吝取功名；|只好守己静处坐，待时兴变自然明。"],

    ["五湖四海任君行，高挂帆蓬自在撑；|若得顺风随即至，满船宝贝喜层层。"],    //50

    ["夏日炎天日最长，人人愁热闷非常；|天地也解知人意，薰风拂拂自然凉。"],

    ["水中捉月费功夫，费尽功夫却又无；|莫说闲言并乱语，枉劳心力强身孤。"],

    ["失意番成得意时，龙呤虎啸两相宜；|青天自有通霄路，许我功名再有期。"],

    ["梦中得宝醒来无，自谓南山只是锄；|若问婚姻并问病，别寻条路为相扶。"],

    ["父贤传子子传孙，衣食丰隆只靠天；|堂上椿萱人快乐，饥饭渴饮因时眠。"],    //55

    ["滩小石溪流水响，风清明月贵人忙；|路须借问何方去，管取林中花草香。"],

    ["说是说非风过耳，好衣好禄自然丰；|君莫记取当年事，汝意还如我意同。"], 

    ["直言说话君须记，莫在他乡求别艺；|切须守己旧生涯，除是其馀都不利。"],

    ["直上重楼去藏身，四围荆棘遶为林；|天高君命长和短，得一番成失二人。"],

    ["抱薪救火大皆燃，烧遍三千亦复然；|若问荣华并出入，不如收拾枉劳心。"],    //60

    ["日上吟诗月下歌，逢场作戏笑呵呵；|相逢会过难藏避，喝彩齐唱连哩罗。"],

    ["晨昏全赖佛扶持，须是逢危却不危；|若得贵人相引处，那时财帛亦相隋。"],

    ["昔日行船失了针，今朝依旧海中寻；|若然寻得原针在，也费工夫也费心。"],

    ["游鱼却在碧波池，撞遭罗网四边围；|思量无计番身出，事到头来惹是非。"],

    ["眼前欢喜未为欢，亦不危时亦不安；|割肉成疮为甚事，不如守旧待时光。"],   //65

    ["路险马羸人行急，失群军卒困相当；|滩高风浪船掉破，日暮花残天降霜。"],

    ["一条金线秤君心，无减无增无重轻；|为人平生心正直，文章全具艺光明。"],

    ["门延吉庆喜非常，积善之门大吉昌；|婚姻田蚕诸事遂，病逢妙药即安康。"],

    ["冬来岭上一枝梅，叶落枝枯总不催；|但得阳春悄急至，依然还我作花魁。"],

    ["朝朝恰似采花蜂，飞出西南又走东；|春尽花残无觅处，此心不变旧行踪。"],    //70

    ["谁知仓龙十九衢，女子当年嫁二夫；|自是一弓架两箭，切恐龙马上安居。"],

    ["养峰须用求他蜜，只怕遭触尾上钉；|须是眼前有异路，暗裏染如荆棘林。"], 

    ["春来雷震百虫鸣，番身一转离泥中；|始知出入还来往，一朝变化便成龙。"],

    ["似鹄飞来自入笼，欲得番身却不通；|南北东西都难出，此卦诚恐恨无穷。"],

    ["恰如抱虎过高山，战战竞竞胆碎寒；|不觉忽然从好事，切须保守一身安。"],  //75

    ["鱼龙混杂意相同，耐守深潭待运通；|不觉一朝头耸出，禹门一跳过龙宫。"],

    ["梦中说得是多财，声名云外总虚来；|水远山遥难信实，贵人点指笑颜开。"],

    ["冷水未烧白涕汤，不寒不热有温凉；|要行天下无他事，为有身中百艺强。"],

    ["虚空结愿保平安，保得身安愿不还；|莫忘神圣宜还了，岂知神语莫轻慢。"],

    ["直上仙岩要学仙，岂知一旦帝王宣；|青天日月常明照，心正声名四海传。"],  //80 

    ["梧桐叶落秋将暮，行客归程去似云；|谢得天公高著力，顺风船载宝珍归。"],

    ["炎炎烈火焰连天，焰裏还生一朵莲；|到底得成终不害，依然生弃长根枝。"],

    ["譬若初三四五缺，半无半有未圆全；|等待十五良宵夜，到处光明到处圆。"],

    ["因名丧德如何事，切恐吉中变化凶；|酒醉不知何处去，青松影裏梦朦胧。"],

    ["云开雾罩山前路，万物圆中月再圆；|若得诗书沉梦醒，贵人指引步天台。"],  //85

    ["春来花发映阳台，万里车来进宝财；|若得禹门三级浪，恰如平地一声雷。"],

    ["人行半岭日衔山，峻岭崖岩未可安；|仰望上天为护佑，此身犹在太平间。"],

    ["木为一虎在富门，须是有威不害人；|分明说是无防事，忧恼迟疑恐惧心。"], 

    ["出入营谋大吉昌，似玉无瑕石裏藏；|若得贵人来指引，斯时得宝喜风光。"],

    ["忽言一信向天飞，泰山宝贝满船归；|若问路途成好事，前头仍有贵人推。"],    //90

    ["好展愁眉出众来，前途改变喜多财；|一条大路如天阔，凡有施财尽畅怀。"],

    ["自幼为商任设谋，财禄盈丰不用求；|若是只身谋望事，秀才出去状元回。"],

    ["鸾凤翔毛雨淋漓，当时却被雀儿欺；|终教一日云开达，依旧还君整羽衣。"],

    ["君子莫体小人为，事若差池各是非；|琴鸣须用知音听，守常安静得依稀。"],

    ["志气功业在朝朝，今将酒色不胜饶；|若见金鸡报君语，钱财福禄与君招。"],    //95

    ["巍巍宝塔不寻常，八面玲珑尽放光；|劝君立志勤顶礼，作善苍天降福祥。"],

    ["当风点烛空疏影，恍惚铺成杨里花；|累被儿竟求牧拾，怎知只是自浮槎。"],

    ["出入求谋事宜迟，只恐闲愁惹是非；|如鸟飞入罗网裏，相逢能有几多时。"],

    ["勒马持鞭直过来，半有忧危半有灾；|恰似遭火焚烧屋，天降时雨荡成灰。"],

    ["佛神灵变与君知，痴人说事转昏迷；|老人求得灵签去，不知守旧待时来。"],    //100

    ["忽朝一信下天墀，宝贝船装满载归；|若问前程成底事，始终应得贵人提。"],
  ],
  poem: [
    "此卦盘古初开天地之象。诸事皆吉也。",              //1
    "此卦鲸鱼未变之象。凡事忍耐待时也。（高有作闻。）", 
    "此卦燕子衔坭之象。凡事劳心费力也。",
    "淘沙成金。骑龙踏虎。虽是劳心。于中有补。",
    "此卦锥地求泉之象。凡事先难后易也。",              //5
    "此卦投岩铜鸟（雕本作铜；大本作女。及早本作拾早。）之象。凡事宜顺吉之兆。",
    "此卦拖坭带水之象。凡事守旧则吉也。",
    "此卦此卦松柏茂林之象。凡事有贵气也。",
    "此卦皎月当空之象。凡事光明通气也。（说同悦。）",
    "此卦持灯觅火之象。凡事待时成就也。（外客有作外界。）", //10
    "此卦因祸得福之象。凡事营谋吉利也。（中箭本作鹿箭。）",
    "此卦祸中有福之象。凡事先凶后吉也。（击有作系。）",
    "此卦龙门得通之象。凡事有变大吉也。（腰带本作角带。有作玉带。）",
    "此卦仙鹤离笼之象。凡事先凶后吉也。（凡有作樊。）",
    "此卦鸟鹊巢(离)林之象。凡事到底应心也。（跘曰本作(缺字)日；有作一日。巢破林鸟本作鸟破林巢。）",   //15
    "此卦阴阳和合之象。凡所谋皆吉也。（藏玉本作戴玉。荐举本作(缺字)举；有作一举。）",
    "此卦书饼充饥之象。诸事多虚少实也。（将本作奖。）",
    "此卦阴阳消长之象。凡事遂意之兆也。（金乌指太阳。玉兔指月亮。）",
    "此卦船行急滩之象。凡事守旧待时也。",
    "此卦久雨初明之象。凡事遂意也。（当春本作堂春。玉兔金乌指月亮太阳。）", //20
    "此卦阴阳道合之象。凡事和大吉也。（熊罴入梦本作熊熊人萝。）",
    "此卦旱逢甘雨之象。凡事难中有救也。（不便本作便岂。）",
    "此卦手扳仙桂之象。凡事必有贵人也。（普开本作普虚。普君有作岂虑天门不任开。人花有作人人欢笑喜庆来。）",
    "此卦痴人道塞之象。凡事守旧待时也。",
    "此卦古井逢泉之象。凡事贵人成就也。",//25
    "此卦虚名之象。凡事虚多少实宜守旧也。",
    "此卦屋好墙壁之象。凡事稳当无险也。",
    "此卦月被云遮之象。凡事昏迷未定也。",
    "此卦宝剑出匣之象。凡事有威有势也。",
    "此卦安份守己之象。凡事小心谨防也。", //30
    "此卦守旧安然之象。凡事时待时则吉也。（侩同会。）",
    "此卦剖石见玉之象。凡事著力成功也。",
    "此卦藏玉外寻之象。凡事待时可也。",
    "此卦红日当空正照之象。凡事遂意也。（从本作聪，言聪有作矢必忠良志必同。中有作空。）",
    "此卦衣冠重整之象。凡事先难后易也。",//35
    "此卦猿猴脱锁之象。凡事先难后易也。（悠字本缺。）",
    "此卦风摇灯烛之象。凡事守常则吉也。（动有作运。摇本作瑶。免有作几。）",
    "此卦云雾遮月之象。凡事未遂守旧也。",
    "此卦守常安静之象。凡事守己则吉也。",
    "此卦阴长阳消之象。凡事先难后易也。",//40
    "此卦认贼作子之象。凡事认真作假。（看有作施。）",
    "此卦天垂恩泽之象。凡事成就大吉也。",
    "此卦大地交泰之象。凡事大吉无危也。（营本作荣。）",
    "此卦棋逢敌手之象。凡事用机关则吉也。",
    "此卦积善温柔之象。凡事贵人和合也。",//45
    "此卦枯木生花之象。凡事自有成就也。",
    "此卦锦上添花之象。凡事大吉大利也。（运至材成本作护有变新。）",
    "此卦昆鹏兴变之象。凡事有变动事。（昆可作左昆右鸟，同鶤，鶤指三尺鸡。有山鸡变凤凰或大器晚成之意。千字文欠鹏这常字。却以鶤喻鹏。游鶤独运。凌摩绛霄。）",
    "此卦水结成冰之象。凡事不用枉求也。（兴盛本作兴樊。）",
    "此卦顺风撑船之象。凡事皆顺大吉也。",//50
    "此卦人人愁热之象。凡事随心从意也。",
    "此卦贪求费力之象。凡事劳心费力也。（身枯本作身孤。）",
    "此卦龙吟虎啸之象。凡事顺意有望也。",
    "此卦梦中得宝之象。凡事枉费心力也。（寿比南山指长寿。锄指劳苦或掘穴。来路本作从路。）",
    "此卦接竹引泉之象。凡事谋望大吉也。（椿萱喻父母。困本作因。）",//55
    "此卦船行小滩之象。凡事有贵人助也。（莫本作管。）",
    "此卦孩儿见母之象。诸事贵人大吉也。（好衣本作好交。好指珍惜。）",
    "此卦守旧守时之象。凡事守旧则吉也。",
    "此卦守旧随时之象。凡事待时则吉。（绕本作遶。意同。）",
    "此卦抱薪救火之象。凡事亦自谨防也。（一旦本作一日。祸身本作归身。）",//60
    "此卦守旧随时之象。凡事时吉利也。（日落本作日此。连理指连株树，喻夫妻和谐。罗指网。喻夫妇相缠。或绫罗绸缎指彩衣。）",
    "此卦神佛暗佑之象。凡事忍耐大吉也。（传籁本作传赖。有作全赖）",
    "此卦海中寻针之象。凡事费心劳力也。（然寻本作划日。缘有作禄。）",
    "此卦鱼遭罗网之象。凡事亦宜提防也。",
    "此卦割肉成疮之象。凡事只宜守旧待时。（补疮本作成疮。）",//65
    "此卦船破下滩之象。凡事险阻提防也。（嬴弱也。棹桨也。）",
    "此卦心平正直之象。凡事平稳无凶也。（贝指贝子即宝贝。贝有作具。）",
    "此卦春梦百花、门廷吉庆之象。凡事遇贵人大吉也，凡事顺遂也。",
    "此卦梅花占魁之象。凡事宜迟则吉也。（摧本作催。）",
    "此卦蜜蜂采花之象。凡事劳心费力也。（无觅本作产朝。）",//70
    "此卦一弓架两箭之象。凡事再合则吉也。（认卫有作谁知苍龙下九衢。）",
    "此卦结蜂采蜜、求甜得苦之象。凡事劳心费力也。凡事防范灾殃也。",
    "此卦雷发百虫之象。凡事遇贵人吉兆也。",
    "此卦似鹄投水(笼)之象。凡事多虚少实也。",
    "此卦抱(拖)虎过山之象。凡事险凶惊恐也。（拖虎本作抱虎。）",//75
    "此卦鱼龙未变之逸象。凡事待时至可也。",
    "此卦梦中得宝之象。凡事虚多少实也。",
    "此卦平善用事之象。凡事平稳大吉也。",
    "此卦信实莫信虚之。凡事守旧之兆也。",
    "此卦贵人接引之象。凡事和合大吉也。",//80
    "此卦梧桐叶落之象。凡事先凶后吉也。",
    "此卦火裏生莲之象。凡事似险非险也。",
    "此卦月缺未圆之象。凡事守候忍耐也。",
    "此卦寒鱼离水、败德招凶之象。凡事不可移动也。凡事脚踏实地也。（本作解除保安。）",
    "此卦春尽花开之象。凡事主后改变也。（闇本作开。有作深。万圆有作春残花尽又再开。天台指天宫或指天台山。）",//85
    "此卦上朝见帝之象。凡事太吉大利也。",
    "此卦淘沙见金、人处险境之象。凡事有贵人之兆也。（西有作衔。本作不明符）。",
    "此卦林木虎有威之象。凡事虚惊少实也。（林有作木。）",
    "此卦石藏珍宝之象。凡事称心大吉也。(琼花指昙花)。",
    "此卦功名成就之象。凡事宜进大吉也。",//90
    "此卦前途显达之象。凡事通泰大吉也。",
    "此卦自小为商之象。凡事勤俭无忧也。",
    "此卦鸾凤被雨之象。凡事待时大利也。",
    "此卦要逢知己之象。凡事守常则吉也。（惹本作各。知音方许本作食音方话。）",
    "此卦志气功名之象。凡事守常大吉也。",//95
    "此卦福德现身之象。凡事大吉利也。",
    "此卦当风点烛之象。凡事虚名不利也。（镜里花本作杨里花。童本作竟。累拾有作累累河山待收拾。幻浮槎本作自浮槎。浮槎指飞行物体。）",
    "此卦守旧随缘之象。凡事不如意主凶也。（急恐忧愁本作办恐开愁。脱困本作相逢。）",
    "此卦半忧半喜之象。凡事只宜行善也。（勒有作策。）",
    "此卦守常勿动之象。凡事宜待时吉也。" , //100
    "此卦功名成就之象，凡事宜进大吉也。",
  ],
  resolution: [
    "急速兆速。年未值时。观音降笔。先报君知。",  //1
    "得忍且忍。得耐且耐。须待时至。功名还在。",
    "千般用计。晨昏不停。谁知此事。到底劳心。",
    "淘沙成金。骑龙踏虎。虽是劳心。于中有补。",
    "欲望心事。西方可求。不如莫动。立地可谋。",  //5
    
    "食用无鱼。身清喜贫。待时利乐。权与概人。",
    "退身可得。进步为难。只宜守旧。莫望高扳。",
    "路上亨通。终身有功。田蚕丰熟。家道兴隆。",
    "心中正直。理顺法宽。圣无私语。终有分明。",
    "姻缘会遇。何事不成。须无限意。眼前是真。", //10
    
    "有意兴变。到底安然。若问用事。只近贵人。",
    "换麻得丝。击人双足。要见分明。因灾得福。",
    "囚人逢赦。病即安然。龙门得遇。名遍名都。",
    "任意无虞。路有亨通。随心自在。逍遥如人(神)。",
    "若人得怨。何时可伸。好言不信。守旧待时。",  //15

    "得处无失。损中有益。小人逢凶。君子顺吉。",
    "心中不定。枉看经文。恰似书饼。食也难吞。",
    "心中无事。所作有功。如弓上箭。一发当空。",
    "急水下船。险处待时。若问营谋。尽(不)可施为。（签诗与故事不合。）",
    "神佛护持。有灾无危。途生平安。到底荣归。", //20
    
    "谋望从心。婚姻孕男。资财进益。更利田蚕。",
    "田蚕倍熟。命运渐来。病遇良药。行人不便。",
    "商贾利益。行戴有(无)危。病安讼遂。尽可施为。",
    "是非莫说。必须仔细。心正理直。方免灾危。", 
    "讼终有理。病得安全。出入求谋。古井逢泉。", //25
    
    "上下心烦。求闲不闲。欲望功名。守旧身安。",
    "改旧成新。寒花遇春。从前阻滞。今得称心。",
    "浮云遮月。不须疑惑。等待云收。便见明白。",
    "宝剑出匣。光辉万里。贵人指引。无不观美。",
    "闭口含齿。他事莫理。若有亏心。到头害己。（故事与签诗不合。）", //30
    
    "守旧安然。叩问神仙。直待时来。事亦偶然。",
    "宝在石中。异人少知。直待分明。尽可施为。",
    "内藏金玉。不识外寻。遇贵指引。不须劳心。",
    "心中无事。秋水澄清。不须疑惑。事自然成。（故事与签诗有不合。）",
    "不用忧疑。自有佳期。若问前程。前路可宜。", //35
    
    "脱除了事。且自宽心。待得时来。堪寻正路。",
    "静处安身。待命守时。支惹非福。守旧相宜。",
    "家道忧凶。人口有灾。祈福保庆。犹恐破财。",
    "千般用计。枉费功夫。不如守旧。著甚来由。",
    "阴利女人。不宜男子。若是求谋。先凶后吉。", //40

    "只这一著。君子莫错。牢记在心。不生寂寞。",
    "天皇降恩。始终莫忘。晨昏礼念。可宜烧香。",
    "天生万物。谋望皆通。福德相助。瑞气匆匆。",
    "欲求心事。恰如围棋。到底胜利。宜用心机。",
    "天地有感。应验非常。佛神护佑。得之莫忘。", //45

    "守旧守旧。事自成就。动则多殃。静则无咎。",
    "守旧变新。运至材成。遂平生志。尽皆是命。",
    "昆化为鹏。万禽不能。桂香一折。福禄自增。",
    "水结成冰。冰消成水。若是营谋。到底如是。",
    "自在休悠。不须著力。财禄重重。无不欣美。", //50

    "进退莫疑。自有佳期。营谋用麼。不须妄为。",
    "言诺难思。费力劳心。宅中忧虑。等遇贵人。",
    "教去即去。自有亨通。到头必制。立地可谋。",
    "物在水中。形影长短。皆有分定。不用商量。",
    "接竹引泉。流传不绝。君子谋望。无不欣悦。", //55
    "营谋用事。劳心费力。守旧待时。凡事大吉。",
    "所用谋望。皆大欢喜。从公用力。如子逢娘。",
    "得住且住。可取且踞。莫宜别事。只宜守旧。",
    "如醉饮酒。只宜守旧。直待时来。无灾无咎。",
    "有千般计。一旦相惹。不如莫动。恐惹祸身。", //60

    "佳人在屋。吟唱诗曲。一片欢心。命中祸福。",
    "平平稳稳。四方名显。改旧从新。亦无凶险。",
    "福是缘基。缘是福种。说得分明。切宜守谨。",
    "屋下安身。祸从天降。早觉先防。免遭灾殃。",
    "知止则止。知宽自宽。割自身肉。疾痛一般。", //65

    "守旧守旧。安静无咎。不用求谋。自在优游。",
    "心平正直。到底清平。只依本份。天下太平。",
    "春深日暖。百花自开。事莫迟疑。从人显达。积善之家。必有馀庆。忠义之门。拱照福星。",
    "一箭射空。当空不空。待等春来。彩在其中。",
    "无觅春色。久雨不晴。求谋动用。不如安静。", //70

    "不出重重。事由天命。振六中开。切宜谨守。",
    "事须仔细。不用强求。结蜂采蜜。有甚来由。",
    "雷发时转。出入两存。一朝变化。直到天门。",
    "进身可(不)得。退步为(不)能。低头直去。悉在其中。",
    "危危险险。前程有阻。若问求谋。到底辛苦。", //75

    "虽是滋基。也要待时。营谋自本。切莫妄为。",
    "如梦说梦。声名莫望。只待好时。贵人指示。",
    "囚人逢赦。病遇良医。求财谋望。贵人指示。",
    "人有我见。心不用忙。观音指示。切莫轻慢。（签诗意许愿须还。与故事不合。）",
    "有始有终。莫向西东。心中用事。贵人重重。", //80

    "心中取事。天心从之。营谋用事。尽可施为。",
    "虽然逢险。不损其身。营谋用事。皆遇贵人。（签诗与故事不合。）",
    "守旧待待时。如月初出。待等圆时。无有不吉。",
    "寒鱼离水。美中不足。若问营谋。不如莫起。此签六甲煞旺。诸事不利。禳灾保安。",
    "老者用求。春残再开。欲求名利。晚遇横财。", //85

    "朝帝受职。如贫得宝。谋望从心。卦中第一。此签从心所欲。诸事皆吉。",
    "凿石见玉。淘沙见金。须要著力。只是劳心。困厄之境。无处安身。求神庇佑。祈可放心。（故事与签诗不合。）",
    "炉头点雪。似耳边风。可宜作福。后吉前凶。",
    "如石藏玉。贵人指示得祗称心。欢怀得意。",
    "若问功名。前有贵人。更添喜气。财禄丰盈。此签诸事佳吉。求之顺遂。", //90

    "一条大路。可向前行。心中用事。只可向前。此签诸事如心。顺利吉昌。（签意与故事不合。）",
    "自小至大。无阻无碍。作意营谋。功名顺遂。",
    "小人日盛。君子莫为。只宜守己。待时施为。",
    "知音方许。闲事莫理。待得贵人。无不欢喜。",
    "志气心动。守己未迟。金鸡报诺。无不欢喜。（签诗与故事不合）", //95

    "这些福份。众人皆有。不用心忙。福德前定。",
    "富贵在天。贫穷是命。不用求谋。皆是前定。",
    "守旧随时。待贵人至。若问诸般。主事定迟。",
    "终身劳力。莫管是非。枷锁临时。怨尤自至。",
    "完满灵签。尽报君加。信旧勿动。待等时至。此是满签。诸事不利。大作福力。可保平安。",  //100
    "若问功名。前有贵人。理添喜气。财禄丰盈。此卦无解，卦象无敌, 大吉也。"
  ],
  story: [
    //1
    "山中宰相之典故其实应该是六朝『陶弘景』，他是茅山派祖师之一，梁武帝在位时曾任官，後弃官入焦山（在茅山不远处）修道，梁武帝多次召见皆辞，武帝无奈只好以书信往来请益治理之道，时谓『山中宰相』，武帝曾好奇于信中问起山中修道之事，陶弘景作诗一首覆之，其诗曰：『山中何所有？岭上多白云，只堪自愉悦，不堪持赠君』。陶弘景亦擅书法，今留存者有焦山『瘗鹤铭』，刻凿於临水山壁，原有三百馀字，历两次为雷击中坠入江中，又称『雷打石』，後枯水时露出捞起将之置於山上寺庙壁上，但仅馀九十馀字。此铭向被誉为『书家冠冕』，评其书有仙气。",
    "战国。苏秦。洛阳人。师鬼谷子。游说秦王。书十二上其说。不行。裘敝金尽。憔悴而归。至家妻不下(织)机。(不理睬其夫)嫂不为炊。(不煮饭给其叔)秦惭怒。得太公阴符。发愤苦读。困怠时用锥刺股。痛而再读。後以合从(合纵)之说。联六国抗秦。说赵竟佩六国相印。",
    "（董永遇仙）汉。董永。千乘人。少失母。独养父。流寓孝感。父亡无以葬。乃从人贷钱一万。日後无钱还。当以身作奴。葬毕。道遇一妇人。求为永妻。永与俱诘。钱主令织缣(锦)三百疋以偿。一月而毕。辞永去。乃曰。我(系)天上织女。缘君至孝。玉帝令我助君偿债。言讫。凌空而去。（董永卖身）汉。董永。千乘人。少失母。独养父。流寓孝感。父亡无以葬。乃从人贷钱一万。日後无钱还。当以身作奴。葬毕。其主要董永日取柴一担。汲水四担。锄田六七亩。辛苦难当。一日上山砍柴倦睡。皇天见其孝行。即差仙女下凡为婚。董永醒来见女恐是妖精。女拦曰吾无父母又无依。欲结为夫妇。董永见其凄凉。带女回归。主人责董永拐带妇人祸及其主。後暂留该女。遍访四方家庭并无失妇人。才允成亲。董妇百日织得锦五十丈。剪一半往市卖出得银。赎脱董永身。後将锦进。敕封进宝状元。仙姬曰。天赐儿子三岁送还。(仙女回天) 。後其子十六岁中状元。衣锦还乡。",
    "荆录记。宋朝。钱玉莲与王十朋结婚。十朋上京赴考。孙汝权逼玉莲相嫁。玉莲投河自杀获救。十朋中状元。拒娶丞相之女为妻。二人几经波折。夫妻始复团圆。",
    "东汉。刘晨和阮肇国二人入山采药。遇二仙女。招至成亲。半年後二人回家。怎知至家已过百年。无人认识二人。二人返山找仙女。终不可得。喻有心花开花不发。无心插柳柳成荫。",
    
    //6
    "唐朝。薛仁贵三次投军。只任伙头。唐太宗(李世民)被盖苏追杀。危急之中。得仁贵救。即被唐太宗封为元帅。带兵东征。累立战功。",
    "周朝景王时。皇后苏英。善与鹦鹉对话。遭西宫梅玉春陷害。潘葛之妻代后受刑。娘娘逃至白马寺。腹痛产子。喻谁无逆境。随遇而安可也。",
    "",
    "（孔明点将）即诸葛亮。三国时。刘备三顾草庐。出任军师。曹操大将夏侯惇领兵来攻。孔明升帐。调兵点将。于博望坡败曹军。（三顾草庐）汉。诸葛亮。字孔明。琅琊人。汉末避居南阳。志学清修。养生之道。研究奇明(门)遁法。天文术数。卦算韬略。无所不精。初不求闻达於诸侯。後徐庶荐於刘先生。先主凡三往问计。延为军师。先主即位。拜丞相。受以托孤。後主封为武卿侯。卒諡忠武。",
    "战国。孙膑齐人。庞涓魏人。同师事鬼谷子。孙膑之学优於庞涓。涓为魏将。与膑斗智。输而忌之。乃以计刖其足。後孙膑假作颠狂。得脱归。齐威王以(膑)为师。将兵伐魏。庞涓至营地观阵。孙膑用减灶添兵之法。赚庞涓。追至马陵道。伏弩射死。",
    
    //11
    "书荐姜维(书献姜维)三国时。孔明带兵六出祁山。病重命危。将兵书二十四篇。传大将军姜维。望其秉承遗志。",
    "(见于封神榜)武吉本是樵夫。姜子牙钓于磻溪。二人相遇。见子牙用直钩钓鱼大笑。子牙看武吉气息断曰。今日入城打死人。武吉怒别。担柴入城。误触王相致死。文王画地为牢。武吉後被暂释。照顾老母至秋後正法。老母令其找姜子牙求救。太公收其为徒。授兵法。又令其挖坑施咒破解先天数。秋後不见武吉伏刑。文王演先天数。以为武吉已畏罪自杀。後文王碰见武吉。武吉引文王见姜太公。受封武德将军。师徒二人为文王效力。",
    "唐初。罗通十七岁。于校场比武获帅印。领兵北伐扫敌。後触怒唐太宗被免官。获程咬金求情得宽赦。喻少年得志。有成语曰。罗通扫北。",
    "(封神传)商朝纣王时。姜子牙火烧琵琶精後。获司天监职。官拜下大夫。纣王建鹿台。子牙谏王免劳民伤财。不果。逃回宋异人庄(宋家庄)上。欲与妻马氏离朝歌(首府)往西岐(文王首府)。其妻不肯。子牙写了休书。独自往西岐去。",
    "战国。苏秦。洛阳人。师鬼谷子。游说秦王。书十二上其说。不行。裘敝金尽。憔悴而归。至家妻不下(织)机 (不理睬其夫) 。嫂不为炊 (不煮饭给其叔) 。秦惭怒。得太公阴符。发愤苦读。困怠时用锥刺股。痛而再读。後以合从(合纵)之说。联六国抗秦。说赵竟佩六国相印。",
    //16
    "明朝。嘉靖年进士。万历年间。叶上朝晋见神宗皇帝。求领兵讨伐边寇。",
    "三国。曹操领兵。败季缺水。兵卒口渴。曹曰前有一梅林。到那当可吃梅解渴。望梅止渴出此。与画饼充饥同意。",
    "八仙之一。宋朝曹太后之弟。後散尽家财。周济穷人。入终南山修道。遇锺离权及吕洞宾。引入仙班。手持玉箫为其标志。",
    "唐朝大将军。平安禄山和史思明之乱。历七帝。唐肃宗拜为大元帅。封为汾阳郡王。刚八十岁。知有敌侵犯。郭子仪即披挂上阵。八十五卒。",
    "周。姜尚。字子牙。汲人(东海许州人)。道号飞熊。先世封於吕。亦曰吕望。避纣乱居东海之滨。钓於磻溪(渭水)。其钩为直。意不在鱼。志在君相。文王闻其贤。聘为师(丞相) (其时年八十)。後周伐纣。灭商兴周。武王称曰尚父。封其子丁公於齐。",
    //21
    "李旦为唐睿宗。武则天登基。皇帝贬作平民。流落乡间。巧与胡凤姣相遇。结为夫妇。龙指睿宗。喻婚姻由天也。",
    "杨延昭为杨业之六子。称六郎。杨业统率三军。被番邦围困。杨业头撞李陵碑而亡。杨七郎讨救兵被箭射死。六郎撤退至葫芦谷。得五台山和尚(杨五郎)相救出险。喻及时雨也。",
    "高怀德乃开国功臣。陈桥兵变。皇袍加身。高怀德拥赵匡胤做皇帝。又娶宋太祖赵匡胤之妹。燕国公主为妻。官封驸马都尉。後领兵与杨家将同征辽国。",
    "(封神榜)殷郊是商朝纣王之子。拜广成子为师。三年後学得法术。下山时曾向广成子宣誓。不帮纣王干坏事。往投靠文王。半途受人唆使回家协助纣王。师父往劝。师徒大打出手。後姜子牙合燃灯道人。把殷郊夹于两山之间。被广成子铲死。以应其誓。",
    "",
    //26
    "姓锺名馗。字正南。中南山人氏。唐时人。上京赴考。得状元。但相丑。豹头环眼。铁面虬须。唐德宗见怕。欲取消其名衔。宰相卢杞附和。锺馗打卢杞。德宗命拿钟馗。钟馗夺剑自杀。陆贽进谏。封为驱魔大神。锺馗以为鬼魔必在地府。遂往斩之。阎君曰：大凡人鬼之分只在方寸间，心正之鬼可为神，心歪之人即为鬼。姓锺大悟。阴间鬼魅有十殿阎君经理。遂返阳间斩妖除魔。成了捉鬼大王。",
    "明朝。青田人。字伯温。通经史。工诗文。精天文兵法。佐朱元璋统一天下。时朱拣领兵往安丰。解除该城之围困。刘基急来劝阻。判断此去必败。如刘基所料。元璋被困。将军徐达及常遇春相救。才得脱险。",
    "（朝野史）宋李后(妃)为奸佞郭槐所害。所怀太子生後被换貍猫。包公夜审郭槐。寻回李后。真相大白。李后乃宋真宗妃。给刘妃陷害。把貍猫剥皮去尾。调换太子。李后被打入天牢十年。哭泣至失明。出狱後乞食。包公审此案。真相大白。",
    "三国。赵云。字子龙。常山人。初依袁绍。後从刘(备)先主。时曹操欲下江南。先攻先主於莘野。先主走樊城。复败於当阳。家眷失散。云於土墻下遇縻夫人。夫人将子阿斗托云。云将马授夫人。夫人不肯授。投井而死。云哭埋毕。怀抱阿斗。杀出重围。(阿斗乃刘备之子即刘禅。)",
    "唐太宗时。薛仁贵西征被困。仁贵之子薛丁山与其妹往救。至棋盘山。窦一虎劫粮不果。匪妹窦仙童迎战并擒丁山。程咬金做媒。两对兄妹结为夫妇。同往救薛仁贵。喻冤家变亲家。贼匪从良。",
    //31
    "佛印姓谢名端卿。表字觉老。江西饶州府浮梁县人氏。因应举至京。宋神宗因天旱求雨。往大相国寺临坛。谢端卿欲瞻龙颜。东坡允其充作侍者。神宗见捧茶侍者慌忙。问其出处。端卿巧答。皇帝大悦。赐名了元。号佛印。即时披剃为僧。端卿无奈成为和尚。喻人莫无事生事。做事勿慌忙。否则生祸。（警世恒言十二卷）谢端卿被逼成为和尚。苏东坡欲以美女色诱佛印。使其还俗。趁佛印酒醉。逼琴娘陪寝。佛印不为所动。并常以佛理晓悟东坡。东坡终成正果。有诗曰。东坡不能化佛印。佛印反得化东坡。若非佛力无边大。那得慈航渡爱河。(爱河指东坡之情欲。其有七位妻妾。)",
    "（刘备求贤）三国时。诸葛亮隐居于隆中之茅屋。刘备求贤。往访三次才得见孔明。谕有宝心安。得意迟早。静待时机。不请自来。（三顾草庐）汉。诸葛亮。字孔明。琅琊人。汉末避居南阳。志学清修。养生之道。研究奇明(门)遁法。天文术数。卦算韬略。无所不精。初不求闻达於诸侯。後徐庶荐於刘先生。先主凡三往问计。延为军师。先主即位。拜丞相。受以托孤。後主封为武卿侯。卒諡忠武。",
    "薛仁贵于山上午睡。突见程咬金路过被虎追。仁贵打虎。救了咬金。程咬金给令箭一枝。著仁贵投军。薛仁贵後成唐朝名将。程咬金为唐之开国功臣。喻有宝之人。终有出头之日。",
    "大丈夫(关公)以四海为家。何患乎吾无兄弟。入桃园。睹两人奇异。请问英雄何处。雄紏紏。朗曰张飞。貌堂堂。温言刘备。出生投地今逢主。须待挽天河水来荡涤。诚哉龙虎风云会。宰牛马昭告天地。结义匡扶汉室。",
    "唐三藏信姓陈名禕。十三岁出家。法号玄奘。往天竺(印度)取经。历尽艰辛。四年始达。学习十五年後返国。携回大量佛经。并译成中文。西游记内述其故事。",
    //36
    "韩湘子乃八仙之一。其标志为手持花篮。唐朝诗人。姓韩名湘字若云。湘祖名仲卿。父名会。为韩愈之侄。自少学道。吕洞宾度之登仙。号瑶华帝君。",
    "托塔天王李靖。为封神榜人物。塔能镇魔。李靖父子(哪吒)协姜子牙伐纣兴周。周武王立国初论功行赏。李靖父子辞赏归山修道。喻风云(名利)与灯烛(修道)不相合。欲要得道。须弃名利。两者不可兼得。",
    "（玉钗记）穷书生何文秀琅琅书声。感动了富家女王琼珍。吹箫与之相和。後王女出奔。何文秀被陷入狱。王琼珍剪发改容。历尽艰辛。终成眷属。",
    "野史。秦。孟姜女。夫范杞郎(万喜良)。新婚奉命作长城之役。姜女往寻之。及至。知夫已死。欲寻骸骨归葬。神为指处咬指出血。点认夫骨。号恸大哭。长城为之崩。妇人守节。自孟女始。",
    "武则天本唐太宗之妃。高宗即位。成为皇后。高宗逝世。上朝摄政。後自立则天皇帝。改国号曰周。执政十五年。颇多建树。但手段卑劣。",
    //41
    "三国演义。枭雄董卓。以良马及金钱收卖吕布。又认吕布为义子。後吕布私通董卓爱妾貂蝉。二人交恶。吕布与王允共杀董卓。并劝王允尽诛。董卓部属。後吕布败于曹操。擒杀。",
    "",
    "西游记载。行者本为花果山猴王。访求仙法。拜须菩提祖师作师父。祖师赐姓孙。法名悟空。历七年也不知何者为道。祖师打悟空头三下又倒背著手。悟空明白打三下即三更时份。倒背著手指从後门授道。于是祖师授悟空长生之道。又过三年。更修得七十二变。离家二十年後。返回花果山。",
    "三国时。姜维(蜀)与邓艾(魏)会师祈山。二人皆摆八卦阵。姜维又摆长蛇阵。邓艾被困。得司马望救出。喻世事如棋。一子莫错。",
    "",
    //46
    "周。姜尚。字子牙。汲人(东海许州人)。道号飞熊。先世封於吕。亦曰吕望。避纣乱居东海之滨。钓於磻溪(渭水)。其钩为直。意不在鱼。志在君相。文王闻其贤。聘为师(丞相) (其时年八十) 。後周伐纣。灭商兴周。武王称曰尚父。封其子丁公於齐。喻静待时机也。",
    "宋朝。书生梁灝字太素。山东人氏。雍熙年间。十八岁考得进士。继续投考未遂。至老年(八十)才一举登科。状元及第。",
    "韩信。淮阴人。时汉王烧绝栈道。部下将士逃亡甚多。其时。信归汉逃去。何知之。连夜追信回。翌日王知。怒曰将士逃亡过半。不闻丞相有所追。独追信。何也。何曰大王如无意东伐。固罢。若与楚争天下。非信莫当其任。乃拜信为大将。佐汉高帝定天下。虏魏。破赵。降燕。下齐。灭楚。建十大功勋。初封楚王。",
    "(廿四孝)晋。王祥字伏徵。临沂人。性至孝。事继母极恭。谨母欲食生鱼。天寒冰冻。祥赤身卧於冰上。求之。其冰立解。得双鲤。持归。人以为孝感云。後官至太保。进公爵。",
    "(范蠡归湖)春秋。范蠡。字少伯。吴人。与文种同为我大夫。吴灭越。蠡与种。为越王勾践画策。卑词请成。复求民间美女。得西施进於吴。迨灭吴。功成。蠡知勾践可与同患难。不可共安乐。乃辞官。扁舟泛五湖。止于陶。复以谋生致富。称陶朱公。凡三徙。方成名。後不知所终",
    //51
    "刘备缺地盘。时益州的刘璋。被北方的张鲁攻打。想到刘备与他同姓同宗。就让刘备入益州同抗张鲁。孔明随刘备入益州。详察地势。西川一带。地形险要可攻可守。经孔明多方布置。西川就成了刘备发源地。",
    "唐朝诗人。自曰谪仙。被称诗仙。无酒不欢。醉酒到湖边。见月在水中。欲抱之。溺毙。年六十二岁。",
    "刘玄德。即西蜀先主也。为荆州牧时。甘夫人(刘备妻)新丧。东吴孙权闻知。诈以妹招赘欲赚(软禁)其人。吴素讨荆州。孔明料知。乃授赵云锦囊计。保先主入吴。(东江招亲)意弄假成真。娶孙夫人以归焉。有曰：周郎妙计高天下。赔了夫人又折兵。",
    "三国时。曹操杀马超之父。马超攻曹操。曹操大败。曹操脱下锦衣。割短了胡须。骑马逃窜。得曹洪相救。曹操得以保命。",
    "周武王伐纣。八百诸侯战商军。朝歌兵卒倒戈相向。纣王于摘星楼上自焚。商朝灭亡。武王受册宝。即天子位。面南垂拱端坐。武王命散鹿台之财。拆毁摘星楼。发钜桥之粟。释箕子之囚。封比干之墓。式商容之闾。放内宫之人。又偃武修文。归马于南山之阳。放牛于桃林之野。一片安乐景象。",
    //56
    "营州柳城。胡人。本姓康。字轧荦山。後冒姓安。更名禄山。唐玄宗时。安禄山为节度使。与杨贵妃友好。与杨国忠有隙。于山西举兵谋反。攻打洛阳。又陷潼关。改国号燕。皇帝西逃至四川(蜀)。安禄山于长安烧杀抢掠。後被自己之子所杀。",
    "董仲寻亲或指董永之子。董仲欲寻母。至太白山找。终见其母。（董永卖身）汉。董永。千乘人。少失母。独养父。流寓孝感。父亡无以葬。乃从人贷钱一万。日後无钱还。当以身作奴。葬毕。其主要董永日取柴一担。汲水四担。锄田六七亩。辛苦难当。一日上山砍柴倦睡。皇天见其孝行。即差仙女下凡为婚。董永醒来见女恐是妖精。女拦曰吾无父母又无依。欲结为夫妇。董永见其凄凉。带女回归。主人责董永拐带妇人祸及其主。後暂留该女。遍访四方家庭并无失妇人。才允成亲。董妇百日织得锦五十丈。剪一半往市卖出得银。赎脱董永身。後将锦进。敕封进宝状元。仙姬曰。天赐儿子三岁送还。(仙女回天) 。後其子十六岁中状元。衣锦还乡。",
    "周文王善卜卦。纣王召见。文王卜之不吉。必有七年之厄。严命其长子依旧法治岐。切莫往外。文王果被纣王软禁于羑里。後其子往救其父被杀。皆因忘父命离乡也。文王于羑里从旧艺。编修易经。故文王也是易经作者之一也。(另二位作者是同公与孔子)",
    "汉。张良。字子房。韩人。其先五世相韩。秦灭韩。良散家财遁迹。欲为韩报仇。乃使力士怀铁锥。击始皇於博浪沙上。误中副车。始皇大索天下。十月不获。後左(佐)汉定天下。功成谢绝人事。托名与赤松子游。",
    "三国时。曹操大军驻赤壁岸边。孙权将周瑜。联刘备军抗曹。孔明借东风。黄盖引火烧连环船。二军激战。一片火海。曹军大败。史称赤壁之战。(鏖指烧杀。)",
    //61
    "(恒世恒言)宋朝。苏小妹即苏东坡之妹。博学多才。新婚之夜。苏小妹吟诗又出对联。备三个难题考夫婿。有意刁难新郎秦少游。至第三题苦思著。幸好得苏东坡暗助。才可洞房。有颂曰：文章自古说三苏，小妹聪明胜丈夫；三难新郎真异事，一间秀气世间无。",
    "唐三藏信姓陈名禕。十三岁出家。法号玄奘。往天竺(印度)取经。历尽艰辛。四年始达。学习十五年後返国。携回大量佛经。并译成中文。一天来到河边。佛祖灵山在望。有一独木桥。唐僧不敢走过。佛祖化身船夫并撑著无底破船。唐僧跌下河中。被船夫救起。唐僧就此得证佛道了。",
    "淮南子。览冥篇。往古之时。四极废。九州裂。天不兼覆。地不周载。火爁炎而不灭。水浩洋而不息。猛兽食颛民。鷙鸟攫老弱。于是女娲炼五色石以补苍天。断鰲足以立四极。杀黑龙以济冀州。积芦灰以止泛水。苍天补。四极正。泛水涸。冀州平。狡虫死。颛民生。背方州。抱圆天。当此之时。禽兽虫蛇。无不匿其爪牙。藏其蜇毒。无有攫噬之心。考其功烈。上际九天。下契黄垆。名声被後世。光晖熏万物",
    "马前覆水(覆水难收) 汉朝。名臣姓朱。名买臣。表字翁子。会稽郡人氏。家贫未遇。夫妻二口住于陋巷蓬门。砍柴卖钱度日。卖柴凭人估值。不争价钱。其妻出门汲水。见群儿嬉笑买臣。深以为耻。其妻後去。五十岁时。汉武帝求贤。拜为会稽太守。其妻自悔有眼无珠。愿降为婢妾。伏事终身。买臣命取水一桶。泼于阶下曰。若水可收。则可复合。念结发之情。判後园隙地与妻及其夫耕种自食。其妻遂投河而死。（买臣五十富贵）汉。朱买臣。会稽人。家贫。卖薪自给。行歌诵书。妻羞之。求去。买臣曰。吾年五十当富贵。即时自可报汝。妻不听。适田夫後。买臣果五十为会稽太守。妻与田夫治道迎官。买臣驻车呼之。以车载其夫妇。舍园中给食一月。妻惭自缢。与夫钱以葬之。",
    "战国。孙膑齐人。庞涓魏人。同师事鬼谷子。孙膑之学优於庞涓。涓为魏将。与膑斗智。输而忌之。乃以计刖其足。後孙膑假作颠狂。得脱归。齐威王以(膑)为师。将兵伐魏。用减灶添兵之法。赚庞涓。追至马陵道。伏弩射死。",
    //66
    "(项羽被困)韩信率诸侯兵。与楚王大战於九里山。十面埋伏。围籍垓下。籍走至乌江。有高长牺舟以待曰。今独臣有船。王急渡江东。亦足王也。籍笑曰。江东子弟仝籍。渡江西诛秦无道。今无一人还。纵江东父兄。怜而王我。我独不愧於心乎。竟自羽(刎)而死。",
    "",
    "唐朝大将军。汾阳王郭子仪。做大寿。亲友来贺。气氛一片欢乐。喜气洋洋。",
    "唐朝。一日梅花皆被风雨打落。梅良玉与陈公父女。拜求上天再开梅花一次。果梅花再开。是为梅开二度。其後梅良玉中元。终与陈杏元(陈公女)联姻。",
    "隋末。瓦岗寨之首领。李密自封魏王。手下名将。如秦琼。单雄信。程咬金。纷投唐王李渊。李密与王伯当後亦投李渊。又娶李仁公之公主为妻。後杀妻反唐。被乱箭射死。",
    //71
    "汉朝。卓氏有女名文君。新寡。好文诗。听司马相如弹琴。遂起心。乘夜奔往相处。谈得投机。互倾恋慕。二人私奔出城。至成都结为夫妻。但家贫。两夫妇在临邛市。开设酒店。一箇是才子。一箇是佳人。两家都要当炉卖酒。司马相如後大贵。",
    "汉。王莽依其姑母乃汉元帝之后。官封为新都侯。为人谦恭。又广结豪杰贤能。仗义疏财。後王莽篡汉。改国号曰。新。刘秀起来推翻王莽。恢复汉室。史称後汉。",
    "宋太祖赵匡胤。仕局为检点。世宗崩。子恭帝立。仅数岁。(赵)奉命往伐河东。兵至陈桥。部下将士以主幼政乱。劝太祖即位。初不许。後乘太祖醉卧。以黄袍加体。乃引兵回东。受周恭帝禅位。(恭帝当年七岁。皇后新寡。兵变比禅让更合。)",
    "秦穆公不听老臣蹇公之言。出师侵郑。与晋人战於肴。秦师给晋国诱入险谷。前路被堵塞。两旁晋兵抛火种磺硝。後面晋兵杀声震天。秦军自相践踏。死伤无数。不敌而至大败。三个大元帅。俱皆被擒。",
    "伍子胥。春秋时代楚人。楚平王追杀之。日藏夜行。翻山越岭。至边境关卡韶关。守关的竟认不出伍员。因他终日焦虑。一夜白头。後平安到达吴国。",
    //76
    "洪武即明太祖朱元璋。小时家贫。替人看牛。後当过和尚。又行乞度日。最终参军打败元兵。建立明朝。喻英雄莫问出处。",
    "(完璧归赵)春秋时代。秦强赵弱。秦王欲十五城交换和氏璧。赵国大夫蔺相如携璧至秦。见秦王欲占不换此璧。蔺相如以砸碎和氏璧相要。最後终可携璧归赵。",
    "隋末。唐王李渊经过临潼山下。秦琼(叔宝)正。于伍员庙午睡。被喊声吵醒。秦琼冲进重围。杀退敌人。救了王爷一家。即被唐王重用。成为唐朝之开国功臣。",
    "隋末。东领关由杨义成镇守。并摆出铜旗阵。秦叔宝久攻不下。探知护阵主将罗成是他表弟。便联络姑母。命其子明保铜旗。暗助叔宝。秦叔宝破了铜旗阵。占领东岭关。得胜而归。",
    "刘智远(知远)。沙陶(沙陀族)人。刘志远与妻李三娘居舅家。舅嫌其贫。哄志远往瓜园。欲给二瓜精吃掉。志远夜持鎗。战瓜精走入地。掘开见剑。拾之辞妻投军。投靠岳勋。官至安抚使。契丹灭晋。中原无主。智远于晋阳即帝位。改国曰后汉。仍称天福而不改元。",
    //81
    "唐朝咸淳年。南昌滕王阁重建成。王勃欲往。睡梦中水神曰送君一帆。醒来至江边。果见一船。上船後不久。即至滕王阁(离家七百里)。书滕王阁序。王勃乃唐高宗朝间一秀士。姓王名勃字子安。祖贯山西晋州龙门人氏。善诗。有颂曰：从来才子是神仙。风送南昌岂偶然。赋就滕王高阁句。便随仙仗伴中源。(中源指水神称中源水君。暗喻王勃成仙也)。",
    "三国。赤壁之战曹操大败。落荒而逃。孔明派大将于各处埋伏。曹操至葫芦谷口休息。见地势险要又无伏兵而哈哈大笑。忽闻炮响。张飞杀到。山谷到处起火。曹操急上马。狼狈奔逃。败走华容道。",
    "公元六一八年。隋炀帝在江都看琼花。被部下杀死。唐王李渊得知。即于太原登基称帝。国号唐。李渊(唐高祖)在位九年。由李世民传唐太宗)接位。喻境况渐入佳景。",
    "周朝。姓庄名周。字子休。宋国蒙邑人。仕周为漆园吏。庄子假死试妻。其妻田氏守孝。七天後有一楚国王孙公子到访。自称庄子之徒。愿执百日之丧。田氏爱公子俊美。不足廿日成婚。公子叫心疼。曰脑髓(人心)可治。田氏往劈庄子棺以取脑髓(人心)。庄子破棺而出。後田氏羞愧自杀。",
    "韩愈。字退之。昌黎人。唐德宗贞元八年进士。諡文公。因谏迎佛骨。独怒天子。贬至潮州刺史。途经蓝关。大雪封山。韩叹皇上不杀我。皇天亡我矣。事前其侄韩湘子曾曰：云横秦岭家何在。雪拥蓝关马不前。此时韩文公才悟其意。後韩愈弃官。财产尽捐地方。入山修道成仙。",
    //86
    "三元记。明朝。商辂。浙江人。父早亡。商辂三元及第。喻步步高升也。(三元即三级试。乡试：解元。省试：会元。殿试：状元。)",
    "为庆战功。程咬金于演武杨摆宴。忽地裂一洞。深不可测。大家拈字抽签。咬金抽得。租绳缚身入穴。见石造之门桌椅桥等。桌上还有龙袍玉带。咬金穿著出洞。做了三年混世魔王。",
    "宋朝仁宗。包公为开封府府尹。庞洪为国丈(皇帝作女婿)。陷将军狄青于狱中。包公求审此案。庞洪惊畏万分。多方阻拦。後案情大白。证实庞洪诬陷。呈宋仁宗圣裁。又因皇戚被释。",
    "琼花年开一次。且在晚间隋炀帝。听得扬州有琼花。即动用民工开凿运河。南下扬州看花。被杀隋亡。或指欣赏仙境之宝花。",
    "(韦佩遇仙)穷书生韦佩年近四十。牵驴过洛阳桥。一渔夫卖大鳖。韦佩不忍。但缺钱。遂以驴换鳖。于桥下放生。从此韦佩中举。加官晋爵。或指此鳖为仙所化。故曰韦佩遇仙。",
    //91
    "三国时。吕布领兵三万入驻虎牢关。张飞持三叉戟与吕布持丈八矛相战。不分胜负。关羽持青龙偃月刀加入。刘备又加入战圈。是为三英战吕布。吕布见不能胜。逃回关内。",
    "蔡卿即蔡伯喈(蔡邕)。上京赴考。其妻赵五娘。因家贫以糟糠果腹。乡邻张广才时加接济。蔡伯喈中了状元。回家得知其妻获张广才相帮。夫妻便到张家拜谢。并赠银两。",
    "高君保(高俊保)为高怀德之子。赵匡胤领兵征南唐被困。高君保领兵二百押粮接济。至双锁山。被女贼刘金定劫持。并强逼成亲。夫妻领众杀入重围。救出赵匡胤。",
    "(伯牙碎琴)春秋战国。姓俞名瑞字伯牙。楚国郢都人。事晋退休。乘船遇荒山。见樵夫子期欣赏其琴。遂结契兄弟。相约一年後重叙。到期再往访。才知锺子期已死。往访其坟。断弦碎琴。曰：摔碎瑶琴凤尾寒。子期不在对谁弹。春风满面皆朋友。欲觅知音难上难。",
    "曹丕为曹操之次子。曹操挟天子(汉献帝)以令诸侯。曹丕废献帝自立。改国号为魏。七年後又被手下司马炎废掉。改国号为晋。",
    //96
    "宋朝。窦燕山中年无子。一夜梦中。其父训他去恶从善。自此窦燕山痛改前非。力行方便。并得五子。三字经有载：窦燕山。有义方。教五子。名俱扬。",
    "三国。祁山横亘于魏蜀间。孔明屡出祁山伐魏不果。第六次出祁山。孔明写了出师表。终不能胜。且死于五丈原。喻时也命也。到头来一切皆空。",
    "三国。医师吉平。感于曹操挟天子以令诸侯。欲杀奸臣。恰曹操头痛。吉平往治。药中下毒。曹操发觉。严刑拷打吉平。吉平大骂曹操。一头撞于石柱自杀。",
    "宋朝。陶洪之女。陶三春与郑恩比武成亲。生子郑印。娶妻王玉娥。皆习武。後闻郑恩与赵匡胤出兵南唐被围。陶三春带同子媳攻打南唐。两师会合。得胜而回。",
    "北周武帝时。三教(儒释道)互相排斥。皇帝召集大会辩论。经过三次争辩。没得结论。喻道在我教。理存我方。争执不止。痴事一桩。", //100
    "(韦佩遇仙)穷书生韦佩年近四十。牵驴过洛阳桥。一渔夫卖大鳖。韦佩不忍。但缺钱。遂以驴换鳖。于桥下放生。从此韦佩中举。加官晋爵。或指此鳖为仙所化。故曰韦佩遇仙。"
  ]
}

//==============================对外开放接口============================
module.exports = {
  prayContent: prayContent
}