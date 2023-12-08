import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ArtikelDetail() {
  return (
    <div className="container">
      <div className="w-[1040px] h-[319px] mt-[198px] mx-auto rounded-xl relative">
        <Image
          src="/assets/detail-hero.png"
          alt="gambar"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[457px] mx-auto flex items-center gap-[156px] mt-[31px]">
        <div className="flex justify-start items-center gap-[7px]">
          <Image
            src="/assets/tgl.png"
            alt="time"
            width={400}
            height={400}
            className="w-[24px] h-[25px]"
          />
          <p className="text-sm font-medium text-neutral-700">
            Senin, 4 sep 2023
          </p>
        </div>
        <div className="flex justify-start items-center gap-[7px]">
          <Image
            src="/assets/airku.png"
            alt="time"
            width={400}
            height={400}
            className="w-[24px] h-[25px] rounded-full"
          />
          <p className="text-sm font-medium text-neutral-700">Inside Lombok</p>
        </div>
      </div>
      <div className="w-[1040px] mx-auto flex flex-col justify-start items-center gap-[43px]">
        <div className="w-[818px] mt-[30px] text-center text-greenBase text-4xl font-semibold">
          <p>
            SEMAKIN BANYAK WILAYAH YANG TERDAMPAK KEKERINGAN DI PROVINSI NTB
          </p>
        </div>
        <div>
          <p>
            Penyebab kekeringan di NTB dapat dikaitkan dengan beberapa faktor.
            Salah satunya adalah curah hujan yang rendah. Provinsi ini terletak
            di wilayah yang memiliki musim kemarau yang panjang, sehingga curah
            hujan yang minim menjadi masalah utama. Selain itu, perubahan iklim
            juga berperan dalam meningkatkan risiko kekeringan. Perubahan pola
            cuaca yang tidak menentu menyebabkan ketidakpastian dalam distribusi
            curah hujan.
          </p>
        </div>
        <div>
          <p>
            Dampak kekeringan di NTB sangat dirasakan oleh masyarakat setempat.
            Salah satu dampak yang paling terasa adalah ketersediaan air bersih
            yang terbatas. Masyarakat harus berjuang untuk mendapatkan air
            bersih sehari-hari, bahkan untuk kebutuhan dasar seperti minum,
            mandi, dan mencuci. Selain itu, kekeringan juga berdampak negatif
            pada sektor pertanian dan peternakan. Tanaman menjadi layu dan mati,
            sementara ternak mengalami kesulitan mendapatkan pakan dan air.
          </p>
        </div>
        <div>
          <p>
            Pemerintah dan berbagai pihak terkait telah melakukan upaya untuk
            mengatasi krisis air di NTB. Salah satu langkah yang diambil adalah
            dengan membangun infrastruktur penampungan air, seperti bendungan
            dan waduk. Hal ini bertujuan untuk menyimpan air hujan saat musim
            penghujan, sehingga dapat digunakan saat musim kemarau tiba. Selain
            itu, pemerintah juga mendorong penggunaan teknologi irigasi yang
            efisien untuk meningkatkan produktivitas pertanian.
          </p>
        </div>
        <div>
          <p>
            Selain upaya infrastruktur, penting juga untuk meningkatkan
            kesadaran masyarakat akan pentingnya pengelolaan air yang baik.
            Program penghematan air dan pengelolaan sumber daya air perlu
            diperkenalkan dan didukung oleh semua pihak. Edukasi mengenai
            penggunaan air yang bijak dan pengurangan limbah juga harus
            ditingkatkan. Selain itu, pemerintah juga perlu melakukan
            langkah-langkah adaptasi dan mitigasi terhadap perubahan iklim.
            Dalam jangka panjang, upaya ini akan membantu mengurangi risiko
            kekeringan di masa depan. Pengembangan sumber energi terbarukan juga
            dapat menjadi solusi untuk mengurangi tekanan terhadap sumber daya
            air. Kekeringan di Provinsi NTB merupakan tantangan serius yang
            harus dihadapi oleh semua pihak. Diperlukan kerjasama antara
            pemerintah, masyarakat, dan sektor swasta untuk mengatasi krisis air
            ini. Dengan langkah-langkah yang tepat, diharapkan NTB dapat
            mengurangi risiko kekeringan dan mencapai keberlanjutan dalam
            pengelolaan sumber daya air.
          </p>
        </div>
      </div>
      <div className="w-[1040px] mx-auto flex justify-between items-center mt-[25px] ">
        <div className="flex text-center">
          <Link href="" className="flex text-center">
            <Image
              src="/assets/arrow_back.svg"
              alt="back"
              width={100}
              height={100}
              className="w-[24px] h-[25px]"
            />
            <p className="text-indigo-700">Artikel Sebelumnya</p>
          </Link>
        </div>
        <div>
          <Link href="" className="flex text-center">
            <p className="text-indigo-700">Artikel Selanjutnya</p>
            <Image
              src="/assets/arrow_forward.svg"
              alt="back"
              width={100}
              height={100}
              className="w-[24px] h-[25px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
