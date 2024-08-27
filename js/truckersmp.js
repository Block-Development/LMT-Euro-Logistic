const driversArea = document.querySelector('.drivers-area');
const membersAPI = 'https://corsproxy.io/?' + encodeURIComponent('https://api.truckersmp.com/v2/vtc/73403/members')

fetch(membersAPI)
    .then((response) => response.json())
    .then((json) => {
        let drivers = json.response;

        drivers.members.forEach((driver) => {
            if (driver.role_id == '207774') {
                const div = document.createElement('div');

                div.classList.add('lmt-driver');

                let user = driver;

                div.innerHTML += `<div class="col-sm-4">
                                    <div class="members">
                                      <div class="members-img">
                                        <div class="overlay"></div>
                                        <img class="img-responsive" src="https://lmt-euro-logistic.netlify.app/cdn/logo.png" alt="${user.username}">
                                      </div>
                                      <div class="members-content">
                                        <h3>${user.username}</h3><span>${user.joinDate}</span>
                                      </div>
                                    </div>
                                  </div>`;

                document.querySelector('.drivers-area').appendChild(div);
            }
        });
    });