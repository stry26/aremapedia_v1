import React from 'react'

export default function Profile() {
  return (
    <div className=' bg-white'>
        {/* sejarah */}
        <div class="flex flex-col md:flex-row my-4">
          <div class="md:w-1/2 text-left md:text-left space-y-4 items-center p-8">
              <p class="text-3xl md:text-5xl font-semibold leading-tight mt-6 py-6 px-10">
                  Sejarah Arema FC
              </p>
              <p class=" md:text-lg mt-4 px-10">
              Didirikan pada 11 Agustus 1987, Arema FC adalah salah satu klub sepak bola paling ikonik di Indonesia. Klub ini lahir di Malang, Jawa Timur, dan menjadi simbol kebanggaan bagi masyarakat setempat, khususnya Aremania—sebutan untuk pendukung setianya. Klub ini didirikan oleh Lucky Acub Zainal dan Iwan Budianto, yang memiliki visi untuk membawa sepak bola Indonesia ke tingkat yang lebih tinggi.
              </p>
          </div>
          <div class="bg-[#2E5077] w-full md:w-1/2 flex justify-center mt-6 md:mt-0 py-6 md:rounded-bl-[50px]">
            <img src="https://upload.wikimedia.org/wikipedia/id/thumb/4/40/Logo_Arema_FC_2017_logo.svg/800px-Logo_Arema_FC_2017_logo.svg.png" alt="" class="w-full bg-auto md:bg-contain md:max-w-sm"/>
          </div>
        </div>
      
        {/* singo edan */}
        <div class="flex flex-col md:flex-row my-4">
            <div class="bg-[#2E5077] w-full md:w-1/2 flex justify-center mt-6 md:mt-0 py-6 rounded-tr-[50px] rounded-br-[50px]">
                 <img src="/img/singo.png" alt="" class="w-full bg-auto md:bg-contain md:max-w-sm" />
            </div>
            <div class="md:w-1/2 text-left md:text-left space-y-4 items-center p-8">
              <p class="text-3xl md:text-5xl font-semibold leading-tight mt-6 py-6 px-10">
                  Filosofi Singo Edan
              </p>
              <p class=" md:text-lg mt-4 px-10">
              Arema FC dikenal dengan julukannya, Singo Edan, yang melambangkan semangat keberanian dan keagresifan di lapangan. Dengan warna kebesaran biru dan merah, Arema FC juga memiliki maskot singa yang menjadi identitas kuat klub.
              </p>
            </div>
        </div>
    </div>
  )
}
  