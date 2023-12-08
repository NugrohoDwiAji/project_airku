import CardInfoAdmin from "@/components/card/CardInfoAdmin";
import Footer from "@/components/Footer";
import HeaderAdmin from "@/components/HeaderAdmin";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

export default function ArtikelAdmin() {
  return (
    <div className="w-full mb-[100px]">
      <HeaderAdmin />
      <div
        className="mt-[93px] h-[277px] flex justify-center items-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('/assets/HeroAdminProfile.jpg')" }}
      >
        KELOLA DATA ARTIKEL
      </div>
      <button type="button" className="py-1 px-3 bg-teal-600 rounded-md ml-5">
        Tambah Berita
      </button>
      <div className="flex justify-between mt-5 px-5">
        <div className="flex gap-1 items-center">
          <h1>Show</h1>
          <h1 className="w-14 h-8 border-2 flex justify-between">
            {"11"}
            <div className="flex flex-col">
              <button>
                <GoTriangleUp />{" "}
              </button>
              <button>
                <GoTriangleDown />{" "}
              </button>
            </div>
          </h1>
          <h1>Entries</h1>
        </div>
        <div className="border-2 flex  text-lg items-center justify-between w-64  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="focus:outline-none"
          />
          <button className="text-3xl text-gray-300 hover:bg-gray-100 ">
            <IoIosSearch />
          </button>
        </div>
      </div>
      <h1 className="w-14 h-8 border-2 ml-[62px] mt-2">{""}</h1>
      <table className="table-fixed m-auto">
        <thead className="borde-2border-black">
          <tr>
            <td>No.</td>
            <td>Judul</td>
            <td>Sumber</td>
            <td>Waktu Terbit</td>
            <td>Kategori</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Warga Kekurangan Air Bersih Di Kayangan</td>
            <td>PMI Lombok Utara</td>
            <td>12-11-2023</td>
            <td>Krisis Air</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
