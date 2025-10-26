import React, { useState } from 'react';
import './FormBuilder.css';

const FIELD_CATEGORIES = [
  {
    title: 'Grid',
    fields: [
      { type: '1-Column', icon: '🔳' },
      { type: '2-Column', icon: '🔲' },
      { type: '3-Column', icon: '🔲' }
    ]
  },
  {
    title: 'Basic Info',
    fields: [
      { type: 'Name', icon: '👤' },
      { type: 'Address', icon: '🏠' },
      { type: 'Phone', icon: '📞' },
      { type: 'Email', icon: '📧' },
      { type: 'Website', icon: '🌐' }
    ]
  },
  {
    title: 'Textbox',
    fields: [
      { type: 'Single Line', icon: '✏️' },
      { type: 'Multi Line', icon: '📝' }
    ]
  },
  {
    title: 'Number',
    fields: [
      { type: 'Number', icon: '🔢' },
      { type: 'Decimal', icon: '🧮' },
      { type: 'Formula', icon: '➗' },
      { type: 'Currency', icon: '💰' }
    ]
  },
  {
    title: 'Choices',
    fields: [
      { type: 'Dropdown', icon: '⬇️' },
      { type: 'Radio', icon: '🔘' },
      { type: 'Checkbox', icon: '☑️' },
      { type: 'Multiple Choice', icon: '🎯' },
      { type: 'Image Choices', icon: '🖼️' }
    ]
  },
  {
    title: 'Matrix Choices',
    fields: [
      { type: 'Radio Group', icon: '🔲' },
      { type: 'Checkbox Group', icon: '🗒️' },
      { type: 'Dropdown Group', icon: '🔽' },
      { type: 'Textbox Group', icon: '✏️' },
      { type: 'Number Group', icon: '🔢' },
      { type: 'Currency Group', icon: '💵' }
    ]
  }
];

const inputForType = (type, value, handleChange, isEditMode) => {
  if (isEditMode) {
    return <input type="text" value={value} onChange={handleChange} placeholder={`Edit content`} />;
  }
  switch (type) {
    case 'Email':
      return <input type="email" placeholder="Enter Email" />;
    case 'Phone':
      return <input type="tel" placeholder="Enter Phone" />;
    case 'Single Line':
    case 'Name':
    case 'Website':
    case 'Address':
      return <input type="text" placeholder={`Enter ${type}`} />;
    case 'Decimal':
      return <input type="number" step="0.01" placeholder="Enter Decimal" />;
    case 'Number':
    case 'Currency':
      return <input type="number" placeholder={`Enter ${type}`} />;
    case 'Multi Line':
      return <textarea rows={3} placeholder="Enter text" />;
    case 'Formula':
      return <input type="text" placeholder="Formula" />;
    case 'Dropdown':
    case 'Dropdown Group':
      return (
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      );
    case 'Radio':
    case 'Radio Group':
      return (
        <div className="radio-options">
          <label><input type="radio" name={type}/> Option 1</label>
          <label><input type="radio" name={type}/> Option 2</label>
        </div>
      );
    case 'Checkbox':
    case 'Checkbox Group':
      return (
        <div className="checkbox-options">
          <label><input type="checkbox"/> Option 1</label>
          <label><input type="checkbox"/> Option 2</label>
        </div>
      );
    case 'Multiple Choice':
      return (
        <div className="multiple-options">
          <label><input type="checkbox" /> Choice A</label>
          <label><input type="checkbox" /> Choice B</label>
        </div>
      );
    case 'Image Choices':
      return (
        <div className="image-options">
          <img src="https://via.placeholder.com/50" alt="Choice 1" />
          <img src="https://via.placeholder.com/50" alt="Choice 2" />
        </div>
      );
    default:
      return <input type="text" placeholder={type} />;
  }
};

const FormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState('');

  const addField = (type, icon) => {
    setFields([
      ...fields,
      {
        id: Date.now() + Math.random(),
        type,
        icon,
        label: `${type} Field`,
        value: ''
      }
    ]);
  };

  const deleteField = (i) => {
    setFields(fields.filter((_, idx) => idx !== i));
    if (editIndex === i) {
      setEditIndex(null);
      setEditContent('');
    }
  };

  const startEdit = (i) => {
    setEditIndex(i);
    setEditContent(fields[i].label);
  };

  const saveEdit = (i) => {
    const temp = [...fields];
    temp[i].label = editContent;
    setFields(temp);
    setEditIndex(null);
  };

  const handleEditChange = (e) => setEditContent(e.target.value);

  const saveForm = () => {
    localStorage.setItem('savedForm', JSON.stringify(fields));
    alert('Form saved successfully!');
  };

  const exportForm = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fields, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "form-config.json");
    dlAnchorElem.click();
  };

  return (
    <div className="builder">
      <h2 className="builder-title"><span role="img" aria-label="paint">🎨</span> Build Your Custom Form</h2>
      
      <div className="builder-container">
        <div className="fields-sidebar">
          {FIELD_CATEGORIES.map((cat) => (
            <div key={cat.title} className="field-category">
              <h4 className="category-title">{cat.title}</h4>
              <div className="category-fields">
                {cat.fields.map((f) => (
                  <button 
                    className="field-btn" 
                    key={f.type} 
                    onClick={() => addField(f.type, f.icon)}
                  >
                    <span className="field-btn-icon">{f.icon}</span>
                    <span className="field-btn-label">{f.type}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="form-preview">
          <h3 className="preview-title">Form Preview</h3>
          {fields.length === 0 && (
            <div className="preview-placeholder">
              <span role="img" aria-label="arrow">⬅️</span> Choose a field to get started!
            </div>
          )}
          <div className="preview-fields">
            {fields.map((f, i) => (
              <div key={f.id} className="field-preview-item">
                <div className="field-header">
                  <span className="field-icon">{f.icon}</span>
                  {editIndex === i ? (
                    <div className="edit-controls">
                      <input
                        className="edit-input"
                        value={editContent}
                        onChange={handleEditChange}
                      />
                      <button className="save-edit-btn" onClick={() => saveEdit(i)}>
                        ✅ Save
                      </button>
                    </div>
                  ) : (
                    <label className="field-label">{f.label}</label>
                  )}
                  <div className="field-actions">
                    <button className="edit-btn" onClick={() => startEdit(i)}>✏️</button>
                    <button className="delete-btn" onClick={() => deleteField(i)}>🗑️</button>
                  </div>
                </div>
                <div className="field-input-area">
                  {inputForType(f.type, f.value, null, false)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="form-actions">
        <button className="action-btn save-btn" onClick={saveForm}>
          💾 Save Form
        </button>
        <button className="action-btn export-btn" onClick={exportForm}>
          ⬇️ Export Form
        </button>
      </div>
    </div>

    
  );
};

export default FormBuilder;
