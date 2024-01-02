import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import axios from "axios";
import { FaRupeeSign } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHourglassHalf } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';





const NewDashboard = () => {
  



  document.title = "Dashboard";

  return (
    <>
      <div className="page-content">
        <Container fluid>
        </Container>
      </div>
    </>
  );
};

export default NewDashboard;
