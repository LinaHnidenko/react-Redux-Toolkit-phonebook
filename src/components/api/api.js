const BASE_URL = 'https://654bdb6b5b38a59f28efd01f.mockapi.io';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const createContacts = async data => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteContacts = async id => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  return await response.json();
};
