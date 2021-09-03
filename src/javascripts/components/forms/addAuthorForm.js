import clearDom from '../../helpers/data/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first-name"> Author First Name</label>
          <input type="text" class="form-control" id="first_name" aria-describedby="firstName" placeholder="Author's first name" value = "${obj.first_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="last-name">Author Last Name </label>
          <input type="text" class="form-control" id="last_name" aria-describedby="lastName" placeholder="Author's last name" value = "${obj.last_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="AuthorEmail">Author's Email </label>
          <input type="email" class="form-control" id="email" aria-describedby="authorEmail" placeholder="Author's Email " value = "${obj.email || ''}" required>
        </div>
        <div class = "form-group">
        <input type= "checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">Favorite Author </label>
      </div>
        <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthorForm;
