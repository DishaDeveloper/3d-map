import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./App.scss";

const canUseDOM = () => {
  return (
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

const detectMobile = () => {
  return canUseDOM() && window.innerWidth <= 1023;
};

const data = {
  desktopImage: {
    html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/image-without-pins.png?h=834&amp;iar=0&amp;w=2001' alt='' />",
    src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/image-without-pins.png",
    alt: "",
  },
  mobileImage: {
    html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/component-2.png?h=2961&amp;iar=0&amp;w=2048' alt='' />",
    src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/component-2.png",
    alt: "",
  },
  enableImageCordinate: true,
  locations: [
    {
      title: "Sea World",
      subTitle: "Abu Dhabi, United Arab Emirates",
      description:
        "Yas Kartzone is a Kart racing track located on Yas Island in Abu Dhabi, United Arab Emirates",
      lngDesktop: 49.38,
      latDesktop: 83.71,
      lngMobile: 84,
      latMobile: 59,
      bookTicket: {
        href: "/en/yasisland/",
        html: "<a href='/en/yasisland/'>Home</a>",
        label: "Home",
        title: "",
        target: "",
      },
      contactNumber: "123456789",
      pin: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/theme.png?h=71&amp;iar=0&amp;w=84' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/theme.png",
        alt: "",
      },
      locationImage: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png?h=204&amp;iar=0&amp;w=204' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png",
        alt: "",
      },
      hours: [
        {
          dayTitle: "Mon-Fri : ",
          openTime: "05:00:00Z",
          closeTime: "19:00:00Z",
        },
      ],
    },
    {
      title: "Ferrari World",
      subTitle: "Abu Dhabi, United Arab Emirates",
      description:
        "Yas Kartzone is a Kart racing track located on Yas Island in Abu Dhabi, United Arab Emirates",
      lngDesktop: 24,
      latDesktop: 54,
      lngMobile: 24,
      latMobile: 54,
      bookTicket: {
        href: "/en/yasisland/",
        html: "<a href='/en/yasisland/'>Home</a>",
        label: "Home",
        title: "",
        target: "",
      },
      contactNumber: "123456789",
      pin: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/event.png?h=71&amp;iar=0&amp;w=84' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/event.png",
        alt: "",
      },
      locationImage: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png?h=204&amp;iar=0&amp;w=204' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png",
        alt: "",
      },
      hours: [
        {
          dayTitle: "Mon-Fri : ",
          openTime: "05:00:00Z",
          closeTime: "19:00:00Z",
        },
      ],
    },
    {
      title: "Ferrari World",
      subTitle: "Abu Dhabi, United Arab Emirates",
      description:
        "Yas Kartzone is a Kart racing track located on Yas Island in Abu Dhabi, United Arab Emirates",
      lngDesktop: 24,
      latDesktop: 25,
      lngMobile: 20,
      latMobile: 44,
      bookTicket: {
        href: "/en/yasisland/",
        html: "<a href='/en/yasisland/'>Home</a>",
        label: "Home",
        title: "",
        target: "",
      },
      contactNumber: "123456789",
      pin: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/event.png?h=71&amp;iar=0&amp;w=84' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/event.png",
        alt: "",
      },
      locationImage: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png?h=204&amp;iar=0&amp;w=204' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png",
        alt: "",
      },
      hours: [
        {
          dayTitle: "Mon-Fri : ",
          openTime: "05:00:00Z",
          closeTime: "19:00:00Z",
        },
      ],
    },
    {
      title: "ACE",
      subTitle: "Abu Dhabi, United Arab Emirates",
      description:
        "Yas Kartzone is a Kart racing track located on Yas Island in Abu Dhabi, United Arab Emirates",
      lngDesktop: 79,
      latDesktop: 64,
      lngMobile: 54,
      latMobile: 57,
      bookTicket: {
        href: "/en/yasisland/",
        html: "<a href='/en/yasisland/'>Home</a>",
        label: "Home",
        title: "",
        target: "",
      },
      contactNumber: "123456789",
      pin: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/explore.png?h=71&amp;iar=0&amp;w=84' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/explore.png",
        alt: "",
      },
      locationImage: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png?h=204&amp;iar=0&amp;w=204' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png",
        alt: "",
      },
      hours: [
        {
          dayTitle: "Mon-Fri : ",
          openTime: "05:00:00Z",
          closeTime: "19:00:00Z",
        },
      ],
    },
    {
      title: "Sea World",
      subTitle: "Abu Dhabi, United Arab Emirates",
      description:
        "Yas Kartzone is a Kart racing track located on Yas Island in Abu Dhabi, United Arab Emirates",
      lngDesktop: 23,
      latDesktop: 25,
      lngMobile: 82,
      latMobile: 27,
      bookTicket: {
        href: "/en/yasisland/",
        html: "<a href='/en/yasisland/'>Home</a>",
        label: "Home",
        title: "",
        target: "",
      },
      contactNumber: "123456789",
      pin: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/dine.png?h=71&amp;iar=0&amp;w=84' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/project/yasisland/3dmap/dine.png",
        alt: "",
      },
      locationImage: {
        html: "<img src='https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png?h=204&amp;iar=0&amp;w=204' alt='' />",
        src: "https://uat2-static.myconnect.ae/yasisland/-/media/yasconnect/390x382/547-390x382/frame-2610364.png",
        alt: "",
      },
      hours: [
        {
          dayTitle: "Mon-Fri : ",
          openTime: "05:00:00Z",
          closeTime: "19:00:00Z",
        },
      ],
    },
  ],
};

const App = () => {
  const { locations, enableImageCordinate, desktopImage, mobileImage } = data;
  console.log(locations, "@@");
  const [bounds, setBounds] = useState(null);
  const [info, setInfo] = useState({ number: false, time: false });
  const mapContainerRef = useRef(null);
  const mapWrapperRef = useRef(null);
  const mapRef = useRef(null);
  const [mapImage, setMapImage] = useState(null);
  const [leaflet, setLeaflet] = useState(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const isMobileOrTablet =
    canUseDOM() && typeof window !== "undefined" && window.innerWidth;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof window !== "undefined") {
        import("leaflet").then((L) => {
          setLeaflet(L);
        });
      }
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = isMobileOrTablet <= 1024 ? mobileImage?.src : desktopImage?.src;
    let containerHeight, containerWidth;
    if (mapContainerRef?.current) {
      containerHeight =
        isMobileOrTablet <= 1024 ? (isMobileOrTablet < 768 ? 600 : 900) : 675;
      containerWidth =
        isMobileOrTablet <= 1024
          ? mapWrapperRef?.current?.getBoundingClientRect()?.width
          : 1200;
    }
    img.onload = () => {
      containerWidth &&
        setBounds([
          [0, 0],
          [containerHeight, containerWidth],
        ]);
      setMapImage(img.src);
      if (mapContainerRef?.current) {
        mapContainerRef.current.style.height = `${containerHeight}`;
        mapContainerRef.current.style.width =
          isMobileOrTablet <= 1024 ? `${containerWidth}px` : `1200px`;
      }
    };
  }, [mapImage]);

  const getMarkerPosition = (lngPercent, latPercent) => {
    if (!bounds) return [0, 0];
    const [maxLat, maxLng] = bounds[1];
    const lat = (parseFloat(latPercent) / 100) * maxLat - 10;
    const lng = (parseFloat(lngPercent) / 100) * maxLng + 35;
    return [lat, lng];
  };

  const handleMouseMove = (event) => {
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((rect.bottom - event.clientY) / rect.height) * 100;
      setCoordinates({
        x: xPercent.toFixed(2),
        y: yPercent.toFixed(2),
      });
    }
  };

  const resetMapView = () => {
    if (mapRef.current && bounds) {
      setInfo({ number: false, time: false });
      if (mapRef.current) {
        mapRef.current.fitBounds(bounds);
      }
    }
  };

  const IOSDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
  };

  useEffect(() => {
    if (bounds && mapContainerRef.current && !IOSDevice()) {
      leaflet.map(mapContainerRef.current, {
        bounds: bounds,
      });
    }
  }, [bounds]);

  if (!mapImage || !leaflet) {
    return <></>;
  }

  const closePopup = () => {
    if (mapRef.current) {
      mapRef.current.closePopup();
    }
  };

  const { Map, ImageOverlay, Marker, Popup } = require("react-leaflet");

  const handleRedirect = (urlvalue) => {
    if (urlvalue) {
      window.open(urlvalue?.href, urlvalue?.target);
    }
  };

  return (
    <div
      className={`component component-3D-map ${
        canUseDOM() && IOSDevice() ? "ios-map" : ""
      }`}
    >
      {enableImageCordinate && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                X: {coordinates.x}%, Y: {coordinates.y}%
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div ref={mapWrapperRef}>
              <div
                id="map-container"
                ref={mapContainerRef}
                onMouseMove={handleMouseMove}
                style={{
                  margin: "0 auto",
                  position: "relative",
                  maxWidth: "100vw",
                  overflow: "hidden",
                }}
              >
                {bounds && (
                  <Map
                    center={[bounds[1][0] / 2, bounds[1][1] / 2]}
                    zoom={0}
                    crs={leaflet.CRS.Simple}
                    bounds={bounds}
                    style={{
                      height:
                        isMobileOrTablet <= 1024
                          ? isMobileOrTablet < 768
                            ? "600px"
                            : "900px"
                          : "675px",
                      width: isMobileOrTablet <= 1024 ? "100%" : "1200px",
                    }}
                    ref={(mapInstance) => {
                      if (mapInstance && !mapRef.current) {
                        mapRef.current = mapInstance.leafletElement;
                      }
                    }}
                  >
                    <ImageOverlay url={mapImage} bounds={bounds} />
                    {locations.map((location, index) => (
                      <Marker
                        key={index}
                        position={
                          isMobileOrTablet <= 1024
                            ? getMarkerPosition(
                                location.lngMobile,
                                location.latMobile
                              )
                            : getMarkerPosition(
                                location.lngDesktop,
                                location.latDesktop
                              )
                        }
                        icon={leaflet.icon({
                          iconUrl: location?.pin?.src,
                          iconSize: [50, 42],
                          iconAnchor: [50, 42],
                          popupAnchor: [-25, -42],
                        })}
                      >
                        <Popup onClose={resetMapView}>
                          <div className="location-modal-container">
                            <div className="location-img">
                              {location?.locationImage && (
                                <img src={location?.locationImage?.src} />
                              )}
                            </div>
                            <div className="location-content">
                              <div className="location-text">
                                <div className="title-icon">
                                  {location.title && (
                                    <h4 className=" location-title">
                                      {location.title}
                                    </h4>
                                  )}
                                  {canUseDOM() &&
                                    IOSDevice() &&
                                    detectMobile() && (
                                      <button
                                        onPointerDown={() => closePopup()}
                                        onClick={() => closePopup()}
                                        type="button"
                                        className="leaflet-popup-custom-close-button"
                                      >
                                        x
                                      </button>
                                    )}
                                </div>
                                {location.subTitle && (
                                  <p className="location-sub-title">
                                    {location.subTitle}
                                  </p>
                                )}
                                {!info.number &&
                                  !info?.time &&
                                  location.description && (
                                    <p
                                      className={`location-description ${
                                        info.number || info?.time
                                          ? "max-height-content"
                                          : ""
                                      }`}
                                    >
                                      {location.description}
                                    </p>
                                  )}
                              </div>
                              <div className="location-section">
                                {(info.number || info?.time) && (
                                  <div className="location-info">
                                    {info.number ? (
                                      <div className={`location-phone`}>
                                        <AnchorLink
                                          link={{
                                            href: `tel:${location?.contactNumber}`,
                                            label: `<span class="number-text">${location?.contactNumber}</span>`,
                                          }}
                                        />
                                      </div>
                                    ) : (
                                      location.hours && (
                                        <div className="location-hours">
                                          {location.hours.map((time, i) => (
                                            <div
                                              key={i}
                                              className="location-hour"
                                            >
                                              <strong>
                                                {time.dayTitle ||
                                                  UIConfig?.calendar?.day}
                                              </strong>
                                              <span>10 to 12</span>
                                            </div>
                                          ))}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                                <div className="location-footer">
                                  <div className="location-details">
                                    <div
                                      className={`location-tag ${
                                        info?.number ? "active-tag" : ""
                                      }`}
                                      onClick={() =>
                                        setInfo({
                                          number: !info.number,
                                          time: false,
                                        })
                                      }
                                      onPointerDown={() =>
                                        IOSDevice() &&
                                        setInfo({
                                          number: !info.number,
                                          time: false,
                                        })
                                      }
                                    >
                                      p
                                    </div>
                                    <div
                                      className={`location-tag ${
                                        info?.time ? "active-tag" : ""
                                      }`}
                                      onClick={() =>
                                        setInfo({
                                          number: false,
                                          time: !info.time,
                                        })
                                      }
                                      onPointerDown={() =>
                                        IOSDevice() &&
                                        setInfo({
                                          number: false,
                                          time: !info.time,
                                        })
                                      }
                                    >
                                      clock
                                    </div>
                                  </div>
                                  <div className="location-link">
                                    <button
                                      className="cta-button primary"
                                      onClick={() =>
                                        (window.location.href =
                                          location?.bookTicket?.href)
                                      }
                                      onPointerDown={() =>
                                        IOSDevice() &&
                                        handleRedirect(location?.bookTicket)
                                      }
                                    >
                                      {location?.bookTicket?.label}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </Map>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
