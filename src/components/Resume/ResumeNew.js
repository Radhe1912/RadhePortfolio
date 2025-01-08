import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Radhe_Resume_Portfolio.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const contentRef = useRef();

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdf; // Reference to the imported PDF file
    link.download = "Radhe_Portfolio_Resume.pdf"; // Set the download filename
    link.click(); // Trigger the click to start the download
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume" ref={contentRef}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={downloadPDF} // Trigger the download function
            style={{ maxWidth: "250px" }}
          >
            Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;