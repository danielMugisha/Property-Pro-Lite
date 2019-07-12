const response = (res, status, data, error = false) => {
      if (error) {
        return res.status(status).json({
          status: status,
          error: data
        });
      }
      return res.status(status).json({
        status: status,
        data
      });
    }
export default response; 
  
