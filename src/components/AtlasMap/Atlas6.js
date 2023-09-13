import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import {Link} from "react-router-dom";
import Arrow from "../../images_bg/left-arrow.png";

export default function Atlas5(){
    const docs = [
        {
            uri:"https://vocal-praline-30e769.netlify.app/Sinflarboyichaatlaslar/6-sinfatlasi2022.pdf",
            fileType:"pdf",
            fileName:" "
        }
    ]
    return(
        <React.Fragment>
            <br />
            <div className="container-xl">
                <div className="col">
                    <div className="circle">
                        <Link to="/spacecategory">
                            <img src={ Arrow } style={{margin:"18px 18px"}} alt="" />
                        </Link>
                    </div>
                </div>
            </div>

            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:1000}}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}