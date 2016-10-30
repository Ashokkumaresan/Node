	  <script type="text/javascript">
			$(document).ready(function(){
			loadGenre();
			 GId="";
			 BId="";
			$('#btn').click(function(e){
				Generes('POST');
			  });
			  
			 $('#btnGupdate').click(function(e){
				Generes('PUT');
			  });
			  
			  $('#btnBook').click(function(e){
				BookAction('POST');
			  });
			  $('#btnUpBook').click(function(e){
				BookAction('PUT');
			  });
			
			});
			
			var loadGenre=function(){
				$('#txtname').val("");
				$('#txttitle').val("");
				$('#txtgenre').val("");
				$('#txtdesc').val("");
				$('#txtauthor').val("");
				$('#txtpublisher').val("");
				$('#txtpages').val("");
				$('#txturl').val("");
					$.ajax({
						url: 'http://localhost:3000/api/genres',
						// dataType: "jsonp",
						data: '',	
						contentType: 'application/json',						
						type: 'GET',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							var row="";
						for(var i=0;i<data.length;i++){
							 row+="<tr><td>"+data[i].name+"</td><td><a href='#' onclick=editGenre('"+data[i]._id+"')>Edit</a></td><td><a href='#' onclick=deleteGenre('"+data[i]._id+"')>Delete</a></td></tr>";
						}
							$('#genre').append(row);
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						},
					});
					
					$.ajax({
						url: 'http://localhost:3000/api/books',
						// dataType: "jsonp",
						data: '',	
						contentType: 'application/json',						
						type: 'GET',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							var row="";
						for(var i=0;i<data.length;i++){
							 row+="<tr><td>"+data[i].title+"</td><td>"+data[i].genre+"</td><td>"+data[i].description+"</td><td>"+data[i].author+"</td><td>"+data[i].publisher+"</td><td>"+data[i].pages+"</td><td><img src="+data[i].image_url+" style='width:200px;height:200px;'/></td><td><a href='#' onclick=editBook('"+data[i]._id+"')>Edit</a></td><td><a href='#' onclick=deleteBook('"+data[i]._id+"')>Delete</a></td></tr>";
						}
							$('#booktable').append(row);
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						},
					});
			}
			
			editGenre=function(id){
			GId=id;
				$.ajax({
						url: 'http://localhost:3000/api/genre/'+id,
						// dataType: "jsonp",
						data: '',	
						contentType: 'application/json',						
						type: 'GET',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							console.log(data);
							$('#txtname').val(data.name);
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						}
					});
			}
			
		editBook=function(id){
		     	BId=id;
				$.ajax({
						url: 'http://localhost:3000/api/book/'+id,
						// dataType: "jsonp",
						data: '',	
						contentType: 'application/json',						
						type: 'GET',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							//console.log(data);
							$('#txttitle').val(data.title);
							$('#txtgenre').val(data.genre);
							$('#txtdesc').val(data.description);
							$('#txtauthor').val(data.author);
							$('#txtpublisher').val(data.publisher);
							$('#txtpages').val(data.pages);
							$('#txturl').val(data.image_url);
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						}
					});
			}
			
			function deleteGenre(id){
						$.ajax({
						url: 'http://localhost:3000/api/genre/'+id,
						// dataType: "jsonp",
						data: '',	
						contentType: 'application/json',						
						type: 'DELETE',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							window.location.reload();			
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						}
					});
			}
			function deleteBook(id){
					$.ajax({
						url: 'http://localhost:3000/api/book/'+id,
						// dataType: "jsonp",
						data: '',	
						contentType: 'application/json',						
						type: 'DELETE',
						json: true,
						crossDomain: true,	
						success: function (data) {	
							window.location.reload();								
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						}
					});
			}
			
			function Generes(p_type){
				var Global={};
				var g_url="";
				var genre=$('#txtname').val();
				Global.name=genre;
				if(GId=="")
				 g_url='http://localhost:3000/api/genres';
				else
                 g_url='http://localhost:3000/api/genre/'+GId;				
				$.ajax({
						url: g_url,
						// dataType: "jsonp",
						data: JSON.stringify(Global),	
						contentType: 'application/json',						
						type: p_type,
						json: true,
						crossDomain: true,	
						success: function (data) {								
							console.log(data);	
							GId	="";		
							window.location.reload();							
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						},
					});
			}
			
			function BookAction(p_type){
				var Global={};
				var g_url="";
				var title=$('#txttitle').val();
				var genre=$('#txtgenre').val();
				var description=$('#txtdesc').val();
				var author=$('#txtauthor').val();
				var publisher=$('#txtpublisher').val();
				var pages=$('#txtpages').val();
				var image_url=$('#txturl').val();
				
				Global.title=title;
				Global.genre=genre;
				Global.description=description;
				Global.author=author;
				Global.publisher=publisher;
				Global.pages=pages;
				Global.image_url=image_url;
				
				if(BId=="")
				 g_url='http://localhost:3000/api/book';
				else
                 g_url='http://localhost:3000/api/book/'+BId;				
				$.ajax({
						url: g_url,
						// dataType: "jsonp",
						data: JSON.stringify(Global),	
						contentType: 'application/json',						
						type: p_type,
						json: true,
						crossDomain: true,	
						success: function (data) {									
							console.log(data);		
							BId="";				
							window.location.reload();							
						},
						error: function (xhr, status, error) {
							console.log('Error: ' + error.message);							
						},
					});
			}
	  	</script>