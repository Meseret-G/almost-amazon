// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text">${item.email}</p>
      <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i aria-hidden="true"></i>Favorite Author</span>' : ''}</p>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i id="edit-author-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-author--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showAuthors, emptyAuthors };
