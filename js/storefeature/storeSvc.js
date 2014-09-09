angular.module("storeFeature")
	.factory("storeSvc",  function ($rootScope, $log){
		var luxuryproducts = [

			{
				bag: "Monogramme Cabas leather-trimmed suede tote",
				designer:"SAINT LAURENT",
				price:"$2,490",
				image:"http://cache.net-a-porter.com/images/products/458039/458039_in_pp.jpg",
				description:"Updated in tactile suede for fall, Saint Laurent's 'Monogramme Cabas' tote bears the house's iconic gold 'YSL' logo. Lined in smooth leather, this structured piece has internal patch and zipped pockets to safeguard your cell, wallet and keys. Detach the shoulder strap to create a more streamlined look.",
				link: "http://www.net-a-porter.com/product/458039/Saint_Laurent/monogramme-cabas-leather-trimmed-suede-tote"

			},
			{
				bag:"The Rocco textured-leather tote",
				designer: "ALEXANDER WANG",
				price:"$875",
				image:"http://cache.net-a-porter.com/images/products/461643/461643_in_pp.jpg",
				description:"Alexander Wang re-imagines its iconic 'Rocco' tote in bright flamingo-pink, with sleek gold hardware. This textured-leather style incorporates a heavyweight studded base, multiple internal and external pockets and a detachable shoulder strap. Make the bold hue pop against blue denim.",
				link:"http://www.net-a-porter.com/product/461643/Alexander_Wang/the-rocco-textured-leather-tote"

			},
			{
				bag:"The Knot ayers-trimmed snake clutch",
				designer:"BOTTEGA VENETA",
				price:"$2,400",
				image:"http://cache.net-a-porter.com/images/products/467927/467927_in_pp.jpg",
				description: "Bottega Veneta's snake and ayers version of its signature 'Knot' clutch was carried on the runway at Milan Fashion Week. The compact suede interior is pocket-free to maximize space for your evening essentials - internal side panels will keep your cell, keys and lipstick in place when it's open.",
				link:"http://www.net-a-porter.com/product/467927/Bottega_Veneta/the-knot-ayers-trimmed-snake-clutch"

			},
			{
				bag: "PS1 jacquard and leather backpack",
				designer:"PROENZA SCHOULER",
				price:"$1,995",
				image:"http://cache.net-a-porter.com/images/products/454748/454748_in_pp.jpg",
				description:"The latest iteration of the cult-favorite PS1 bag, Proenza Schouler's luxe backpack is this season's off-duty essential. Expertly crafted from soft black leather and the label's 'Baja' jacquard, this style boasts practical front pockets, a drawstring top and adjustable shoulder straps. Stow your tablet, cosmetics case and wallet in the spacious interior.",
				link:"http://www.net-a-porter.com/product/454748/Proenza_Schouler/ps1-jacquard-and-leather-backpack"

			},
			{
				bag:"Baylee medium leather tote",
				designer:"CHLOE",
				price:"$2,050",
				image:"http://cache.net-a-porter.com/images/products/469291/469291_in_pp.jpg",
				description:"Chloé designer Clare Waight Keller describes the 'Baylee' tote as 'simple in its shape, practical and with an elegant attitude. This two-tone leather version is fully lined in chocolate twill. An optional shoulder strap provides multiple styling options and the zipped top is secured by a lobster-fastening gold chain that doubles up as a bracelet.'",
				link:"http://www.net-a-porter.com/product/469291/Chloe/baylee-medium-leather-tote"

			}


		];


			var getProducts = function(){
				return luxuryproducts;
			};


			var addProducts= function(newProduct){
				luxuryproducts.push(newProduct);
			};

			var deleteProducts = function (index){
				luxuryproducts.splice(index);
			};

			var editProducts = function (idx, luxuryproduct){
				luxuryproducts[idx] = luxuryproducts;
			};

			var findIndex = function(idx){
				return luxuryproducts[idx];
			};

			return {

				getProducts: getProducts,
				addProducts :addProducts,
				deleteProducts: deleteProducts,
				editProducts: editProducts,
				findIndex : findIndex 


			};



	});














