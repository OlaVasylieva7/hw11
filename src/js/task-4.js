const bookmarkInput = document.getElementById('bookmark__input');
const addBookmarkBtn = document.getElementById('add');
const bookmarksList = document.getElementById('bookmarks__list');

function getBookmarks() {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function makeBookmarks() {
    const bookmarks = getBookmarks();
    bookmarksList.innerHTML = ''; 
    bookmarks.forEach((bookmark, index) => {
        const li = document.createElement('li');
        li.className = 'bookmark-item';
        li.innerHTML = `
            <a href="${bookmark}" target="_blank">${bookmark}</a>
            <button onclick="deleteBookmark(${index})">delete</button>
        `;
        bookmarksList.appendChild(li);
    });
}

function addBookmark() {
    const bookmarkUrl = bookmarkInput.value.trim();
    if (bookmarkUrl) {
        const bookmarks = getBookmarks();
        bookmarks.push(bookmarkUrl); 
        saveBookmarks(bookmarks); 
        bookmarkInput.value = ''; 
        makeBookmarks(); 
    }
}

window.deleteBookmark = function(index) {
    const bookmarks = getBookmarks();
    bookmarks.splice(index, 1);
    saveBookmarks(bookmarks);
    makeBookmarks();
  };

addBookmarkBtn.addEventListener('click', addBookmark);

document.addEventListener('DOMContentLoaded', makeBookmarks);
