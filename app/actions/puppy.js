const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';


export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data
  };
}

export function findAll() {
  return dispatch => fetch(apiUrl).then(data => data.json())
    .then((response) => {
      dispatch(findAllComplete(response));
    });
}
