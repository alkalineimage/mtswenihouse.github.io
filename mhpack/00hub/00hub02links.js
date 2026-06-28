
const 	levels = [{
		id:0,	level00:	"/"									,
				level01:	"../"								,
				level02:	"../../"							,
				level03:	"../../../"							,
				level04:	"../../../../"						,
				level05:	"../../../../../"					,
				level06:	"../../../../../../"				,
				level07:	"../../../../../../../"				,
				level08:	"../../../../../../../../"			,
				level09:	"../../../../../../../../../"		,
				level10:	"../../../../../../../../../../"	
				}] 
const 	level = levels[0];

const 	commonnames = [{
		id:0,	webp:	".html",
				photo:	".jpg",
				}]
const 	commname = commonnames[0];

const 	sitelocations = [{
		id:0,	//////////////////
				lv00:			"/",
				//////////////////
				lv01:			"mhpack/",
				//////////////////
				lv0200hub:		"mhpack/00hub/",
				//////////////////
				lv0201html:		"mhpack/01html/",
				//////////////////
				lv0202css:		"mhpack/02css/",
				//////////////////
				lv0203imgs:		"mhpack/03imgs/"	,
				lv020300index:	"mhpack/03imgs/00index/"	,
				lv020301roots:	"mhpack/03imgs/01roots/"	,
				lv02030101roots:	"../03imgs/01roots/01bgs/"	,
				lv020302bole:	"mhpack/03imgs/02bole/"	,
				//--//
				lv02030101bgs:	"mhpack/03imgs/01roots/01bgs/"	,
				lv02030102icns:	"mhpack/03imgs/01roots/02icons/"	,
				//--//
				}]
const 	locat = sitelocations[0];

const 	pagefiles = [{
		id:0,	pgindex:		"index.html",
				//////////////////
				pgroots:		"01roots.html",
				pg01principles:	"01roots_pg01.html",
				pg02values:		"01roots_pg02.html",
				pg03norms:		"01roots_pg03.html",
				pg04legacy:		"01roots_pg04.html",
				//////////////////
				pgbole:			"02bole.html",
				pgbeams:		"03beams.html",
				pgbranches:		"04branches.html",
				pgleaves:		"05leaves.html",
				pgfruit:		"06fruit.html",
				}]
const 	pgfile = pagefiles[0];

const 	indexpages = [{ 
		id:0,	////////////////// INDEX LINKS
				index00:	locat.lv00+pgfile.pgindex,
				roots00:	locat.lv0201html+pgfile.pgroots,
				bole00:		locat.lv0201html+pgfile.pgbole,
				beams00:	locat.lv0201html+pgfile.pgbeams,
				branches00:	locat.lv0201html+pgfile.pgbranches,
				leaves00:	locat.lv0201html+pgfile.pgleaves,
				fruit00:	locat.lv0201html+pgfile.pgfruit,
					//---- Roots Links
					roots001:	locat.lv0201html+pgfile.pgroots,
					roots002:	locat.lv0201html+pgfile.pg01principles,
					roots003:	locat.lv0201html+pgfile.pg02values,
					roots004:	locat.lv0201html+pgfile.pg03norms,
					roots005:	locat.lv0201html+pgfile.pg04legacy,

		}]
const 	page = indexpages[0];

const 	images = [{
		id:0,	////////////////// INDEX IMAGES
				img00:	locat.lv020300index+"01rootsimg00.jpg"	, 
				img01:	locat.lv020300index+"01rootsimg01.jpg"	, 
				img02:	locat.lv020300index+"01rootsimg02.jpg"	, 
				img03:	locat.lv020300index+"01rootsimg03.jpg"	,
				img04:	locat.lv020300index+"01rootsimg04.jpg"	,
				img05:	locat.lv020300index+"01rootsimg05.jpg"	,
				img06:	locat.lv020300index+"01rootsimg06.jpg"	,
				img07:	locat.lv020300index+"01rootsimg07.jpg"	,
				img08:	locat.lv020300index+"01rootsimg08.jpg"	,
				img09:	locat.lv020300index+"01rootsimg09.jpg"	,
				////////////////// ROOTS
				img10:	locat.lv020300index+"01rootsimg10.jpg"	,
				img11:	locat.lv020300index+"01rootsimg11.jpg"	,
				img12:	locat.lv020300index+"01rootsimg12.jpg"	,
				img13:	locat.lv020300index+"01rootsimg13.jpg"	,
				img14:	locat.lv020300index+"01rootsimg14.jpg"	,
				img15:	locat.lv020300index+"01rootsimg15.jpg"	,
				img16:	locat.lv020300index+"01rootsimg16.jpg"	,
				img17:	locat.lv020300index+"01rootsimg17.jpg"	,
				img18:	locat.lv020300index+"01rootsimg18.jpg"	,
				img19:	locat.lv020300index+"01rootsimg19.jpg"	,
				img20:	locat.lv020300index+"01rootsimg20.jpg"	,
				img21:	locat.lv020300index+"01rootsimg21.jpg"	,	
				}]
const 	pageimg = images[0];

