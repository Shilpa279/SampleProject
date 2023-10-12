// apiService.js

const BASE_URL = "http://caffa.smsoman.com/api/V1"; // Replace with your API base URL

const apiService = {
  getProducts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS", // Replace with your token
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseValues = await response.json();
      return responseValues.data;
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  },

  getProductDetails: async (productId) => {
    try {
      const response = await fetch(`${BASE_URL}/product/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS", // Replace with your token
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const productData = await response.json();
      return productData.data;
    } catch (error) {
      throw new Error("Error fetching product details: " + error.message);
    }
  },
};

export default apiService;
