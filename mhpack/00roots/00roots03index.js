
const 	mhindex			= document.getElementsByClassName("mhindex")[0];
const	mhindexnav		= document.getElementsByClassName("mhindexnav")[0];
const	mhindexbody		= document.getElementsByClassName("mhindexbody")[0];
const	mhindexfooter	= document.getElementsByClassName("mhindexfooter")[0];


		// ------------------------------------------------------------------------------------------------
		// 01 NAVIGATION
		mhindexnav.innerHTML+=`		<div class="mhindexnav">
		<div class="indexnav01">	</div>
									</div>
									`;
		// ------------------------------------------------------------------------------------------------
		// 02 BODY
		mhindexbody.innerHTML+=`	
		<div class="mhindexbody">	<div class="indexbody00">	<h1>${famtext.name01}</h1>
																<h1>${famtext.name02}</h1>
																<p>${famtext.name03}</p>
																</div>

									<div class="indexbody01">	<a>&#9679;</a>
																<a>&#9679;</a>
																<a>&#9679;</a>
																<a>&#9679;</a>
																</div>
									</div>
		</div>
									`;
		// ----------------------------------------------------------------------------------------------
		// 03 FOOTER 
		mhindexfooter.innerHTML+=`	<div class="mhindexfooter">
		<div class="indexfooter01">	
									</div>
		</div>
		`;
		// ----------------------------------------------------------------------------------------------
		// 00 BACKGROUND 
		mhindex.innerHTML+=`	<div class="mhindex">	
		<div class="mhindex01">	<img src="${indeximg.img11}"/>
								</div>
								</div>
								`;
