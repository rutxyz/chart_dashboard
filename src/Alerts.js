// src/Alerts.js

import React from 'react';

const alertsData = [
  {
    "timestamp": "2019-01-02T03:50:09.097718",
    "flow_id": 52373568,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 65036,
    "dest_ip": "138.68.3.71",
    "dest_port": 3306,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010937,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to mySQL port 3306",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  //... Add the rest of the JSON objects here
];

const Alerts = () => {
  return (
    <div>
      <h1>Alerts</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Flow ID</th>
            <th>Interface</th>
            <th>Event Type</th>
            <th>Source IP</th>
            <th>Source Port</th>
            <th>Destination IP</th>
            <th>Destination Port</th>
            <th>Protocol</th>
            <th>Alert Action</th>
            <th>Signature</th>
            <th>Category</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {alertsData.map((alert, index) => (
            <tr key={index}>
              <td>{alert.timestamp}</td>
              <td>{alert.flow_id}</td>
              <td>{alert.in_iface}</td>
              <td>{alert.event_type}</td>
              <td>{alert.src_ip}</td>
              <td>{alert.src_port}</td>
              <td>{alert.dest_ip}</td>
              <td>{alert.dest_port}</td>
              <td>{alert.proto}</td>
              <td>{alert.alert.action}</td>
              <td>{alert.alert.signature}</td>
              <td>{alert.alert.category}</td>
              <td>{alert.alert.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alerts;
