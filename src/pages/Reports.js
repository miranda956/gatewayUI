import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";
import { ServicesTable, TransactionsTable, UsersTable } from "../components/Tables";

export default () => {
  const [selectedOption, setSelectedOption] = useState("Transactions");
  const [dropdownLabel, setDropdownLabel] = useState("Reports");

  const handleOptionChange = (option, label) => {
    setSelectedOption(option);
    setDropdownLabel(label);
  };

  const renderTableComponent = () => {
    switch (selectedOption) {
      case "Transactions":
        return <TransactionsTable isAdmin={true} />;
      case "Services":
        return <ServicesTable />;
      case "Users":
        return <UsersTable />;
      case "AllReports":
        return (
          <>
            <div className="mt-4">
              <TransactionsTable isAdmin={true}/>
            </div>
            <div className="mt-4">
              <ServicesTable />
            </div>
            <div className="mt-4">
              <UsersTable />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Reports</h4>
        </div>

        <div className="d-flex">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">
              Share
            </Button>
            <Button variant="outline-primary" size="sm">
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="d-flex">
        <Dropdown className="mb-4">
          <Dropdown.Toggle as={Button} variant="primary">
            <FontAwesomeIcon icon={faClipboard} className="me-2" /> {dropdownLabel}
            <span className="icon icon-small ms-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
            <Dropdown.Item
              onClick={() => handleOptionChange("Transactions", "Transaction Reports")}
            >
              <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Transactions Reports
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleOptionChange("Users", "Users Reports")}
            >
              <FontAwesomeIcon icon={faStore} className="me-2" /> Users Reports
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleOptionChange("Services", "Services Reports")}
            >
              <FontAwesomeIcon icon={faCartArrowDown} className="me-2" /> Services Reports
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item
              onClick={() => handleOptionChange("AllReports", "All Reports")}
            >
              <FontAwesomeIcon icon={faRocket} className="text-success me-2" /> All Reports
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {renderTableComponent()}
    </>
  );
};
