import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ProductsContext = createContext();

export function useProducts() {
  return useContext(ProductsContext);
}

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addData = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // console.log("data aagaya hai", data);
        setProducts((prev) => [...prev, data]);

        console.log("getData use kia gaya hai", data);
      });
    } catch (error) {
      console.log("eerror occured", error);
    }
  };

  const getProductByID = async (productId) => {
    try {
      const productQuery = query(
        collection(db, "products"),
        where("productId", "==", productId)
      );

      const querySnapshot = await getDocs(productQuery);
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.data());
      // });

      if (querySnapshot.size === 0) {
        console.log("No product found with that name.");
        // Handle case where no product is found
      } else {
        for (const doc of querySnapshot.docs) {
          const productId = doc.id;
          console.log("yeh rhi product ID", productId);
          await updateProductById(productId); // Use await for the update as well
        }
      }
    } catch (error) {
      console.error("Error fetching or updating products:", error);
    }
  };

  const updateProductById = async (productId) => {
    const updateData = {
      productName: "Iphone X",
      productDescription: "Agaya hai Iphone Market mein",
      productId: "9999",
    };

    try {
      const productRef = doc(collection(db, "products"), productId);

      // Update specific fields (assuming you have updateData defined)
      await updateDoc(productRef, updateData);

      console.log("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteData = async () => {
    await deleteDoc(doc(db, "products", "hbTwlzPR32Mmq5xfH175"));
  };

  async function init() {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        setProducts((prev) => [...prev, data]);
      });
      console.log("init function chal gaya hai", products);
    } catch (err) {
      setProducts([]);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        current: products,
        addData,
        getData,
        updateProductById,
        deleteData,
        getProductByID,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
