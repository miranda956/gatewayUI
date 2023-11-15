import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { CreateMerchant, GeneralInfoForm, UserSearch } from "../components/Forms";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import {MerchantTable } from "../components/Tables";
import useItemClick from "../components/hooks/useItemClick";


export default () => {


  const {showForm,handleItemClick,closeForm} = useItemClick()
  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <span>New</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item onClick={() => handleItemClick("Document")}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> New Merchant
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Message")}>
              <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Message
            </Dropdown.Item>
            {/* <Dropdown.Item>
              <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Product
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item>
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
              </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>

        
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {showForm &&< CreateMerchant onClose={closeForm} />}
        </Col>
      </Row>

      <MerchantTable />
    </>
  );
};
