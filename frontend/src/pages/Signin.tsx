import { FormEvent, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { signin } from "../api/admin";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = await signin(email, password);

    if (success) {
      console.log(success);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        className="w-1/3 flex flex-wrap gap-y-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="font-bold text-7xl">Sign In</h1>
        <Input
          placeholder="Enter email"
          value={email}
          cb={setEmail}
          type="email"
          label="Email"
        />
        <Input
          placeholder="Enter password"
          value={password}
          cb={setPassword}
          type="password"
          label="Password"
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}

export default Signin;
