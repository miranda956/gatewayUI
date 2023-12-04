import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, ButtonGroup, Dropdown, DropdownButton } from "@themesberg/react-bootstrap";
import { GeneralInfoForm } from "../components/Forms";
import { useExports } from "../components/hooks/useExports";
import { ChannelsTable } from "../components/Tables";
import useItemClick from "../components/hooks/useItemClick";
import channels from "../data/channels";

export default () => {
  const { showForm, handleItemClick, closeForm, visibility } = useItemClick();
  const { exportCSV, exportPDF } = useExports();

  const channelHeaders = ["CHANNEL_NAME", "USER_NAME", "CALLBACK_URL", "SHORTCODE", "STATUS"];

  const channelData = channels.map((c) => ({
    CHANNEL_NAME: c.channelName,
    USER_NAME: c.userName,
    CALLBACK_URL: c.callbackUrl,
    SHORTCODE: c.shortCode,
    STATUS: c.status,
  }));

  const rows = channels.map((c) => ({
    channelName: c.channelName,
    userName: c.userName,
    callbackUrl: c.callbackUrl,
    shortCode: c.shortCode,
    status: c.status,
  }));

  const columns = [
    { title: "CHANNEL_NAME", dataKey: "channelName" },
    { title: "USER_NAME", dataKey: "userName" },
    { title: "CALLBACK_URL", dataKey: "callbackUrl" },
    { title: "SHORTCODE", dataKey: "shortCode" },
    { title: "STATUS", dataKey: "status" },
  ];

  const handleExportCSV = () => {
    exportCSV(channelData, channelHeaders, "channels.csv");
  };

  const handleExportPDF = () => {
    exportPDF(rows, columns, "channels");
  };

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
            <Dropdown.Item onClick={handleExportPDF}>Export to Pdf</Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item onClick={handleExportCSV}>Export to Csv</Dropdown.Item>
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
