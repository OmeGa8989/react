// rfce

import React from "react";

function Card({name , type}){
    console.log('name: ', name );
    return(
        <figure className="md:flex mb-5 rounded-xl p-8 md: dark: bg-gradient-to-r from-slate-700 to-slate-900">
        <img className="w-24 h-24 scale-[1.25] mt-5 rounded mx-auto" src="https://images.pexels.com/photos/2837579/pexels-photo-2837579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"></img>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium ml-2">
          "A sunset paints the sky with hues of orange and pink, casting a warm glow over the horizon. Silhouettes of trees and mountains stand stark against the vibrant backdrop, creating a serene and picturesque scene. As the sun dips below the horizon, the colors fade into twilight, ushering in the calm of evening."
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
            Adhyan Aditya
              
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            Aspiring SDE {name} , {type}
            </div>
          </figcaption>
        </div>
      </figure>
    )
}


export default Card
