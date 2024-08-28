const membersAPI = 'https://corsproxy.io/?' + encodeURIComponent('https://api.truckersmp.com/v2/vtc/73403/members')
const vtcAPI = 'https://corsproxy.io/?' + encodeURIComponent('https://api.truckersmp.com/v2/vtc/73403')
const userAPI = 'https://corsproxy.io/?' + encodeURIComponent('https://api.truckersmp.com/v2/player/')

const driversArea = document.querySelector('.drivers-area');
const driverCount = document.querySelector('.driverCount');

fetch(vtcAPI)
    .then((response) => response.json())
    .then((json) => {
        let driverCountRes = json.response;

        driverCount.innerHTML += `Unsere Firma besteht aus <strong>${driverCountRes.members_count}</strong> Fahrer*innen<br>Stand vom ${new Date().toLocaleDateString('de-DE')}`
    });

fetch(membersAPI)
    .then((response) => response.json())
    .then((json) => {
        let drivers = json.response;

        drivers.members.forEach((driver) => {
            if (driver.role_id == '207774') {
                const div = document.createElement('div');

                div.classList.add('lmt-driver');

                fetch(userAPI + driver.user_id)
                  .then((response) => response.json())
                  .then((json) => {
                    let fetchAvatar = json.response.avatar;
                    let driverAvatar = String(fetchAvatar)
                      .replace('https://static.truckersmp.com/avatarsN/defaultavatar.png', 'https://lmt-euro-logistic.netlify.app/cdn/logo.png')
                      .replace('https://static.truckersmp.com/avatarsN/4782497.1712159810.png', 'https://lmt-euro-logistic.netlify.app/cdn/logo.png')
                      .replace('https://static.truckersmp.com/avatarsN/4192502.1713206807.png', 'https://lmt-euro-logistic.netlify.app/cdn/logo.png')

                    div.innerHTML += `<div class="col-sm-4">
                                    <div class="members">
                                      <div class="members-img">
                                        <div class="overlay"></div>
                                        <img class="img-responsive" src="${driverAvatar}" alt="${driver.username}">
                                      </div>
                                      <div class="members-content">
                                        <h3><a href="https://truckersmp.com/user/${driver.user_id}" target="_blank">${driver.username}</a></h3><span>${driver.joinDate}</span>
                                      </div>
                                    </div>
                                  </div>`;
                  })

                document.querySelector('.drivers-area').appendChild(div);
            }
        });
    });