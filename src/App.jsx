
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import CategorySection from './components/CategorySection';
import AddWidgetModal from './components/AddWidgetModal';
import initialData from './data/dashboardData';
import { FaChartBar, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const [data, setData] = useState({
    ...initialData,
    categories: initialData.categories.map(category => {
      if (category.id === 'cwpp') {
        return {
          ...category,
          widgets: [
            {
              id: 'cwpp-graph1',
              name: 'Graph Widget 1',
              text: 'No graph data available.',
              icon: true,
            },
            {
              id: 'cwpp-graph2',
              name: 'Graph Widget 2',
              text: 'No graph data available.',
              icon: true,
            },
          ],
        };
      }
      return category;
    })
  });

  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [search, setSearch] = useState('');

  // Track widget visibility with ID-based map
  const [visibilityMap, setVisibilityMap] = useState(() => {
    const map = {};
    data.categories.forEach(cat => {
      cat.widgets.forEach(widget => {
        map[widget.id] = true;
      });
    });
    return map;
  });

  const handleAddWidget = (categoryId) => {
    setCurrentCategory(categoryId);
    setShowModal(true);
  };

  const handleModalSave = () => {
    if (!widgetName.trim()) return;
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    };

    const updatedData = {
      ...data,
      categories: data.categories.map(cat =>
        cat.id === currentCategory
          ? {
              ...cat,
              widgets: [...cat.widgets, newWidget],
            }
          : cat
      ),
    };

    setData(updatedData);
    setVisibilityMap(prev => ({ ...prev, [newWidget.id]: true }));
    setWidgetName('');
    setWidgetText('');
    setShowModal(false);
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    const updatedData = {
      ...data,
      categories: data.categories.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter(w => w.id !== widgetId),
            }
          : cat
      ),
    };
    setData(updatedData);
    setVisibilityMap(prev => {
      const newMap = { ...prev };
      delete newMap[widgetId];
      return newMap;
    });
  };

  const toggleVisibility = (widgetId) => {
    setVisibilityMap(prev => ({
      ...prev,
      [widgetId]: !prev[widgetId]
    }));
  };

  const filteredCategories = data.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(search.toLowerCase()) && visibilityMap[widget.id]
    ),
  }));

  const categorizedWidgets = data.categories.reduce((acc, category) => {
    acc[category.id] = category.widgets;
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">CNAPP Dashboard</h3>
        <InputGroup style={{ maxWidth: '250px' }}>
          <FormControl
            placeholder="Search anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderRadius: '30px', paddingRight: '30px' }}
          />
          <FaSearch style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: '10' }} />
        </InputGroup>
      </div>

      {filteredCategories.map(category => (
        <CategorySection
          key={category.id}
          category={category}
          onAdd={() => handleAddWidget(category.id)}
          onRemove={(widgetId) => handleRemoveWidget(category.id, widgetId)}
        />
      ))}

      <AddWidgetModal
        show={showModal}
        onHide={() => setShowModal(false)}
        widgetName={widgetName}
        setWidgetName={setWidgetName}
        widgetText={widgetText}
        setWidgetText={setWidgetText}
        onSave={handleModalSave}
        visibilityMap={visibilityMap}
        toggleVisibility={toggleVisibility}
        existingWidgets={categorizedWidgets}
      />
    </div>
  );
};

export default Dashboard;
