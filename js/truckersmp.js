const driversArea = document.querySelector('.drivers');
const membersAPI = 'https://corsproxy.io/?' + encodeURIComponent('https://api.truckersmp.com/v2/vtc/73403/members')

fetch(membersAPI)
    .then((response) => response.json())
    .then((json) => {
        let drivers = json;

        drivers.forEach((driver) => {
            if (driver.role_id == '207774') {
                const div = document.createElement('div');

                div.classList.add('lmt-driver');

                driver.forEach((user) => {
                    div.innerHTML += `<div class="col-sm-4">
                                        <div class="members">
                                          <div class="overlay"></div>
                                          <img class="img-responsive" src="https://lmt-euro-logistic.netlify.app/cdn/logo.png" alt="${user.username}">
                                        </div>
                                        <div class="members-content">
                                          <h3>${user.username}</h3>
                                        </div>
                                      </div>`;
                });

                document.querySelector('.drivers').appendChild(div);
            }
        });
    });