import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { ItemSearch } from './components/itemSearch'
import { ProductCardData } from './data-helper'
import { ProductCard } from './components/productCard'

function App() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="bg-black min-h-screen pb-12 font-ibm">
      <Navbar />
      <div className="pt-[70px] search-container px-6 lg:px-0">
        <ItemSearch
          search={search}
          setSearch={setSearch}
          view={view}
          setView={setView}
        />
        <h1 className="text-[#FFFFFF] flex justify-start mt-8 items-center gap-8 text-[22px] font-[600] mb-5">
          All Products
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ProductCardData.map((product) => (
              <ProductCard props={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
