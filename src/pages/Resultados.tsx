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

const CustomCard: React.FC<CardProps> = ({ title, text, acceptButtonText, rejectButtonText, initialStatus }) => {
    const [status, setStatus] = useState(initialStatus);

    const handleAccept = () => {
        setStatus("ayudantia aceptada");
    };

    const handleReject = () => {
        setStatus("ayudantia rechazada");
    };

    return (
        <Card className="container mx-auto px-4 py-4 mt-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                
                {/* Mostrar "RECHAZADO" si el estado es "rejected" */}
                {status === "rejected" && <Card.Text className="text-danger">RECHAZADO</Card.Text>}
                
                {/* Mostrar "PENDIENTE" si el estado es "pending" */}
                {status === "pending" && <Card.Text className="text-secondary">PENDIENTE</Card.Text>}
                
                {/* Mostrar "ACEPTADO" si el estado es "accepted" */}
                {status === "accepted" && <Card.Text className="text-success">ACEPTADO</Card.Text>}
                
                {/* Mostrar "AYUDANTIA ACEPTADA" si el estado es "ayudantia aceptada" */}
                {status === "ayudantia aceptada" && <Card.Text className="text-success">AYUDANTIA ACEPTADA</Card.Text>}
                
                {/* Mostrar "AYUDANTIA RECHAZADA" si el estado es "ayudantia rechazada" */}
                {status === "ayudantia rechazada" && <Card.Text className="text-danger">AYUDANTIA RECHAZADA</Card.Text>}
                
                {/* Mostrar los botones solo si el estado no es "rejected" o "pending" */}
                {status !== "rejected" && status !== "pending" && status !== "ayudantia aceptada" && status !== "ayudantia rechazada" && (
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-danger" className="me-2" onClick={handleReject}>{rejectButtonText}</Button>
                        <Button variant="outline-primary" onClick={handleAccept}>{acceptButtonText}</Button>
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
                text="With supporting text below as a natural lead-in to additional content."
                acceptButtonText="Aceptar"
                rejectButtonText="Rechazar"
                initialStatus="pending" // Estado pendiente
            />
            <CustomCard
                title="Programación"
                text="With supporting text below as a natural lead-in to additional content."
                acceptButtonText="Aceptar"
                rejectButtonText="Rechazar"
                initialStatus="rejected" // Este debe mostrar el mensaje "RECHAZADO"
            />
        </>
    );
}

export default WithHeaderExample;
