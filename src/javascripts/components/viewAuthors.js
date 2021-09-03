import clearDom from '../helpers/data/clearDom';

const viewAuthors = (item) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text">${item.email}</p>
      <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${item.description || 'Please add author description.'}</textarea>
    </div>
      <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i aria-hidden="true"></i>Favorite Author</span>' : ''}</p>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i id="edit-author-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-author--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  item.bookObject.forEach((obj) => {
    document.querySelector('#author-allbooks').innerHTML += `<div class="card">
    <img class="card-img-top" src=${obj.image} alt=${obj.title} style="height: 400px;">
    <div class="card-body" style="height: 180px;">
    <h5 class="card-title">${obj.title}</h5>
    <p class="card-text bold">${obj.sale ? `<span class="badge bg-info"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.price}` : `$${obj.price}`}</p>
    <hr>
    <i class="btn btn-success fas fa-eye" id="view-book-btn--${obj.firebaseKey}"></i>
    <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
</div>
</div>`;
  });
};

export default viewAuthors;
