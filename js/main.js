const detailImageSelector = '[data-role="target"]';
const detailTitleSelector = '[data-title="title"]';
const thumbnailLinkSelector = '[data-role="trigger"]';
const thumbnailHorizontal = '[thumbnail-image-horizontal]';
const thumbnailVertical = '[thumbnail-image-vertical]';

// Set image and text of the detailed photo

function setDetails(imageUrl, titleText) {
    'use strict';
    let detailImage = document.querySelector(detailImageSelector);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(detailTitleSelector);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(thumbnailLinkSelector);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();