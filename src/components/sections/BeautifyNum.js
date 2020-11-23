import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const BeautifyNum = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'เบอร์สวย'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom boxex-color">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div>
                    <Image
                      src={require('./../../assets/images/ais.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    094-54242424
                    </h4>
                  <p className="m-0 text-sm">
                    89,000
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom boxex-color" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/ais.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    094-54242424
                    </h4>
                  <p className="m-0 text-sm">
                    89,000
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom boxex-color" data-reveal-delay="400">
              <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/ais.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    094-54242424
                    </h4>
                  <p className="m-0 text-sm">
                    89,000
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom boxex-color">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/ais.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    094-54242424
                    </h4>
                  <p className="m-0 text-sm">
                    89,000
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom boxex-color" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/ais.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    094-54242424
                    </h4>
                  <p className="m-0 text-sm">
                    89,000
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom boxex-color" data-reveal-delay="400">
              <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/ais.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    094-54242424
                    </h4>
                  <p className="m-0 text-sm">
                    89,000
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

BeautifyNum.propTypes = propTypes;
BeautifyNum.defaultProps = defaultProps;

export default BeautifyNum;