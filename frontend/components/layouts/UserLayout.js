import { Accordion } from "react-bootstrap";
import UserLayoutLinks from "./UserLayoutLinks";

const UserLayout = ({ style, children }) => {
  return (
    <>
      <div className="container-xxl mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="menu-desktop  shadow-sm">
              <UserLayoutLinks />
            </div>
            <div className="menu-mobile mb-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h3>Menu Bar</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <UserLayoutLinks />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-sm-12">
            <div style={style} className="kitchen-body">
              {children}
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default UserLayout;
