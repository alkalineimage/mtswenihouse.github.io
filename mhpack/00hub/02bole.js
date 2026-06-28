
const 	mhindex			= document.getElementsByClassName("mhindex")[0];
const	mhindexnav		= document.getElementsByClassName("mhindexnav")[0];
const	mhbolebody		= document.getElementsByClassName("mhbolebody")[0];
const	mhindexfooter	= document.getElementsByClassName("mhindexfooter")[0];

	// ------------------------------------------------------------------------------------------------
	// 01 NAVIGATION
	mhindexnav.innerHTML +=`
	<div class="mhindexnav"> <div class="indexnav01"> 		
							 <h1>${famtext.name00}</h1>		
							 </div>
	</div>
	`;
	// ------------------------------------------------------------------------------------------------
	// 02 BODY
	mhbolebody.innerHTML+=`	
	<div class="mhbolebody">	<div class="bolebody00">	</div>
								
	</div>
	`;
	// ----------------------------------------------------------------------------------------------
	// 03 FOOTER 
	mhindexfooter.innerHTML+=`
	<div class="mhindexfooter">	<div class="indexfooter01">	</div>
	</div>
	`;
	// ----------------------------------------------------------------------------------------------
	// 00 BACKGROUND 
	mhindex.innerHTML+=`
	<div class="mhindex">	<div class="mhindex01">
							<img src="../03imgs/01roots/01bgs/04bg.jpg"/>	
							</div>
	</div>
	`;
