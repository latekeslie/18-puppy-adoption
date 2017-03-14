const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function createComplete() {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
  };
}

export function create(formData) {
  return (dispatch) => {
    const data = {
      formData,
    };
    dispatch(create());

    return fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers,
    }).then(r => r.json())
    .then((post) => {
      dispatch(createComplete(post));
    });
  };
}


export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data
  };
}

export function findOneComplete() {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
  };
}


export function findOne(id) {
  return dispatch => fetch(`${apiUrl}/${id}`).then(data => data.json())
    .then((response) => {
      dispatch(findOneComplete(response));
    });
}
