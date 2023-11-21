import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { Col, Row, Button, ButtonGroup, Dropdown, DropdownButton } from "@themesberg/react-bootstrap";
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import { ChannelsTable, CommandsTable, MerchantsTable, TransactionsTable } from "../components/Tables";
import useItemClick from "../components/hooks/useItemClick";

export default () => {
  const { showForm, handleItemClick, closeForm, visibility } = useItemClick();

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2" onClick={() => handleItemClick(visibility)}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <span>New</span>
          </Dropdown.Toggle>
        </Dropdown>
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} id="export-dropdown" title="Export" variant="outline-primary" size="sm">
            <Dropdown.Item>Export to Pdf</Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item>Export to Csv</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-primary" size="sm">
            Share
          </Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {showForm && <GeneralInfoForm onClose={closeForm} />}
        </Col>
      </Row>

      <ChannelsTable />
    </>
  );
};
