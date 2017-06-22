$("#searchButton").click(function () 
{
	$("#popups").empty();
	$("#anchors").empty();
	
	var tags = $("#searchTerm").val();
	var numPics = $("#numImages").val();
	
	var anchorHTML = "";
	var popupHTML = "";
			
	(function()
	{
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

		$.getJSON(flickerAPI, 
		{
			tags,
			tagmode: "any",
			format: "json"
		})
		.done(function(data) 
		{
			$.each(data.items, function(i, item) 
			{
				anchorHTML += '<a href="#photo' + i + '" data-rel="popup"><img src ="' + item.media.m + '" id="' +i + '" width="5%"></a>&nbsp;';

				popupHTML += '<div data-role="popup" data-position-to="window" data-overlay-theme="b" id="photo' + i + '"><a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a><img src ="' + item.media.m + '" id="' +i + '"></div>';

				if ( i === numPics-1) 
				{
					return false;
				}
			});

			$("#anchors").append(anchorHTML).trigger("create");
			$("#popups").append(popupHTML).trigger("create");
		});	
	})();
});


/*
$("#searchButton").click(function () 
{
	$("#returnedImages").empty();
	
	var searchValue = $("#searchTerm").val();

	
	searchFlickr(searchValue);
});

	    
function searchFlickr(searchValue)
{
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var tags = searchValue;

	$.getJSON(flickerAPI, 
	{
		tags,
		tagmode: "any",
		format: "json"
	})
	.done(function(data) 
	{
		$.each( data.items, function(i, item) 
		{
			$( "<br><img><br>" ).attr( "src", item.media.m ).appendTo( "#returnedImages" );
			if ( i === 1 ) 
			{
			return false;
			}
		});
	});	
};
*/
