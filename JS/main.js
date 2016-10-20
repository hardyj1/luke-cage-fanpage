$.get(
				// get google developers youtube data api
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part: 'snippet',
				// limit videos shown to 8
				maxResults: 8, 
				// YouTube playlist ID
				playlistId: 'IQtchcBHzZ-mSHdPi5PLnVx2yTI2sF-1',
				// Personal Dev Key
				key:'AIzaSyDsDSyMj78b8SLdvhcTnJed3q013pCmrz4'},
				function(data){
					$.each(data.items, function(i, item){
						// Output variable to put results in soundtrack div
						var output;
						console.log(item);
						videoTitle = item.snippet.title;
						videoId = item.snippet.resourceId.videoId;
						// retrieves videos from playlist ID
						output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
						// append results to soundtrack-videos div 
						$('#soundtrack-videos').append(output);
						
					});
				});