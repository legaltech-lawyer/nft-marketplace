import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#58A4B0] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Registra tus obras con tecnología Blockchain
            </div>
            <div className={style.description}>
              CryptoMark te permitirá contar con la evidencia necesaria para
              proteger tus obras
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explorar</button>
              <button className={style.button}>Registrar</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/XuDfRQtqu8q9sOIW2VkGokR_CEFDxybbmrNG31R8dAEboi4Co5qdn-JUwmtG0S7JYhCnj4wK5rSbi-J6giG8zTXBvE_u8I0ymhRPgA=s0"
              />
              <div className={style.author}>
                <div className={style.name}>ATHENA</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/70193423311743688206789993047203076500296585125750393867232610649070951727105"
                >
                  animkhitaryan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
