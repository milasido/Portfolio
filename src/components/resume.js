import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import r from '../../src/components/Resume.pdf';

export default class resume extends Component {
    // constructor(props){
    //     super(props);
    //     pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    //     this.state = {
    //       numPages: null,
    //       pageNumber: 1
    //     }
    //   }
    
    //   onDocumentLoad = ( {numPages}) => {
    //     this.setState({numPages});
    //   }
    
      render() {
        // const {pageNumber, numPages} = this.state;
    
        return (
            <div className="col bg-faded py-3 flex-grow-1  container-fluid">
            {/* <div className="resume-frame">
                <Document file = {r}>
                    <Page pageNumber = {pageNumber} />
                </Document>
                <p> Page {pageNumber} of {numPages}</p>
            </div> */}
            <object clasName="resume-frame" data={r} type="application/pdf" width={"100%"} height={"100%"}/>
            </div>
    
        );
      }
    }
    