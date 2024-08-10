import { CONTACT } from "../constants";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact Me</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.Address}</p>
        {/* <p className="my-4">{CONTACT.phoneNumber}</p> */}
        <a href="#">{CONTACT.Email}</a>
      </div>
    </div>
  );
};
export default Contact;

