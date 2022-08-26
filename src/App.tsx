import logo from "./logo.svg";
import "./App.css";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio , Email, Birthday } from 'antd';
import React, { useState } from 'react';

// const data: any[] = [
//   {
//     Company: "ahfaf",
//     Contact: "ahfafzzz",
//     Country: "ahfafmm",
//   },
//   {
//     Company: "ifef",
//     Contact: "eif",
//     Country: "iownef",
//   },
// ];
// interface User: any {

interface Address {
  province: string;
  city: string;
  address: string;
}
type User = {
  Id: number;
  FirstName: string;
  LastName: string;
  Gender: "male" | "female";
  Birthday: string;
  address: Address;
  Phone: number;
  Email: string;
  Active: number;
  Created_at: string;
  Updated_at: string;
  Deleted_at: string;
};
// user
// const user: any[] = [
//   {
//     Id: 1,
//     Firstname: "Thắng",
//     Lastname: "Phạm",
//     Gender: "Male",
//     Birthday: "14/6/1999",
//     Address: {
//       provine: "QuangNinh",
//       city: "HaLong",
//       address: " BaiChay",
//     },
//     Phone: 796309286,
//     Email: "phamdinhthang11@gmail.com",
//     Actice: 1,
//     create_at: "25/8/2022",
//     update_at: "25/8/2022",
//     delete_at: "25/8/2022",
//   },
//   {
//     Id: 2,
//     FirstName: "A",
//     LastName: "a",
//     Gender: "male",
//     Birthday: " 25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 3,
//     FirstName: "B",
//     LastName: "b",
//     Gender: "Female",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 4,
//     FirstName: "C",
//     LastName: "c",
//     Gender: "Female",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 5,
//     FirstName: "D",
//     LastName: "d",
//     Gender: "male",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 6,
//     FirstName: "E",
//     LastName: "e",
//     Gender: "male",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 1,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 7,
//     FirstName: "F",
//     LastName: "f",
//     Gender: "Female",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 1,
//     Created_at: "25/8/2022",
//     Updated_at: " 25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 8,
//     FirstName: "G",
//     LastName: "g",
//     Gender: "male",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 9,
//     FirstName: "H",
//     LastName: "h",
//     Gender: "male",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
//   {
//     Id: 10,
//     FirstName: "I",
//     LastName: "i",
//     Gender: "Female",
//     Birthday: "25/8/2022",
//     address: {
//       province: "hanoi",
//       city: "hanoi",
//       address: "hanoi",
//     },
//     Phone: 123456789,
//     Email: "abc@gmail.com",
//     Active: 0,
//     Created_at: "25/8/2022",
//     Updated_at: "25/8/2022",
//     Deleted_at: "25/8/2022",
//   },
// ];
// }
// const App = () => {
//   return (
//     <div className="app">
//       <table>
//         <thead>
//           <tr>
//             <th rowSpan={2}>Id</th>
//             <th rowSpan={2}>Firstname</th>
//             <th rowSpan={2}>Lastname</th>
//             <th rowSpan={2}>Gender</th>
//             <th rowSpan={2}>Birthday</th>
//             <th colSpan={3}>Address</th>
//             <th rowSpan={2}>Phone</th>
//             <th rowSpan={2}>Email</th>
//             <th rowSpan={2}>Active</th>
//             <th rowSpan={2}>Created_at</th>
//             <th rowSpan={2}>Updated_at</th>
//             <th rowSpan={2}>Deleted_at</th>
//           </tr>
//           <tr>
//             <th>province</th>
//             <th>city</th>
//             <th>address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.map((element) => {
//             return (
//               <tr key={element.Id}>
//                 <td>{element.Id}</td>
//                 <td>{element.Firstname}</td>
//                 <td>{element.Lastname}</td>
//                 <td>{element.Gender}</td>
//                 <td>{element.Birthday}</td>
//                 <td>{element.provine}</td>
//                 <td>{element.city}</td>
//                 <td></td>
//                 <td>{element.Phone}</td>
//                 <td>{element.Email}</td>
//                 <td>{element.Actice}</td>
//                 <td>{element.Created_at}</td>
//                 <td>{element.Updated_at}</td>
//                 <td>{element.Deleted_at}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

//bài 2: t

type RequiredMark = boolean | 'optional';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <form.Item label = "FirstName">
        <input placeholder = "First Name" type="text" />
      </form.Item>
      <Form.Item label="LastName" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value = "Male">Male</Radio>
          <Radio value = "FeMale">Female</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Email"
        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Phone" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Birthday">
        <Birthday />
      </Form.Item>
      <Form.Item label="Address" required tooltip="This is a required field">
        <input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};


// Table
// const App = () => {
//   return (
//     <div className="abc">
//       <table>
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th>Contact</th>
//             <th>Country</th>
//           </tr>
//         </thead>
//         <tbody>
//         {data.map((element) => {
//           return (
//             <tr key={element.company}>
//               <th>{element.Company}</th>
//               <th>{element.Contact}</th>
//               <th>{element.Country}</th>
//             </tr>
//           );
//         })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default App;
