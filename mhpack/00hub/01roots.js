
	const 	mhindex			= document.getElementsByClassName("mhindex")[0];
	const 	mhindexnav		= document.getElementsByClassName("mhindexnav")[0];
	const	mhrootsbody		= document.getElementsByClassName("mhrootsbody")[0];

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
	mhrootsbody.innerHTML +=`
	<div class="mhrootsbody">
								<div class="bodysplash">
								<div class="bodysplash01"><p>${rootstext.pgintro}</p></div>
								</div>

								<div class="bodycontent">
								<div class="rootsbox">
								<h1 class="rootsboxno">${rootstext.pg01no}</h1>
								<a class="rootsboxtitle" href="${page.roots01}">${rootstext.pg01title}</a>
								<p class="rootsboxline"> <!--separator line--></p>
								<p class="rootsboxdescr">${rootstext.pg01descr}</p>
								</div>
								<div class="rootsbox">
								<h1 class="rootsboxno">${rootstext.pg02no}</h1>
								<a class="rootsboxtitle" href="${page.roots02}">${rootstext.pg02title}</a>
								<p class="rootsboxline"> <!--separator line--></p>
								<p class="rootsboxdescr">${rootstext.pg02descr}</p>
								</div>
								<div class="rootsbox">
								<h1 class="rootsboxno">${rootstext.pg03no}</h1>
								<a class="rootsboxtitle" href="${page.roots03}">${rootstext.pg03title}</a>
								<p class="rootsboxline"> <!--separator line--></p>
								<p class="rootsboxdescr">${rootstext.pg03descr}</p>
								</div>

								<div class="rootsbox">
								<h1 class="rootsboxno">${rootstext.pg04no}</h1>
								<a class="rootsboxtitle" href="${page.roots04}">${rootstext.pg04title}</a>
								<p class="rootsboxline"> <!--separator line--></p>
								<p class="rootsboxdescr">${rootstext.pg04descr}</p>
								</div>

								</div>
								

	</div>
	`;
	// ----------------------------------------------------------------------------------------------
	// 00 BACKGROUND 
	mhindex.innerHTML+=`
	<div class="mhindex">	<div class="mhindex01">
							<img src="../03imgs/01roots/01bgs/05bg.jpg"/>
							</div>
	</div>
	`;
