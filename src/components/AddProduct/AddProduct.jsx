import React, { useContext, useState } from "react";
import { Modal, Button, Form, Select, Input, InputNumber } from "antd";
import { brands } from "../../helpers/brands";
import { productsContext } from "../../contexts/productsContext";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);

  function save(newProduct) {
    createProduct(newProduct);
    setIsModalVisible(false);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //   brand, model, price, description, image 1, image 2, video

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        footer={null}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          name="basic"
          onFinish={(values) => save(values)}
        >
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please fill out the brand!",
              },
            ]}
          >
            <Select>
              {brands.map((item) => (
                <Select.Option key={item.id} value={item.brand}>
                  {item.brand}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please fill out the model!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please fill out the description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please fill out the price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Image 1"
            name="image 1"
            rules={[
              {
                required: true,
                message: "Please input URL of the image 1",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 2"
            name="image 2"
            rules={[
              {
                required: true,
                message: "Please input URL of the image 2",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Video"
            name="video"
            rules={[
              {
                required: true,
                message: "Please input URL of the video",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button style={{ width: "100%" }} htmlType="submit" type="primary">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
