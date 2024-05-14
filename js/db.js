$.get("data/list.json", function(list){
    let lists = '';
    list.forEach(function(item){
       lists += `
       <div class="col-md-3 mb-5">
          <div class="card">
             <a href="detail.jsp?num=${item.num}" class="card-img">
                <img src="${item.img}" class="card-img-top" alt="Office Look Image">
             </a>
             <a href="#" class="card-body">
                <h5 class="mt-4 pb-2 border-bottom">OFFICE LOOK 
                   <span class="badge badge-danger">NEW</span>
                </h5>
                <p class="desc">${item.title}</p>
                <p class="price">
                   <span class="or">100,000원</span>
                   <span>80,000원</span>
                </p>
             </a>
          </div>
       </div>
       `;
    });
    // #pdlist라는 아이디를 가진 요소가 HTML에 존재하는지 확인
    if ($('#pdlist').length) {
       $('#pdlist').html(lists);
    } else {
       console.error("#pdlist element not found in HTML.");
    }
 });