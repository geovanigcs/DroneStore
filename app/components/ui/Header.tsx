"use client";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import "../../assets/Header.css";
import Image from "next/image";

export const Header = () => {
  useEffect(() => {
    const droneLinks = document.querySelectorAll(".drone a");
    const droneImages = document.querySelectorAll(".img_drone");

    for (let i = 0; i < droneLinks.length; i++) {
      droneLinks[i].addEventListener("click", (event) => {
        event.preventDefault();
        updateDroneImage(i);
      });
    }

    function updateDroneImage(activeIndex: number) {
      for (let i = 0; i < droneImages.length; i++) {
        if (i === activeIndex) {
          droneImages[i].classList.add("visible");
          droneImages[i].classList.remove("hidden");
          droneImages[i].classList.add("animate"); 
        } else {
          droneImages[i].classList.remove("visible");
          droneImages[i].classList.add("hidden"); 
          droneImages[i].classList.remove("animate"); 
        }
      }
    }
  }, []);
  return (
    <>
      <div className="navbar flex justify-around items-center">
        <div className="home ">
          <a className="text-red-600 ml-5 size-5" href="#">
            <Image
              className="red_drone"
              src="/pngwing.com (9).png"
              alt="Descrição da imagem"
              width={50}
              height={20}
            />
            Drone
          </a>
          <a className="ml-5 size-5 text-[#545B5E]" href="#">
            Início
          </a>
          <a className="ml-5 size-5 text-[#545B5E]" href="#">
            Sobre
          </a>
          <a className="ml-5 size-5 text-[#545B5E]" href="#">
            Serviços
          </a>
          <a className="ml-5 size-5 text-[#545B5E]" href="#">
            Contato
          </a>
          <a className="ml-5 size-5 text-[#545B5E]" href="#">
            Profissional
          </a>
        </div>
        <div className="icons flex">
          <Image
            className="icons_img"
            src="/search.svg"
            alt="search"
            width={30}
            height={20}
          />
          <Image
            className="icons_img ml-5"
            src="/past.svg"
            alt="past"
            width={30}
            height={20}
          />
          <Image
            className="icons_img rounded-full ml-5"
            src="/RockLee.jpg"
            alt="perfil"
            width={50}
            height={40}
          />
        </div>
      </div>
      <div className="drone flex flex-wrap justify-center text-white gap-5 absolute bottom-3 right-1.5 items-center">
        <a
          className=" flex flex-col items-center font-bold shadow-white bg-[#333] rounded-full"
          href="#"
        >
          <Image
            className="drones w-[85px] h-[60px]"
            src="/pngwing.com (9).png"
            alt="perfil"
            width={764}
            height={40}
          />
          SkyMaster
        </a>
        <a
          className=" flex flex-col items-center font-bold shadow-white bg-[#333] rounded-full"
          href="#"
        >
          <Image
            className="drones w-[85px] h-[60px]"
            src="/pngwing.com (8).png"
            alt="perfil"
            width={764}
            height={60}
          />
          AeroGlide
        </a>
        <a
          className=" flex flex-col items-center font-bold shadow-white bg-[#333] rounded-full"
          href="#"
        >
          <Image
            className="drones w-[85px] h-[60px]"
            src="/pngwing.com (7).png"
            alt="perfil"
            width={764}
            height={40}
          />
          ZenithWing
        </a>
        <a
          className=" flex flex-col items-center font-bold shadow-white bg-[#333] rounded-full"
          href="#"
        >
          <Image
            className="drones w-[85px] h-[60px]"
            src="/pngwing.com (6).png"
            alt="perfil"
            width={764}
            height={40}
          />
          SwiftHover
        </a>
      </div>
      <div className="drone_image flex justify-center gap-5 mt-5">
        <Image
          className="img_drone w-[736px] h-[460px] object-contain cursor-pointer absolute left-[50rem] top-40"
          src="/pngwing.com (9).png"
          alt="drone"
          width={736}
          height={460}
        />
        <Image
          className="img_drone w-[736px] h-[460px] object-contain cursor-pointer absolute left-[50rem] top-40"
          src="/pngwing.com (8).png"
          alt="drone"
          width={736}
          height={460}
        />
        <Image
          className="img_drone w-[736px] h-[460px] object-contain cursor-pointer absolute left-[50rem] top-40"
          src="/pngwing.com (7).png"
          alt="drone"
          width={736}
          height={460}
        />
        <Image
          className="img_drone w-[736px] h-[460px] object-contain cursor-pointer absolute left-[50rem] top-40"
          src="/pngwing.com (6).png"
          alt="drone"
          width={736}
          height={460}
        />
      </div>
      <div className="social absolute bottom-3 flex left-[38rem] gap-5">
        <a href="#">
          <Image
            className="social_icon"
            src="/instagram.svg"
            alt="instagram"
            width={24}
            height={20}
          />
        </a>
        <a href="#">
          <Image
            className="social_icon"
            src="/wpp.svg"
            alt="whatsapp"
            width={24}
            height={20}
          />
        </a>
        <a href="#">
          <Image
            className="social_icon"
            src="/twitter.svg"
            alt="twitter"
            width={24}
            height={20}
          />
        </a>
        <a href="#">
          <Image
            className="social_icon"
            src="/github.svg"
            alt="github"
            width={24}
            height={20}
          />
        </a>
        <a href="#">
          <Image
            className="social_icon"
            src="/linkedin.svg"
            alt="linkedin"
            width={24}
            height={20}
          />
        </a>
      </div>
      <div className="para">
        <p className="font-bold absolute left-72 top-60">dJI</p>
      </div>
      <div className="dot flex mb-[6px] relative left-[37rem] top-[22rem] opacity-50">
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
      </div>
      <div className="dot flex mb-[6px] relative left-[37rem] top-[22rem] opacity-50">
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
      </div>
      <div className="dot flex mb-[6px] relative left-[37rem] top-[22rem] opacity-50">
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
      </div>
      <div className="dot flex mb-[6px] relative left-[37rem] top-[22rem] opacity-50">
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
        <div className="h-[10px] w-[10px] bg-[#333] ml-1.5"></div>
      </div>
      <div className="dji absolute left-24 top-48">
        <p className="text-[##A1998D] font-bold  ">DJI Mavic 2 Pro</p>
        <p className="text-white" >R$ 8.500,00</p>
        <Button className="button bg-red-600 w-40 h-11 transition-all">
          ADD a sua compra +
        </Button>
        <Button className="button bg-red-600 w-40 h-11 transition-all ml-5">
          VEJA MAIS
        </Button>
      </div>
      <div className="star flex relative left-[90px]">
        <li className="list-none">
          <Image
            className=""
            src="/star.svg"
            alt="star"
            width={20}
            height={20}
          />
        </li>
        <li className="list-none pl-3">
          <Image
            className=""
            src="/star.svg"
            alt="star"
            width={20}
            height={20}
          />
        </li>
        <li className="list-none pl-3">
          <Image
            className=""
            src="/star.svg"
            alt="star"
            width={20}
            height={20}
          />
        </li>
        <li className="list-none pl-3">
          <Image
            className=""
            src="/star.svg"
            alt="star"
            width={20}
            height={20}
          />
        </li>
        <li className="list-none pl-3">
          <Image
            className=""
            src="/star_2.svg"
            alt="star"
            width={20}
            height={20}
          />
        </li>
      </div>
      <div className="reviews bottom-0 flex flex-wrap justify-center gap-[30px] m-1.5 absolute items-center">
        <a
          className="flex flex-col items-center text-[#333] font-bold w-[118px] h-[147px] text-center p-5  bg-[#f5f5f5]"
          href="#"
        >
          <Image
            className="cards w-[67px] h-[67px] object-cover rounded-[4px] mb-4"
            src="/1.jpg"
            alt="people"
            width={150}
            height={147}
          />
          DJI Mavic 2 Pro: Excepcinal câmera, estável.
        </a>
        <a
          className="flex flex-col items-center text-[#333] font-bold w-[118px] h-[147px] text-center p-5 bg-[#f5f5f5]"
          href="#"
        >
          <Image
            className="cards w-[67px] h-[67px] object-cover rounded-[4px] mb-4"
            src="/2.avif"
            alt="twitter"
            width={118}
            height={147}
          />
          Autel Rocbotics EVO II: 8k câmera, vôo inteligente.
        </a>
        <a
          className="flex flex-col items-center text-[#333] font-bold w-[118px] h-[147px] text-center p-5 bg-[#f5f5f5]"
          href="#"
        >
          <Image
            className="cards w-[67px] h-[67px] object-cover rounded-[4px] mb-4"
            src="/3.avif"
            alt="twitter"
            width={118}
            height={147}
          />
          Skydio 2: Autonimia avançada, evita obstáculos.
        </a>
        <a
          className="flex flex-col items-center text-[#333] font-bold w-[118px] h-[147px] text-center p-5 bg-[#f5f5f5]"
          href="#"
        >
          <Image
            className="cards w-[67px] h-[67px] object-cover rounded-[4px] mb-4"
            src="/4.jpg"
            alt="twitter"
            width={118}
            height={147}
          />
          Parrot Anafi: Câmera exlusiva que inclina, 4k HDR.
        </a>
      </div>
    </>
  );
};
