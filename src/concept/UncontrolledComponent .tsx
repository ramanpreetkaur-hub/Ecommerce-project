import { useRef } from "react";
import * as yup from "yup";

const signupvalidator = yup.object().shape({
  Username: yup.string().min(10).required(),
  Useremail: yup.string().email().required(),
  Usergender: yup.string().required(),
  Userfavcolor: yup.string().required(),
  Userfavanimal: yup.string().required(),
});

const UncontrolledComponents = () => {
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (Event) => {
    // it is use for stoping a reload and refresh page
    Event.preventDefault();
    const formElement = formRef.current;

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    // array to object
    const stringfielddata = JSON.stringify(data);
    console.log("stringfielddata", stringfielddata);
    localStorage.setItem("userData", stringfielddata);
    try {
      signupvalidator.validateSync(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error.message, ":39");
    }
  };
 
  return (
    <div>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4">Survey</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              id="name"
              name="Username"
              required
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              id="email"
              name="Useremail"
              required
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              id="gender"
              name="Usergender"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              What is your favorite color?
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/3">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="color-red"
                >
                  <input
                    className="mr-2"
                    defaultValue="red"
                    id="color-red"
                    name="Userfavcolor"
                    type="radio"
                  />
                  Red
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="color-blue"
                >
                  <input
                    className="mr-2"
                    defaultValue="blue"
                    id="color-blue"
                    name="color"
                    type="radio"
                  />
                  Blue
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="color-green"
                >
                  <input
                    className="mr-2"
                    defaultValue="green"
                    id="color-green"
                    name="color"
                    type="radio"
                  />
                  Green
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              What is your favorite animal?
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/3">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="animal-cat"
                >
                  <input
                    className="mr-2"
                    defaultValue="cat"
                    id="animal-cat"
                    name="animal[]"
                    type="checkbox"
                  />
                  Cat
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="animal-dog"
                >
                  <input
                    className="mr-2"
                    defaultValue="dog"
                    id=""
                    name="animal[]"
                    type="checkbox"
                  />
                  Dog
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="animal-bird"
                >
                  <input
                    className="mr-2"
                    defaultValue="bird"
                    id="animal-bird"
                    name="Userfavanimal"
                    type="checkbox"
                  />
                  Bird
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              id="message"
              name="message"
            />
          </div>
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledComponents;
