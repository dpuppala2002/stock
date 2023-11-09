import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(null);

  // Simulated data for the example
  const data = [
    {
      "name" : "Warehouse-165",
      "code" : "W-00001",
      "id" : 1,
      "city": "Delhi",
      "space_available": 1234,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-32",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-276",
      "code" : "W-00002",
      "id" : 2,
      "city": "Chennai",
      "space_available": 124,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-3039",
      "code" : "W-00003",
      "id" : 3,
      "city": "Indore",
      "space_available": 134,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-324",
      "code" : "W-00004",
      "id" : 4,
      "city": "Chennai",
      "space_available": 12,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-5454",
      "code" : "W-00005",
      "id" : 5,
      "city": "Chennai",
      "space_available": 1243434,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-4345",
      "code" : "W-00006",
      "id" : 6,
      "city": "Chennai",
      "space_available": 1,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-3455",
      "code" : "W-00007",
      "id" : 7,
      "city": "Mumbai",
      "space_available": 4,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-2",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-23455",
      "code" : "W-00008",
      "id" : 8,
      "city": "Bangalore",
      "space_available": 3456,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : true
    },
    {
      "name" : "Warehouse-6457",
      "code" : "W-00009",
      "id" : 9,
      "city": "Bangalore",
      "space_available": 1234545,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-32456",
      "code" : "W-000010",
      "id" : 10,
      "city": "Guwahati",
      "space_available": 121234,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : true
    },
    {
      "name" : "Warehouse-3245678",
      "code" : "W-000011",
      "id" : 11,
      "city": "Delhi",
      "space_available": 98,
      "type" : "Leasable Space",
      "cluster" : "cluster-v-2",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-4567",
      "code" : "W-000012",
      "id" : 12,
      "city": "Indore",
      "space_available": 97,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : true
    },
    {
      "name" : "Warehouse-458",
      "code" : "W-000013",
      "id" : 13,
      "city": "Delhi",
      "space_available": 654,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    }
  ];

  useEffect(() => {
    // Fetch warehouse data based on the provided ID
    const selectedWarehouse = data.find(warehouse => warehouse.id === parseInt(id, 10));
    setWarehouse(selectedWarehouse);
    setEditedWarehouse({ ...selectedWarehouse });
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update the edited warehouse data in the database or API (not implemented here)
    setIsEditing(false);
  };

  const handleInputChange = (e, field) => {
    setEditedWarehouse({
      ...editedWarehouse,
      [field]: e.target.value
    });
  };

  return (
    <div>
      <h2>Warehouse Details</h2>
      {warehouse ? (
        <div>
          <p>
            <strong>Warehouse Name:</strong> {isEditing ? (
              <input
                type="text"
                value={editedWarehouse.name}
                onChange={(e) => handleInputChange(e, 'name')}
              />
            ) : (
              warehouse.name
            )}
          </p>
          <p>
            <strong>City:</strong> {isEditing ? (
              <input
                type="text"
                value={editedWarehouse.city}
                onChange={(e) => handleInputChange(e, 'city')}
              />
            ) : (
              warehouse.city
            )}
          </p>
          <p>
            <strong>Cluster:</strong> {isEditing ? (
              <input
                type="text"
                value={editedWarehouse.cluster}
                onChange={(e) => handleInputChange(e, 'cluster')}
              />
            ) : (
              warehouse.cluster
            )}
          </p>
          <p>
            <strong>Space Available:</strong> {isEditing ? (
              <input
                type="number"
                value={editedWarehouse.space_available}
                onChange={(e) => handleInputChange(e, 'space_available')}
              />
            ) : (
              warehouse.space_available
            )}
          </p>
          <p>
            <strong>Live Status:</strong> {isEditing ? (
              <select
                value={editedWarehouse.is_live}
                onChange={(e) => handleInputChange(e, 'is_live')}
              >
                <option value={true}>Live</option>
                <option value={false}>Offline</option>
              </select>
            ) : (
              editedWarehouse.is_live ? "Live" : "Offline"
            )}
          </p>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
          <Link to="/">Back to Warehouse Listing</Link>
        </div>
      ) : (
        <p>Warehouse not found</p>
      )}
    </div>
  );
}

export default WarehouseDetails;

