let timeStamp = (pastTimestamp) => {  
  let currentTimestamp = currentDate.getTime();
  let diff = currentTimestamp - pastTimestamp;

  if( diff > 31536000) {
    diff = Math.floor(diff / 31536000);
    return(diff + 'years ago');
  }

  if ( diff > 2592000) {
    diff = Math.floor(diff / 2592000);
    return(diff + 'months ago');
  } 
  
  if ( diff > 86400) {
    diff = Math.floor(diff / 86400);
    return(diff + 'days ago');
  } 
  
  if ( diff > 3600) {
    diff = Math.floor(diff / 3600);
    return(diff + 'hours ago');
  } 
  
  if ( diff > 60) {
    diff = Math.floor(diff / 60);
    return(diff + 'minutes ago');
  }

  return(diff + 'seconds ago');
}

