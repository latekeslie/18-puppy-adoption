import _ from 'lodash';

export default function puppies(state = [], action) {
  switch (action.type) {
    case 'PUPPY@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, '_id');
    case 'PUPPY@FINDONE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    case 'PUPPY@CREATE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    case 'PUPPY@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    default:
      return state;
  }
}


// 'PUPPY@FINDALL_COMPLETE'
// 'PUPPY@FINDONE_COMPLETE'
// 'PUPPY@CREATE_COMPLETE'
// 'PUPPY@UPDATE_COMPLETE'
