$(function(){
  var user_list = $("#user-search-result")
  var group_user_list = $(".chat-group-users.js-add-user")
  var user_id_list = [""]

  function appendUser(user){
    var html = `
                  <div class="chat-group-user clearfix">
                    <p class="chat-group-user__name"> ${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add", data-user-id="${user.id}", data-user-name="${user.name}">追加</div>
                  </div>
              `
    
    user_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
                  <p class='chat-group-user__name'>${ msg }</p>
                </div>`
    user_list.append(html);
  }

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users#index',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0){
        users.forEach(function(user){
          user_id_list.forEach(function(user_id){
            if (user.id != user_id.id){
              appendUser(user);
            }
          })
          
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーがいません")
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });

  $(document).on('click', ".user-search-add.chat-group-user__btn.chat-group-user__btn--add",function(){
    var input_user_id = $(this).attr('data-user-id');
    var input_user_name = $(this).attr('data-user-name');
    var input_html = $(this).parent();
    $(input_html).remove();
    html = `<div class='chat-group-user'>
              <input name='group[user_ids][]' type='hidden' value='${input_user_id}'>
              <p class='chat-group-user__name'>${input_user_name}</p>
              <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
            </div>`
            group_user_list.append(html);
  });

  $(document).on('click',".chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn",function(){
    user_list.append($(this).parent());
    var del_list = $(this).parent();
    $(del_list).remove();
  
  });
});