import React, { useState } from "react";
import { QuestionRadio, UploadAssesment } from "components/molecules";
import { acne } from "constans";
import {
  Cyst,
  Komedo,
  Nodule,
  Papule,
  Puspule,
  WhiteHead,
  BlackheadsModal,
  WhiteheadsModal,
  PapuleModal,
  PustuleModal,
  NoduleModal,
} from "assets/images";
import { DoubleButton } from "components/atoms";

const AssessmentAcne = ({ onsubmit, onPrev }) => {
  const [animateActive, setAnimateActive] = useState([]);
  const [showModal, setShowModal] = useState({});

  const handleChange = (e, name) => {
    setAnimateActive((old) => [...old, name]);
  };

  const handleClass = (val) => {
    return `mt-5 mb-5 px-[30px] py-[26px] transition border-l-4 ${
      animateActive.includes(val)
        ? "bg-[#EBF1FF] rounded-lg border-l-[#24324F]"
        : "border-l-transparent bg-white"
    }`;
  };

  const dataAcne = [
    {
      image: Komedo,
      name: "Blackheads / Komedo",
      isDouble: true,
    },
    {
      image: WhiteHead,
      name: "Whiteheads",
    },
    {
      image: Papule,
      name: "Papule",
    },
    {
      image: Puspule,
      name: "Pustule",
    },
    {
      image: Nodule,
      name: "Nodule",
    },
    {
      image: Cyst,
      name: "Cyst",
    },
  ];

  const dataModal = [
    {
      id: 1,
      image: BlackheadsModal,
      title: "Blackheads",
      desc: "Blackheads / Komedo: Kondisi di mana pori-pori kulit akan tertutup oleh debu/kotoran dan menjadi hitam. BIasanya terlihat bintik kecil hitam dari dekat.",
    },
    {
      id: 2,
      image: WhiteheadsModal,
      title: "Whiteheads",
      desc: "Whiteheads : Kondisi yang sama seperti blackhead, tapi warnanya tidak hitam yah! Kadang whitehead agak sulit terlihat, kamu harus melihat dengan lebih hati hati untuk mengetahui adanya blackhead!",
    },
    {
      id: 3,
      image: PapuleModal,
      title: "Papule",
      desc: "Papule: Bintikan kecil dikulit berwarna merah yang tidak lebih dari 1cm! Biasanya terasa sedikit sakit. Beberapa orang menyebutnya dengan brentusan.",
    },
    {
      id: 4,
      image: PustuleModal,
      title: "Pustule",
      desc: "Pustule: Pustule sama dengan papule yah! Bedanya ada warna putih sedikit dibagian ujungnya, biasanya kalau pecah akan berisi nanah. BIasanya sedikit lebih sakit dibandingkan papule kalau kalian tekan. Mirip sekali dengan jerawat yang sedang igin pecah.",
    },
    {
      id: 5,
      image: NoduleModal,
      title: "Nodule",
      desc: "Nodule: Kalau nodule sama seperti papule, namun ukurannya lebih dari 1cm. Biasanya terdapat masa yang cukup keras dan sakit bila ditekan. Beberapa masyarakat menyebutnya dengan jerawat batu! ",
    },
  ];

  console.log(dataModal.filter((x) => x.id === 1));

  return (
    <div className="pt-[9rem] px-[60px] bg-[#F8F8F8] text-textDefault">
      <h1 className="font-inter mt-[39px] font-bold text-2xl">
        Tipe-tipe jerawat
      </h1>
      <p className="font-inter mt-[10px] max-w-[658px]">
        Kamu bisa menekan gambar di bawah untuk membaca deskripsi tipe-tipe
        jerawat
      </p>
      <div className="flex items-center mt-[42px] space-x-6">
        {dataAcne?.map((el, indx) => (
          <button
            key={indx}
            onClick={() =>
              setShowModal(dataModal.filter((x) => x.id === indx + 1))
            }
          >
            <img src={el?.image} alt="foto jerawat" className="mb-5" />
            <p
              className={`max-w-[100px] text-center ${el.isDouble && "-mb-5"}`}
            >
              {el?.name}
            </p>
          </button>
        ))}
      </div>
      {Object.keys(showModal).length !== 0 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between mb-[32px]">
                    <h3 className="text-3xl font-semibold">
                      {showModal[0].title}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent text-red-500 float-right text-sm leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                  <img
                    src={showModal[0].image}
                    alt="Jenis Jerawat"
                    className="mb-[32px]"
                  />
                  <p className="w-[407px] my-4 text-slate-500 text-lg leading-relaxed">
                    {showModal[0].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <h1 className="font-inter mt-[39px] font-bold text-2xl">
        Cari tau Keparahan Jerawatmu!
      </h1>
      <p className="font-inter mt-[20px] max-w-[658px]">
        Minley akan membantu kamu mengetahui tipe dan keparahan jerawat kamu!
        Minley menggunakan skala jerawat yang disetujui ahli kulit internasional
        loh!
      </p>
      <p className="font-inter mt-[20px] max-w-[658px]">
        Untuk mengetahui tipe jerawat kamu, kamu harus mengenal beberapa istilah
        ini! Tujuannya supaya kamu bisa mengisi assessment berikutnya!
      </p>
      <p className="font-inter mt-[64px] max-w-[348px] font-bold text-2xl">
        Pertanyaan
      </p>
      <div className={handleClass("foreheadskin")}>
        <QuestionRadio
          question="Jerawat apakah yang ada di Dahi kamu?"
          descDisabled
          questionNumber={1}
          options={acne}
          handleChange={(e) => handleChange(e, "foreheadskin")}
        />
      </div>
      <div className={handleClass("leftchick")}>
        <QuestionRadio
          question="Jerawat apakah yang ada di pipi kiri kamu?"
          questionNumber={2}
          descDisabled
          options={acne}
          handleChange={(e) => handleChange(e, "leftchick")}
        />
      </div>
      <div className={handleClass("rightchick")}>
        <QuestionRadio
          question="Jerawat apakah yang ada di pipi kanan kamu?"
          questionNumber={3}
          options={acne}
          descDisabled
          handleChange={(e) => handleChange(e, "rightchick")}
        />
      </div>
      <div className={handleClass("nose")}>
        <QuestionRadio
          question="Jerawat apakah yang ada di area hidung kamu?"
          questionNumber={4}
          options={acne}
          descDisabled
          handleChange={(e) => handleChange(e, "nose")}
        />
      </div>
      <div className={handleClass("chin")}>
        <QuestionRadio
          question="Jerawat apakah yang ada di area dagu kamu?"
          questionNumber={5}
          options={acne}
          descDisabled
          handleChange={(e) => handleChange(e, "chin")}
        />
      </div>
      <div className={handleClass("chest")}>
        <QuestionRadio
          question="Jerawat apakah yang ada di area dada & punggung kamu?"
          questionNumber={6}
          options={acne}
          descDisabled
          handleChange={(e) => handleChange(e, "chest")}
        />
      </div>
      <div className={handleClass("upload-image")}>
        <UploadAssesment
          descDisabled
          question="Yuk upload 3 selfie kamu!"
          questionNumber={7}
        />
      </div>
      <DoubleButton onPrev={onPrev} onsubmit={onsubmit} />
    </div>
  );
};

export default AssessmentAcne;
