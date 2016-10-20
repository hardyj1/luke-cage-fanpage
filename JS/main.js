$(document).ready(function(){
  
  $.get(
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part: 'snippet',
				// Display 10 videos
				maxResults: 10, 
				// Luke Cage soundtrack playlist ID
				playlistId: 'PLIQtchcBHzZ-mSHdPi5PLnVx2yTI2sF-1',
				// Personal Google Dev key
				key:'AIzaSyDsDSyMj78b8SLdvhcTnJed3q013pCmrz4'},
				function(data){
					$.each(data.items, function(i, item){
						//Output variable
						var output;
						console.log(item);
						videoTitle = item.snippet.title;
						videoId = item.snippet.resourceId.videoId;
						
						output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
						
						// append to #soundtrack-videos 
						$('#soundtrack-videos').append(output);
						
					});
        });
  
  
});  
  