import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');

    const createTimeListItem = (title, details, mapId, mapLink, mapLabel) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>
         <p>${details.address}</p>
         <a href="${mapLink}" id="${mapId}" role="link" target="_blank" aria-label="${mapLabel}">
            <i class="bx bxs-map-alt" aria-hidden="true"></i>
            <span>${mapLabel}</span>
         </a>`
    );

    marriageDiv.innerHTML = createTimeListItem('Akad', data.time.marriage, 'map-marriage', data.link.mapAkad, 'Peta Lokasi Akad');
    receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception, 'map-reception', data.link.mapResepsi, 'Peta Lokasi Resepsi');
};
