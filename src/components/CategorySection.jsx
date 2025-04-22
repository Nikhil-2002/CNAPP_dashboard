import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaTimes, FaChartBar } from 'react-icons/fa';

const CategorySection = ({ category, onAdd, onRemove }) => {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">{category.name}</h5>
        <Button variant="outline-primary" onClick={onAdd}>+ Add Widget</Button>
      </div>

      <div className="row">
        {category.widgets.map(widget => (
          <div className="col-md-4 mb-3" key={widget.id}>
            <Card className="h-100 widget-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <Card.Title className="widget-title">{widget.name}</Card.Title>
                  <FaTimes
                    style={{ cursor: 'pointer' }}
                    onClick={() => onRemove(widget.id)}
                  />
                </div>
                {widget.icon && (
                  <div className="text-center my-3" style={{ fontSize: '2rem', color: '#6c757d' }}>
                    <FaChartBar />
                  </div>
                )}
                <Card.Text className="widget-text">
                  {widget.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
        {/* Dummy Card for "+ Add Widget" */}
        {category.widgets.length < 3 && (
  <div className="col-md-4 mb-3">
    <Card className="h-100 widget-card d-flex align-items-center justify-content-center text-center">
      <Button variant="outline-secondary" onClick={onAdd}>+ Add Widget</Button>
    </Card>
  </div>
)}

      </div>
    </div>
  );
};

export default CategorySection;