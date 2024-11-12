const CurrentWeather=({weather,main})=>{
    return(
        <>
              <div className="flex-col ">
            <h6 className='text-md ps-5'>Current weather</h6>
            <div className="flex items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                alt="Weather Icon"
                className=" object-cover"
              />
              <h1 className="text-6xl xxs:text-4xl font-extralight relative">
                {`${Math.floor(Number(main?.feels_like))}`}
                <span className="absolute -top-2 text-xl font-medium">°C</span>
              </h1>
              </div>
            </div>
        </>
    );
}
export  default CurrentWeather