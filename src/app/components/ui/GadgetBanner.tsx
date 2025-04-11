"use client"


const GadgetBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url("/images/11.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment:"fixed"
        }}
        className="min-h-[50vh] py-12"
      ></div>
    </div>
  );
};

export default GadgetBanner;
