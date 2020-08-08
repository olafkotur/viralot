export const HttpService = {
  get: async (url: string): Promise<Response> => {
    return fetch(url);
  },

  post: async (url: string, payload: object): Promise<Response> => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json', 
        Accept: 'application/json',
      },
    });
  }
};
