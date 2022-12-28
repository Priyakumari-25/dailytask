import React, { useState } from "react";
// import Button from "@mui/material/Button";
import TreeView from "@mui/lab/TreeView";
// import Divider from "@mui/material/Divider";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
function Tree() {
  const [expanded, setExpanded] = useState([]);
  // const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
  //   setExpanded(nodeIds);
  // };
  // const handleExpandClick = (e) => {
  //   const id=e.target.value;
  //   // if(id===oldExpanded)
  //   setExpanded((oldExpanded,newExpanded) =>
  //     id===oldExpanded ? [oldExpanded] : [newExpanded],
  //     );
  // };
  return (
    <>
      <TreeView
        aria-label="file system navigator"
        // expanded={expanded}
        // onNodeToggle={handleToggle}
        sx={{ flexGrow: 1 }}
      >
        <TreeItem nodeId="1" label="Oragnisation Tree">
          <div className="treedetail">
            <div className="soft">
              <TreeItem
                nodeId="2"
                label="Software development"
                //  onClick={handleExpandClick()}
              >
                {/* {expanded.length === 0 ? 'Expand all' : 'Collapse all'} */}
                <div className="line">
                  <span className="number">6</span>
                </div>
                <div className="inner">
                  <div className="softdetail">
                    <TreeItem
                      nodeId="21"
                      label=" Manager-UI/UX Developerment"
                    />
                  </div>
                  <div className="softdetail">
                    <TreeItem
                      nodeId="32"
                      label="Director-Software Development"
                    />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="60" label="SD-Mobile Team">
                      <div className="line">
                        <span className="number">2</span>
                      </div>
                      <div className="inner">
                        <div className="softdetail">
                          <TreeItem nodeId="21" label=" Manager" />
                        </div>
                        <div className="softdetail">
                          <TreeItem nodeId="21" label="Lead" />
                        </div>
                      </div>
                    </TreeItem>
                  </div>

                  <div className="softdetail">
                    <TreeItem nodeId="34" label="Manger" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="35" label="Analyst" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="36" label="Associate-Software Engg" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="3" label="Account">
                <div className="line">
                  <span className="number">3</span>
                </div>

                <div className="inner attop">
                  <div className="softdetail">
                    <TreeItem nodeId="22" label="Analyst-Finanace & Account" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="40" label="Head-Finanace & Account" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="50" label="Specialist" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="4" label="CEO">
                <div className="line">
                  <span className="number">2</span>
                </div>
                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="23" label="FOUNDER & CEO" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="20" label="DIRECTOR" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="5" label="Manufacturing">
                <div className="line">
                  <span className="number">5</span>
                </div>

                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="24" label="Engineer-Production" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="11" label="Lead-Production" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="12" label="Sr.Engineer-Production" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="13" label="Office Assisstant" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="14" label="Dirctor-Manufacturing" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="6" label="Marketing">
                <div className="line">
                  <span className="number">2</span>
                </div>

                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="25" label="Head-Marketing" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="15" label="Analyst" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="7" label="Sales-Presales">
                <div className="line">
                  <span className="number">3</span>
                </div>

                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="26" label="Analyst-pre-Sales" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="16" label="Analyst-Product & pre-Sales" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="17" label="Specialist-Presales" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="8" label="Sales-Techno Sales India">
                <div className="line">
                  <span className="number">3</span>
                </div>

                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="27" label="Sales Manager" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="18" label="Territory Sales Manager" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="19" label="Field Sales Engg" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="9" label="Supply Chain Management">
                <div className="line">
                  <span className="number">2</span>
                </div>

                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="28" label="Manager-Store" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="30" label="Sr.Executive-Store" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="soft">
              <TreeItem nodeId="10" label="CEO's Office">
                <div className="line">
                  <span className="number">2</span>
                </div>

                <div className="inner">
                  <div className="softdetail">
                    <TreeItem nodeId="29" label="Analyst-Business and MIS" />
                  </div>
                  <div className="softdetail">
                    <TreeItem nodeId="31" label="Diector-Human Resources" />
                  </div>
                </div>
              </TreeItem>
            </div>
          </div>
        </TreeItem>
      </TreeView>
    </>
  );
}

export default Tree;
