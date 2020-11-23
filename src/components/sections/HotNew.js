import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Tabletop from "tabletop";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

// const pics = checkNetwork(data)
const HotNew = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section section-black",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  // const imgCheck = checkNetwork('ais')

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-1",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "เบอร์ใหม่มาแรง",
  };
  function checkNetwork(data) {
    if (data === "ais" || data === "AIS")
      return require("./../../assets/images/ais-white.png");
    else if (data === "true" || data === "TRUE")
      return require("./../../assets/images/true.png");
    else return require("./../../assets/images/dtac-white.png");
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1NZwNTaji_FNNvnBRzy3hO86BWRTSvOQWm2mKX8rhciI",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {data
              .filter((filterBeautiful) => {
                if (filterBeautiful.type === "VIP" ) {
                  return true;
                } else return false;
              })
              .map((item, i) => (
                <div className="tiles-item" key={i}>
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="imgPad">
                        <Image
                          src={checkNetwork(item.network)}
                          alt="Features tile icon 01"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">{item.phoneNumber}</h4>
                      <p className="m-0 text-sm">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

HotNew.propTypes = propTypes;
HotNew.defaultProps = defaultProps;

export default HotNew;
