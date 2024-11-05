import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

interface CardProps {
  title: string;
  text: string;
  buttonText: string;
  description: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  text,
  buttonText,
  description,
}) => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <Card className="container mx-auto px-4 py-4 mt-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleShow}>
            {buttonText}
          </Button>
        </div>
      </Card.Body>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title} - Formulario de Postulacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <Form>
            <Form.Group className="mb-3">
              {/* Checkbox para decidir si ser de catedra o de laboratorios */}
              <Form.Check
                type="radio"
                label="Cátedra"
                checked={selectedOption === "catedra"}
                onChange={() => handleCheckboxChange("catedra")}
              />
              <Form.Check
                type="radio"
                label="Laboratorio"
                checked={selectedOption === "laboratorio"}
                onChange={() => handleCheckboxChange("laboratorio")}
              />
            </Form.Group>

            {/*Partes del formulario a rellenar*/}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Motivaciones</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            {/* Checkbox para aceptar que leyo el instructivo de ayudantias */}
            <Form.Check type="checkbox" id="custom-checkbox">
              <Form.Check.Input type="checkbox" />
              <Form.Check.Label>
                He leído el instructivo de ayudantías
              </Form.Check.Label>
              <Form.Control.Feedback
                type="valid"
                style={{
                  display: "block",
                  fontSize: "0.875em",
                  color: "#6c757d",
                }}
              >
                Asegúrate de leer completamente el instructivo antes de
                continuar {" "}
                <a
                  href="https://usmcl-my.sharepoint.com/:b:/g/personal/alejandro_rojo_usm_cl/EYmqNRjeJwxCn5HuKdmQ950BeipAGTTXmb77akpeb4Ec0Q?e=XPP5B0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                aquí.
                </a>
              </Form.Control.Feedback>
            </Form.Check>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar Postulación
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

function WithHeaderExample() {
  const formatDescription = (text: string) => {
    return text.split("\n").map((line: string, i: number) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <CustomCard
        title="INF-239 Bases de datos"
        text="With supporting text below as a natural lead-in to additional content."
        buttonText="Postular a ayudantía"
        description={formatDescription(
          "Ayudante base de datos\n123 horas mensuales, 4 bloques de catedra semanales\nCrear y corregir tareas"
        )}
      />
      <CustomCard
        title="INF-280 Estadística Computacional"
        text="With supporting text below as a natural lead-in to additional content."
        buttonText="Postular a ayudantía"
        description={formatDescription(
          "Ayudante estadística computacional\n100 horas mensuales, 3 bloques de catedra semanales\nCrear y corregir tareas"
        )}
      />
      <CustomCard
        title="IWI-131 Programación"
        text="With supporting text below as a natural lead-in to additional content."
        buttonText="Postular a ayudantía"
        description={formatDescription(
          "Ayudante programación\n150 horas mensuales, 5 bloques de catedra semanales\nCrear y corregir tareas"
        )}
      />
    </>
  );
}

export default WithHeaderExample;
