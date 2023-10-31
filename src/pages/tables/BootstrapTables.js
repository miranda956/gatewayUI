import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faHome, faIdCard, faMobile } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { TransactionsTable } from "../../components/Tables";
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { faAlipay } from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-4">
        <div>
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Reports
              <span className="icon icon-small ms-1"><FontAwesomeIcon icon={faChevronDown} /></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faIdCard} className="me-2" /> B2B TILL
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faAlipay} className="me-2" /> C2B
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCreditCard} className="me-2" /> B2B Paybill
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faMobile} className="me-2" /> STK PUSH
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-success me-2" /> All Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex align-items-center">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">Share</Button>
            <Button variant="outline-primary" size="sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>

      <TransactionsTable />
    </>
  );
};
