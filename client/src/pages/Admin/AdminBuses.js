import { message, Table } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BusForm from "../../components/BusForm";
import PageTitle from "../../components/PageTitle";
import { axiosInstance } from "../../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";
// import './adminbus.css'

function AdminBuses() {
  const dispatch = useDispatch();
  const [showBusForm, setShowBusForm] = useState(false);
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const getBuses = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/get-all-buses", {});
      dispatch(HideLoading());
      if (response.data.success) {
        setBuses(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const deleteBus = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/delete-bus", {
        _id: id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        getBuses();
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // responsive: ["sm"],
    },
    {
      title: "Number",
      dataIndex: "number",
      // responsive: ["sm"],
    },
    {
      title: "From",
      dataIndex: "from",
      // responsive: ["sm"],
    },
    {
      title: "To",
      dataIndex: "to",
      // responsive: ["sm"],
    },
    {
      title: "Journey Date",
      dataIndex: "journeyDate",
      // responsive: ["sm"],
    },
    {
      title: "Status",
      dataIndex: "status",
      // responsive: ["sm"],
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action, record) => (
        <div className="d-flex gap-3">
          <i
            class="ri-delete-bin-line"
            onClick={() => {
              deleteBus(record._id);
            }}
          ></i>
          <i
            class="ri-pencil-line"
            onClick={() => {
              setSelectedBus(record);
              setShowBusForm(true);
            }}
          ></i>
        </div>
      ),
      // responsive: ["sm"],
    },
  ];

  useEffect(() => {
    getBuses();
  }, []);

  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <div className="d-flex justify-content-between my-2">
          <PageTitle title="Buses" /> 
          <button className="primary-btn" onClick={() => setShowBusForm(true)}>
            Add Bus
          </button>
        </div>
  
        <Table columns={columns} 
        dataSource={buses}
        scroll={{ x: true }}
        // responsive="true"
       />
  
        {showBusForm && (
          <BusForm
            showBusForm={showBusForm}
            setShowBusForm={setShowBusForm}
            type={selectedBus ? "edit" : "add"}
            selectedBus={selectedBus}
            setSelectedBus={setSelectedBus}
            getData={getBuses}
          />
        )}
      </div>
    </div>
  </div>
  
  );
}

export default AdminBuses;
