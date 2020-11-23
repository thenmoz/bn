import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import {Table} from "react-bootstrap";
// import DataTable, { createTheme } from 'react-data-table-component';
// import Image from '../elements/Image';

// createTheme('solarized', {
//     text: {
//       primary: '#268bd2',
//       secondary: '#2aa198',
//     },
//     background: {
//       default: '#002b36',
//     },
//     context: {
//       background: '#cb4b16',
//       text: '#FFFFFF',
//     },
//     divider: {
//       default: '#073642',
//     },
//     action: {
//       button: 'rgba(0,0,0,.54)',
//       hover: 'rgba(0,0,0,.08)',
//       disabled: 'rgba(0,0,0,.12)',
//     },
// });

// const MyComponent = () => (
//     <DataTable
//       title="Arnold Movies"
//       columns={columns}
//       theme="solarized"
//     />
//   );

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

//   const tilesClasses = classNames(
//     "tiles-wrap center-content",
//     pushLeft && "push-left"
//   );

  const sectionHeader = {
    title: "ค้นหาเบอร์ถูกใจ",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>เบอร์โทรศัพท์</th>
                <th>เครือข่าย</th>
                <th>ราคา</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>098-117-7777</td>
                <td>AIS</td>
                <td>100000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

BeautifyNum.propTypes = propTypes;
BeautifyNum.defaultProps = defaultProps;

export default BeautifyNum;
