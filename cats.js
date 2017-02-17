$(function() {

  $('.summon-cats').on('click', function() {
    $.ajax( {
      url:'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {

      for (var i=0; i < data.cats.length; i++) {
      var cat = $('<img>').attr('src', data.cats[i].photo)
                  .attr('alt', "Photo of "+ data.cats[i].name);
        $('#cat' + (i+1)).html(cat);
      };

    });
  });

});
