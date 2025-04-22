
import React, { useState } from 'react';
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';

const AddWidgetModal = ({
  show,
  onHide,
  widgetName,
  setWidgetName,
  widgetText,
  setWidgetText,
  onSave,
  visibilityMap,
  toggleVisibility,
  existingWidgets
}) => {
  const [activeTab, setActiveTab] = useState('cspm');

  const categories = [
    { id: 'cspm', name: 'CSPM Executive Dashboard' },
    { id: 'cwpp', name: 'CWPP Dashboard' },
    { id: 'registry', name: 'Registry Scan' },
  ];

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Widget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Widget Name</Form.Label>
            <Form.Control
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Enter widget name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Widget Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              placeholder="Enter widget content"
            />
          </Form.Group>

          <Tabs
            id="widget-category-tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            {categories.map((category) => (
              <Tab eventKey={category.id} title={category.name} key={category.id}>
                <Form.Group>
                  {existingWidgets[category.id] && existingWidgets[category.id].length > 0 ? (
                    existingWidgets[category.id].map((widget) => (
                      <Form.Check
                        key={widget.id}
                        type="checkbox"
                        label={widget.name}
                        checked={visibilityMap[widget.id]}
                        onChange={() => toggleVisibility(widget.id)}
                      />
                    ))
                  ) : (
                    <div className="text-muted">No widgets available in this category.</div>
                  )}
                </Form.Group>
              </Tab>
            ))}
          </Tabs>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Widget
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddWidgetModal;
