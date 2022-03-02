import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function useMarineActions() {
  let [email, setEmail] = useState("");
  let history = useHistory();

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
        toastId: 10,
      });
    }

    setEmail("");
  };

  function handleDirection(place) {
    let list = ["index", "home"];

    if (list.includes(place)) {
      place = "";
    }

    history.push(`/${place.replace("./", "")}`);
  }

  return { handleDirection, handleSubmit, handleEmailChange, email };
}
