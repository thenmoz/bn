import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
// import { Container, Row, Col } from "react-bootstrap";

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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  // const imgCheck = checkNetwork('ais')

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "ทะเบียนรถยนต์",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 ml-0 mr-0 h4-license ">7กส 888</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">1กก 50</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner3">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">6กข 8*</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">ฐx 65</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">ษท 9998</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner3">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">ษจ 8800</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">ญค 17</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license">ษก 9995</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license">ฐร 988</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">ภจ 1771</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>

            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license ">3กพ 31</h4>
                  <p className="m-0 text-license">กรุงเทพมหานคร</p>
                </div>
              </div>
            </div>
            <div className="tiles-item-license">
              <div className="tiles-item-inner2">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-4 h4-license color-gold">Coming</h4>
                  <p className="mb-0 h4-license pt-0 color-gold">soon !!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HotNew.propTypes = propTypes;
HotNew.defaultProps = defaultProps;

export default HotNew;
