import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface CardProps {
  title: string;
  text: string;
  acceptButtonText: string;
  rejectButtonText: string;
  initialStatus: string; // Hacemos que el status inicial sea obligatorio
}

const CustomCard: React.FC<CardProps> = ({
  title,
  text,
  acceptButtonText,
  rejectButtonText,
  initialStatus,
}) => {
  const [status, setStatus] = useState(initialStatus);

  const handleAccept = () => {
    setStatus("ayudantia aceptada");
  };

  const handleReject = () => {
    setStatus("ayudantia rechazada");
  };

  const renderStatus = () => {
    switch (status) {
      case "rejected":
        return (
          <Card.Text className="text-danger">POSTULACIÓN RECHAZADA</Card.Text>
        );
      case "pending":
        return <Card.Text className="text-secondary">PENDIENTE</Card.Text>;
      case "accepted":
        return <Card.Text className="text-success">ACEPTADO</Card.Text>;
      case "ayudantia aceptada":
        return (
          <Card.Text className="text-success">AYUDANTIA ACEPTADA</Card.Text>
        );
      case "ayudantia rechazada":
        return (
          <Card.Text className="text-danger">AYUDANTIA RECHAZADA</Card.Text>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="container mx-auto px-4 py-4 mt-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Estado: {renderStatus()}</Card.Text>
        {status !== "rejected" &&
          status !== "pending" &&
          status !== "ayudantia aceptada" &&
          status !== "ayudantia rechazada" && (
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-danger"
                className="me-2"
                onClick={handleReject}
              >
                {rejectButtonText}
              </Button>
              <Button variant="outline-primary" onClick={handleAccept}>
                {acceptButtonText}
              </Button>
            </div>
          )}
      </Card.Body>
    </Card>
  );
};

function WithHeaderExample() {
  return (
    <>
      <h1 className="text-center mt-4">Resultados de Postulación</h1>
      <CustomCard
        title="Bases de datos"
        text="Fecha de postulacion: 5-11-2024"
        acceptButtonText="Aceptar"
        rejectButtonText="Rechazar"
        initialStatus="accepted" // Estado de aceptado
      />
      <CustomCard
        title="Estadística Computacional"
        text="Fecha de postulacion: 4-11-2024"
        acceptButtonText="Aceptar"
        rejectButtonText="Rechazar"
        initialStatus="pending" // Estado pendiente
      />
      <CustomCard
        title="Programación"
        text="Fecha de postulacion: 31-10-2024"
        acceptButtonText="Aceptar"
        rejectButtonText="Rechazar"
        initialStatus="rejected" // Este debe mostrar el mensaje "RECHAZADO"
      />
    </>
  );
}

export default WithHeaderExample;
