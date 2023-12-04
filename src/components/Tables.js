import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faShare,
  faEdit,
  faEnvelopeOpen,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faCheck,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from "@themesberg/react-bootstrap";

import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import channels from "../data/channels";
import commands from "../data/commands";
import users from "../data/users";
import SendMail from "./Modals";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    "--"
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td>
          <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Page visits</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See all
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Page name</th>
            <th scope="col">Page Views</th>
            <th scope="col">Page Value</th>
            <th scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const { id, source, sourceIcon, sourceIconColor, sourceType, category, rank, trafficShare, change } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0} max={100} />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const { country, countryImage, overallRank, overallRankChange, travelRank, travelRankChange, widgetsRank, widgetsRankChange } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image src={countryImage} className="image-small rounded-circle me-2" />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const TransactionsTable = ({ isAdmin }) => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { transactionId, service, account, date, amount, status, merchantId } = props;
    const statusVariant = status === "Paid" ? "success" : status === "Due" ? "warning" : status === "Canceled" ? "danger" : "primary";

    return (
      <tr>
        {isAdmin && (
          <td>
            <span className="fw-normal">{merchantId}</span>
          </td>
        )}
        <td>
          <span className="fw-normal">{transactionId}</span>
        </td>
        <td>
          <span className="fw-normal">{service}</span>
        </td>
        <td>
          <span className="fw-normal">{account}</span>
        </td>
        <td>
          <span className="fw-normal">{date}</span>
        </td>
        <td>
          <span className="fw-normal">${parseFloat(amount).toFixed(2)}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faShare} className="me-2" /> Share
              </Dropdown.Item>
              {/* <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <h5 className="mb-4 mt-4">Transactions Report</h5>
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              {isAdmin && <th className="border-bottom">MERCHANT_ID</th>}
              <th className="border-bottom">TRANSACTION_ID</th>
              <th className="border-bottom">SERVICE</th>
              <th className="border-bottom">ACCOUNT</th>
              <th className="border-bottom">DATE</th>
              <th className="border-bottom">AMOUNT</th>
              <th className="border-bottom">STATUS</th>
              <th className="border-bottom">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <TableRow key={`transaction-${t.transactionId}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table responsive className="table-centered rounded" style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c) => (
              <TableRow key={`command-${c.id}`} {...c} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const ChannelsTable = () => {
  const totalChannels = channels.length;

  const TableRow = (props) => {
    const { channelName, userName, callbackUrl, shortCode, status } = props;
    const statusVariant = status === "Active" ? "success" : status === "Dormant" ? "warning" : status === "Inactive" ? "danger" : "primary";

    return (
      <tr>
        <td>
          <span className="fw-normal">{channelName}</span>
        </td>
        <td>
          <span className="fw-normal">{userName}</span>
        </td>
        <td>
          <span className="fw-normal">{callbackUrl}</span>
        </td>
        <td>
          <span className="fw-normal">{shortCode}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Channel
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <h5 className="mb-4 mt-4">Channels</h5>

        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">CHANNEL_NAME</th>
              <th className="border-bottom">USER_NAME</th>
              <th className="border-bottom">CALLBACK_URL</th>
              <th className="border-bottom">SHORTCODE</th>
              <th className="border-bottom">STATUS</th>
              <th className="border-bottom">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((channel) => (
              <TableRow key={`channel-${channel.channelId}`} {...channel} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalChannels}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const UsersTable = () => {
  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const [usersData, setUsersData] = useState(users);
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [showMailModal, setShowMailModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const handleSendMailClick = (email) => {
    setShowMailModal(true);
    setSelectedEmail(email);
  };

  const TableRow = (props) => {
    const { id, name, phone, email, joinDate, status, lastLogin } = props;

    const statusVariant = status === "Active" ? "success" : status === "Dormant" ? "warning" : status === "Inactive" ? "danger" : "primary";
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

    const handleEditClick = () => {
      setEditedData({ id, name, phone, email, status, lastLogin });
      setIsEditing(true);
    };

    const handleSaveClick = () => {
      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          return { ...user, ...editedData };
        }
        return user;
      });

      setUsersData(updatedUsers);

      setIsEditing(false);
    };

    const handleCancelClick = () => {
      setIsEditing(false);
    };
    return (
      <tr>
        <td>
          {isEditing ? (
            <input type="text" value={editedData.name} onChange={(e) => setEditedData({ ...editedData, name: e.target.value })} />
          ) : (
            <span className="fw-normal">{name}</span>
          )}
        </td>
        <td>
          {isEditing ? (
            <input type="text" value={editedData.phone} onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })} />
          ) : (
            <span className="fw-normal">{phone}</span>
          )}
        </td>
        <td>
          {isEditing ? (
            <input type="text" value={editedData.email} onChange={(e) => setEditedData({ ...editedData, email: e.target.value })} />
          ) : (
            <span className="fw-normal">{email}</span>
          )}
        </td>
        <td>
          <span className="fw-normal">{joinDate}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <span className="fw-normal">{lastLogin}</span>
        </td>

        <td>
          {isEditing ? (
            <>
              <FontAwesomeIcon icon={faCheck} className="me-2" onClick={handleSaveClick} />
              <FontAwesomeIcon icon={faAsterisk} className="me-2" onClick={handleCancelClick} />
            </>
          ) : (
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleEditClick}>
                  <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Details
                </Dropdown.Item>

                <Dropdown.Item onClick={() => handleSendMailClick(email)}>
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Send Mail
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </td>
      </tr>
    );
  };

  return (
    <>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <h5 className="mb-4 mt-4">Users list</h5>
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">NAME</th>
                <th className="border-bottom">PHONE</th>
                <th className="border-bottom">EMAIL</th>
                <th className="border-bottom">JOIN_DATE</th>
                <th className="border-bottom">STATUS</th>
                <th className="border-bottom">LAST_LOGIN</th>
                <th className="border-bottom">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <TableRow key={`user-${user.id}`} {...user} />
              ))}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </Pagination.Prev>
                {[...Array(totalPages).keys()].map((page) => (
                  <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => handlePageChange(page + 1)}>
                    {page + 1}
                  </Pagination.Item>
                ))}

                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{indexOfFirstUser + 1}</b> to <b>{Math.min(indexOfLastUser, users.length)}</b> of <b>{users.length}</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>

      {/* Send Mail Modal */}
      <SendMail
        show={showMailModal}
        onClose={() => setShowMailModal(false)}
        onSend={() => {
          setShowMailModal(false);
        }}
        email={selectedEmail}
      />
    </>
  );
};

export const MerchantTable = () => {
  const allUsers = users.length;

  const [showMailModal, setShowMailModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const [merchants, setMerchants] = useState(users);

  const handleSendMailClick = (email) => {
    setShowMailModal(true);
    setSelectedEmail(email);
  };

  const TableRow = (props) => {
    const { name, phone, email, status, lastLogin, id } = props;

    const statusVariant = status === "Active" ? "success" : status === "Dormant" ? "warning" : status === "Inactive" ? "danger" : "primary";

    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

    const handleEditClick = () => {
      setEditedData({ id, name, phone, email, status, lastLogin });
      setIsEditing(true);
    };

    const handleSaveClick = () => {
      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          return { ...user, ...editedData };
        }
        return user;
      });

      setMerchants(updatedUsers);

      setIsEditing(false);
    };

    const handleCancelClick = () => {
      setIsEditing(false);
    };

    return (
      <tr>
        <td>
          <span className="fw-normal">{id}</span>
        </td>
        <td>
          {isEditing ? (
            <input type="text" value={editedData.name} onChange={(e) => setEditedData({ ...editedData, name: e.target.value })} />
          ) : (
            <span className="fw-normal">{name}</span>
          )}
        </td>
        <td>
          {isEditing ? (
            <input type="text" value={editedData.phone} onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })} />
          ) : (
            <span className="fw-normal">{phone}</span>
          )}
        </td>
        <td>
          {isEditing ? (
            <input type="text" value={editedData.email} onChange={(e) => setEditedData({ ...editedData, email: e.target.value })} />
          ) : (
            <span className="fw-normal">{email}</span>
          )}
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <span className="fw-normal">{lastLogin}</span>
        </td>

        <td>
          {isEditing ? (
            <>
              <FontAwesomeIcon icon={faCheck} className="me-2" onClick={handleSaveClick} />
              <FontAwesomeIcon icon={faAsterisk} className="me-2" onClick={handleCancelClick} />
            </>
          ) : (
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleEditClick}>
                  <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Details
                </Dropdown.Item>

                <Dropdown.Item onClick={() => handleSendMailClick(email)}>
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Send Mail
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </td>
      </tr>
    );
  };

  return (
    <>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <h5 className="mb-4 mt-4">Merchants</h5>
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">MERCHANT_ID</th>
                <th className="border-bottom">NAME</th>
                <th className="border-bottom">PHONE</th>
                <th className="border-bottom">EMAIL</th>
                <th className="border-bottom">STATUS</th>
                <th className="border-bottom">LAST_LOGIN</th>
                <th className="border-bottom">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((user) => (
                <TableRow key={`user-${user.id}`} {...user} />
              ))}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{allUsers}</b> out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>

      {/* Send Mail Modal */}
      <SendMail
        show={showMailModal}
        onClose={() => setShowMailModal(false)}
        onSend={() => {
          setShowMailModal(false);
        }}
        email={selectedEmail}
      />
    </>
  );
};

export const ServicesTable = ({ isAdmin }) => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { transactionId, service, account, status, merchantId } = props;
    const statusVariant = status === "Paid" ? "success" : status === "Due" ? "warning" : status === "Canceled" ? "danger" : "primary";

    return (
      <tr>
        <td>
          <span className="fw-normal">{merchantId}</span>
        </td>
        <td>
          <span className="fw-normal">{transactionId}</span>
        </td>
        <td>
          <span className="fw-normal">{service}</span>
        </td>
        <td>
          <span className="fw-normal">{account}</span>
        </td>

        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> Activate
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Deactivate
              </Dropdown.Item>
              {/* <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <h5 className="mb-4 mt-4">Services Report</h5>
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">MERCHANT_ID</th>
              <th className="border-bottom">SERVICE_ID</th>
              <th className="border-bottom">DESCRIPTION</th>
              <th className="border-bottom">DURATION</th>
              <th className="border-bottom">STATUS</th>
              <th className="border-bottom">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <TableRow key={`transaction-${t.transactionId}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
