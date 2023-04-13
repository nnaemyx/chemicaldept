import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "./Spinner";
import Toast from "./Toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    RegNum: "",
    PhoneNum: "",
    PhoneNum2: "",
    SchoolAddress: "",
    HomeAddress: "",
    HomeAddress2: "",
    SchoolContact: "",
    SchoolContact2: "",
    HomeContact: "",
    HomeContact2: "",
  });

  const {
    name,
    RegNum,
    PhoneNum,
    PhoneNum2,
    SchoolAddress,
    HomeAddress,
    HomeAddress2,
    SchoolContact,
    SchoolContact2,
    HomeContact,
    HomeContact2,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      <Toast/>
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      RegNum,
      PhoneNum,
      PhoneNum2,
      SchoolAddress,
      HomeAddress,
      HomeAddress2,
      SchoolContact,
      SchoolContact2,
      HomeContact,
      HomeContact2,
    };
    dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container items-center text-center justify-center">
      <div className=" py-8 leading-8">
        <h1 className="lg:text-[34px] text-[24px]">Fill in the Form</h1>
        <form onSubmit={onSubmit} className="inline-block  mx-auto">
          <div className="block lg:w-[70%] w-[100%]  py-6 mt-4 space-y-4 mx-auto leading-9">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="text"
              placeholder="Reg Number"
              id="regnumber"
              name="RegNum"
              value={RegNum}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="number"
              placeholder="Phone Number"
              id="phonenumber"
              name="PhoneNum"
              value={PhoneNum}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="number"
              placeholder="Phone Number2"
              id="phonenumber2"
              name="PhoneNum2"
              value={PhoneNum2}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="text"
              placeholder="School Address"
              id="schooladdress"
              name="SchoolAddress"
              value={SchoolAddress}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="text"
              placeholder="Home Address"
              id="homeaddress"
              name="HomeAddress"
              value={HomeAddress}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="text"
              placeholder="Home Address2"
              id="homeaddress2"
              name="HomeAddress2"
              value={HomeAddress2}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="number"
              placeholder="School Emergency contact"
              id="schoolcontact"
              name="SchoolContact"
              value={SchoolContact}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="number"
              placeholder="School Emergency contact 2"
              id="schoolcontact2"
              name="SchoolContact2"
              value={SchoolContact2}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="number"
              placeholder="Home Emergency contact"
              id="homecontact"
              name="HomeContact"
              value={HomeContact}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
            <input
              type="number"
              placeholder="Home Emergency contact 2"
              id="homecontact2"
              name="HomeContact2"
              value={HomeContact2}
              onChange={onChange}
              className="lg:w-[70%] w-[100%] rounded-md border-2 border-primary"
            />
          </div>
          <button type="submit" className="bg-primary px-16 hover:bg-slate-400 text-white py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
