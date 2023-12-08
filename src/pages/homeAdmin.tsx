import CardInfoAdmin from "@/components/card/CardInfoAdmin";
import Footer from "@/components/Footer";
import HeaderAdmin from "@/components/HeaderAdmin";

const menu = [
  {
    src: "/assets/people.png",
    angka: "123",
    title: "Total Pendonasi",
    button: "Cek Pendonasi",
  },
  { src: "/assets/wallet.png",
    angka: "123",
    title: "Total Donasi",
    button: "Cek Donasi" 
  },
  { src: "/assets/map.png",
    angka: "123",
    title: "Tujuan Donasi",
    button: "Cek Tujuan"
  },
  {
    src: "/",
    angka: "123",
    title: "Total Artikel Dan Berita",
    button: "Cek Artikel",
  },
];

export default function HomeAdmin() {
  return (
    <div className="w-full mb-[100px]">
      <HeaderAdmin />
      <div
        className="mt-[93px] h-[277px] flex justify-center items-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('/assets/HeroAdminProfile.jpg')" }}
      >
        DASHBOARD
      </div>
      <div className="flex flex-wrap justify-between m-auto w-[808px]">
        {menu.map((data, index) => (
          <div key={index} className="mt-[108px]">
            <CardInfoAdmin
              src={data.src}
              angka={data.angka}
              title={data.title}
              link={data.button}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
