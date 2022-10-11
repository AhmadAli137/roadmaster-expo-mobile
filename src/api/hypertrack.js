const url = 'http://localhost:8911/getOpenJobRequests?'

export function getOpenJobRequests() {
    
    try {
        fetch(url, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, })
        .then((response) => console.log(response))
    } catch (error) {
        console.error(error);
    }
  };