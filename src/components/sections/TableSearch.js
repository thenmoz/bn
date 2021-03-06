import React, { Component } from "react";
import Tabletop from "tabletop";
import { MDBDataTableV5 } from "mdbreact";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

function checkNetworkImage(data) {
  if (data === "ais" || data === "AIS")
    return (
      <Image
        src={require("./../../assets/images/ais-black.png")}
        alt="Features tile icon 01"
        width={26}
        height={26}
      />
    );
  else if (data === "true" || data === "TRUE")
    return (
      <Image
        src={require("./../../assets/images/true.png")}
        alt="Features tile icon 01"
        width={26}
        height={26}
      />
    );
  else if (data === "dtac" || data === "DTAC")
    return (
      <Image
        src={require("./../../assets/images/dtac-black.png")}
        alt="Features tile icon 01"
        width={26}
        height={26}
      />
    );
}

export default class BeautifyNumCopy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      users: [],
    };
  }
  componentDidMount() {
    // fetch(
    Tabletop.init({
      key: "1xMH3fcrfZJiS1hrO5LQhSuwg6oE6vGv6YUoDL6pGA-I",
      simpleSheet: true,
    })
      // )
      // .then((res) => res.json())
      .then((data) => {
        let dataFromApi = data.map((number) => {
          return {
            phoneNumber: number.phoneNumber,
            sum: number.sum,
            network: number.network,
            price: number.price,
            phoneNumber2: number.phoneNumber2,
            sum2: number.sum2,
            network2: number.network2,
            price2: number.price2,
          };
        });
        this.setState({
          users: dataFromApi,
        });
      })
      .catch((err) => console.warn(err));
  }
  render() {
    const dataRender = {
      columns: [
        {
          label: "หมายเลขโทรศัพท์",
          field: "phoneNumber",
          sort: "asc",
          width: 50,
        },
        {
          field: "sum",
          sort: "asc",
          width: 50,
        },
        {
          label: "เครือข่าย",
          field: "network",
          sort: "asc",
          width: 50,
        },
        {
          label: "ราคา",
          field: "price",
          sort: "asc",
          width: 50,
        },
        {
          label: "หมายเลขโทรศัพท์",
          field: "phoneNumber2",
          sort: "asc",
          width: 50,
        },
        {
          field: "sum2",
          sort: "asc",
          width: 50,
        },
        {
          label: "เครือข่าย",
          field: "network2",
          sort: "asc",
          width: 50,
        },
        {
          label: "ราคา",
          field: "price2",
          sort: "asc",
          width: 200,
        },
      ],
      rows: [
        ...this.state.users.map((data, i) => ({
          phoneNumber:"  " + JSON.stringify(data.phoneNumber).replace(/"|\n|\t|\r/g, ""),
          sum: JSON.stringify(data.sum).replace(/"/g, ""),
          network: checkNetworkImage(JSON.stringify(data.network).replace(/"/gi, "")),
          price: JSON.stringify(data.price).replace(/"/g, ""),
          phoneNumber2:"  " + JSON.stringify(data.phoneNumber2).replace(/"|\n|\t|\r/g, ""),
          sum2: JSON.stringify(data.sum2).replace(/"/g, ""),
          network2: checkNetworkImage(JSON.stringify(data.network2).replace(/"/gi, "")),
          price2: JSON.stringify(data.price2).replace(/"/g, ""),
        })),
      ],
    };
    const data = dataRender;
    console.log();
    const sectionHeader = {
      title: "ค้นหาเบอร์ถูกใจ",
    };
    return (
      <>
        <div className="section-black">
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="container">
            <MDBDataTableV5
              bordered
              small
              searching={false}
              pagesAmount={4}
              hover
              entries={1000}
              data={data}
            />
          </div>
        </div>
      </>
    );
  }
}
