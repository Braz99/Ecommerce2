import { useState } from "react";
import { toast } from "react-toastify";

export default function useMarineActions() {
  let [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== "") {
      toast.clearWaitingQueue();
      toast.success(`${email}, cadastrado com sucesso!`, {
        position: "top-center",
        hideProgressBar: true,
      });
    } else {
      toast.clearWaitingQueue();
      toast.error(`Cadastre um email!`, {
        position: "top-center",
        hideProgressBar: true,
      });
    }

    setEmail("");
  };

  return { handleSubmit, handleEmailChange, email };
}
