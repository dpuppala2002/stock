import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WarehouseListing() {
  const [warehouses, setWarehouses] = useState([]);
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [clusterFilter, setClusterFilter] = useState('');
  const [spaceLimitFilter, setSpaceLimitFilter] = useState('');

  useEffect(() => {
    // Simulated data for the example
    const warehouseData = [
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
    ]

    setWarehouses(warehouseData);
  }, []);

  useEffect(() => {
    // Filter warehouses based on searchInput, cityFilter, clusterFilter, and spaceLimitFilter
    let filtered = warehouses;

    if (searchInput) {
      filtered = filtered.filter(warehouse => warehouse.name.includes(searchInput));
    }

    if (cityFilter) {
      filtered = filtered.filter(warehouse => warehouse.city === cityFilter);
    }

    if (clusterFilter) {
      filtered = filtered.filter(warehouse => warehouse.cluster === clusterFilter);
    }

    if (spaceLimitFilter) {
      filtered = filtered.filter(warehouse => warehouse.space_available >= spaceLimitFilter);
    }

    setFilteredWarehouses(filtered);
  }, [warehouses, searchInput, cityFilter, clusterFilter, spaceLimitFilter]);

  return (
    <div>
      <h2>Warehouse Listing</h2>
      <input
        type="text"
        placeholder="Search by Warehouse Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
        <option value="">All Cities</option>
        {/* Options for city filtering based on available cities */}
      </select>
      <select value={clusterFilter} onChange={(e) => setClusterFilter(e.target.value)}>
        <option value="">All Clusters</option>
        {/* Options for cluster filtering based on available clusters */}
      </select>
      <input
        type="number"
        placeholder="Space Available Limit"
        value={spaceLimitFilter}
        onChange={(e) => setSpaceLimitFilter(e.target.value)}
      />
      <ul>
        {filteredWarehouses.map(warehouse => (
          <li key={warehouse.id}>
            <Link to={`/details/${warehouse.id}`}>
              {warehouse.name}, {warehouse.city}, {warehouse.cluster}, {warehouse.space_available}, {warehouse.is_live ? "Live" : "Offline"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseListing;

