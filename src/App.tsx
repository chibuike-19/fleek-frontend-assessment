import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { ItemSearch } from "./components/itemSearch";
import { ProductCardData } from "./data-helper";
import { ProductCard } from "./components/productCard";

function App() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [productData, setProductData] = useState(ProductCardData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (query: string) => {
    setSearch(query.toLowerCase());
  };

  const filteredProducts = productData.filter((product) => {
    const { title, desc, tags } = product;
    return (
      title.toLowerCase().includes(search) ||
      desc.toLowerCase().includes(search) ||
      tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  return (
    <div className="bg-black min-h-screen pb-12 font-ibm">
      <Navbar />
      <div className="search-container px-6 lg:px-0">
        <div className="sticky bg-black pt-[10px] z-20 top-[67px]">
          <ItemSearch
            search={search}
            onSearch={handleSearch}
            view={view}
            setView={setView}
          />
        </div>
        <h1 className="text-[#FFFFFF] flex justify-start mt-8 items-center gap-8 text-[22px] font-[600] pt-[40px]  mb-5">
          All Products
        </h1>
        {loading ? (
          <div className="grid place-content-center h-[calc(100vh-400px)]">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#FFFFFF]"></div>
          </div>
        ) : view === "grid" ? (
          <div className="w-full flex justify-center items-center">
            {filteredProducts.length === 0 ? (
              <div className="grid place-content-center h-[calc(100vh-400px)]">
                <p className="text-[#FFFFFF]">No search result found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard props={product} view={view} />
                ))}
              </div>
            )}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="grid place-content-center h-[calc(100vh-400px)]">
            <p className="text-[#FFFFFF]">No search result found</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredProducts.map((product) => (
              <ProductCard props={product} view={view} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
