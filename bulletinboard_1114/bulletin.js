
// bulletin_view에서 쓰는 코드

// category 비활성화
$('#category').each(function() {
  $(this).prop('disabled', true);
});

// bulletin_view에서 쓰는 코드 끝


// bulletin_edit에서 쓰는 코드 

// #img_btn을 클릭하면 #real_input을 호출함
const realInput = document.getElementById('real_input');
const browseBtn = document.getElementById('img_btn');
browseBtn.addEventListener('click',()=>{
  realInput.click();});


  // 이미지 미리보기에 띄우기
  function PreviewImage() {
    //파일리더 생성
    let preview = new FileReader();
    preview.onload = function (e) {
      //img id 값
      document.getElementById('edit_img').src = e.target.result;
    };
    //input id 값
    preview.readAsDataURL(document.getElementById('real_input').files[0]);
    
  }

        // bulletin_edit에서 쓰는 코드 끝

