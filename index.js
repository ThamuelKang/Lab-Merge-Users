
const animalUsers = ['cat', 'dog', 'fish'];
const plantUsers = ['rose', 'tulip', 'daisy'];

require('datejs')

// The function should return a single array containing all the usernames
function combineUsers(...args) {

  const combinedObject = {
    users: [],
    merge_date: new Date().toString('M/d/yyyy')
  }

  combinedObject.users = [].concat(...args)
  return combinedObject
}

console.log(combineUsers(animalUsers, plantUsers));

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};