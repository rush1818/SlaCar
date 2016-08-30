const testFn = (data) =>{
  console.log(data);
  console.log("Error in messages");
};

export const removeMessageAPI = (messageId, success, error)=>{
  if (!success) {success = testFn;}
  if (!error) {error = testFn;}

  $.ajax({
    url: `/api/messages/${messageId}`,
    method: 'DELETE',
    success,
    error
  });
};

export const receiveMessagesAPI = (success, error)=>{
  if (!success) {success = testFn;}
  if (!error) {error = testFn;}

  $.ajax({
    url: '/api/messages',
    method: 'GET',
    success,
    error
  });
};

export const createMessageAPI = (data, success, error)=>{
  if (!success) {success = testFn;}
  if (!error) {error = testFn;}
  $.ajax({
    url: '/api/messages',
    method: 'POST',
    data,
    success,
    error
  });
};
