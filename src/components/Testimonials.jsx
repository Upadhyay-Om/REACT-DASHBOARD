import React from 'react'
import avatarAnisha from '../images/avatar-anisha.png'
import avatarAli from '../images/avatar-ali.png'
import avatarRichard from '../images/avatar-richard.png'
import avatarShanai from '../images/avatar-shanai.png'

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center ">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-centre">
          What they've said?
        </h2>
        {/* !-- Testimonials Container --> */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarAnisha} alt='logo'></img>
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/* <!-- Testimonial 2 --> */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarAli} alt='logo'></img>
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/* <!-- Testimonial 3 --> */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarRichard} alt='logo'></img>
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div> 
        </div>
            {/* Button */}
        <div class="my-16 mt-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
