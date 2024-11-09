import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Application {
  title: string;
  option: string | null;
  date: string; // Fecha de postulación
}

interface CardProps {
  title: string;
  text: string;
  option: string | null;
  acceptButtonText: string;
  rejectButtonText: string;
  initialStatus: string;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  text,
  option,
  acceptButtonText,
  rejectButtonText,
  initialStatus,
}) => {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    if (title === "INF-239 Bases de datos") {
      setStatus("accepted");
    }
  }, [option]);

  useEffect(() => {
    if (title === "IWI-131 Programación") {
      setStatus("rejected");
    }
  }, [option]);

  const handleAccept = () => {
    setStatus("ayudantia aceptada");
  };

  const handleReject = () => {
    setStatus("ayudantia rechazada");
  };

  const renderStatus = () => {
    switch (status) {
      case "rejected":
        return <Card.Text className="text-danger">POSTULACIÓN RECHAZADA</Card.Text>;
      case "pending":
        return <Card.Text className="text-secondary">PENDIENTE</Card.Text>;
      case "accepted":
        return <Card.Text className="text-success">ACEPTADO</Card.Text>;
      case "ayudantia aceptada":
        return <Card.Text className="text-success">AYUDANTIA ACEPTADA</Card.Text>;
      case "ayudantia rechazada":
        return <Card.Text className="text-danger">AYUDANTIA RECHAZADA</Card.Text>;
      default:
        return null;
    }
  };

  return (
    <Card className="container mx-auto px-4 py-4 mt-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Postulacion a {option || "No especificada"}</Card.Text>
        <Card.Text>Estado: {renderStatus()}</Card.Text>
        {status !== "rejected" &&
          status !== "pending" &&
          status !== "ayudantia rechazada" && (
            <div className="d-flex justify-content-end">
              <Button variant="outline-danger" className="me-2" onClick={handleReject}>
                {rejectButtonText}
              </Button>
              {status !== "ayudantia aceptada" && (
                <Button variant="outline-primary" onClick={handleAccept}>
                  {acceptButtonText}
                </Button>
              )}
            </div>
          )}
      </Card.Body>
    </Card>
  );
};

const Resultados: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    // Recuperar las postulaciones del localStorage
    const storedApplications = JSON.parse(localStorage.getItem("applications") || "[]");
    setApplications(storedApplications);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Fecha no disponible" : date.toLocaleDateString();
  };

  return (
    <>
      <h1 className="text-center mt-4">Resultados de Postulación</h1>
      {applications.length > 0 ? (
        applications.map((app, index) => (
          <CustomCard
            key={index}
            title={app.title}
            text={`Fecha de postulación: ${formatDate(app.date) || "Fecha no disponible"}`}
            option={app.option}
            acceptButtonText="Aceptar"
            rejectButtonText="Rechazar"
            initialStatus={app.option === "bases de datos" ? "ayudantia aceptada" : "pending"} // Estado inicial de cada tarjeta
          />
        ))
      ) : (
        <p>No hay postulaciones guardadas.</p>
      )}
    </>
  );
};

export default Resultados;


