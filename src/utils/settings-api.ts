// pensar em nome melhor para checkAPI
//
const checkAPI = () => {
  const apiUrl = process.env.BUN_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error(`Api aren't configured.`);
  }
  return apiUrl;
};

export const apiUrl = checkAPI();
