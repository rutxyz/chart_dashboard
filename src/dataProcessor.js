
import data from './eve.json';

export const processData = () => {
  const alertsByCategory = {};
  const alertsBySourceIP = {};
  const alertsByDestinationPort = {};
 

  data.forEach(alert => {
    
    if (alert && alert.alert && alert.alert.category) {
      const category = alert.alert.category;
      const srcIP = alert.src_ip;
      const destPort = alert.dest_port;
     

      
      alertsByCategory[category] = (alertsByCategory[category] || 0) + 1;

      
      alertsBySourceIP[srcIP] = (alertsBySourceIP[srcIP] || 0) + 1;

      
      alertsByDestinationPort[destPort] = (alertsByDestinationPort[destPort] || 0) + 1;

      
    }
  });

  return { alertsByCategory, alertsBySourceIP, alertsByDestinationPort}; 
};
