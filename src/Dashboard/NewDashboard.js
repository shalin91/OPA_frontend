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
  const url = `${process.env.REACT_APP_BASE_URL}`;
  const [earningsView, setEarningsView] = useState("weekly");
  const [widgetData, setWidgetData] = useState({
    totalEarnings: {
      weekly: 0,
      monthly: 0,
      yearly: 0,
    },
    totalCustomers: 0,    
    totalOrders: 0,
    totalPendingOrders: 0,
    totalReturnOrders: 0,
    totalCancelledOrders: 0,
    totalProducts: 0,
    totalShringarProducts: 0,
    totalSilverVesselsProducts: 0,
    totalSugandhiProducts: 0,
    totalPichwaiWallArtProducts: 0,
    totalVastraProducts: 0,
    totalFibreItemsProducts: 0,
    totalSeasonalProducts: 0,
  });

  const handleEarningsViewChange = (e) => {
    setEarningsView(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/dashboard/get-dashboard-data`);
        console.log(response);
        const data = response;

        setWidgetData({
          totalEarnings: {
            weekly: data.weeklyEarnings,
            monthly: data.monthlyEarnings,
            yearly: data.yearlyEarnings,
          },
          weeklyEarnings: data.weeklyEarnings,
          monthlyEarnings: data.monthlyEarnings,
          yearlyEarnings: data.yearlyEarnings,
          totalCustomers: data.customers,
          totalOrders: data.orders.totalOrders,
          totalPendingOrders: data.orders.pendingOrders,
          totalReturnOrders: data.orders.returnOrders,
          totalCancelledOrders: data.orders.cancelledOrders,
          totalProducts: data.products.totalProducts,
          totalShringarProducts: data.products.ShringarProducts,
          totalSilverVesselsProducts: data.products.SilverVesselsProducts,
          totalSugandhiProducts: data.products.SugandhiProducts,
          totalPichwaiWallArtProducts: data.products.PichwaiAndWallArtProducts,
          totalVastraProducts: data.products.Vastra,
          totalFibreItemsProducts: data.products.FibreItems,
          totalSeasonalProducts: data.products.SeasonalProducts,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
