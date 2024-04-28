import React from "react";
import SignUpChoiceCard from "../../../components/Forms/Signup/SignUpChoice";
import {
  TAImg,
  TrainerImg,
  orgImg,
  userImg,
} from "../../../assets/HeroPageAssets";

const LoginOptions = () => {
  return (
    <div className="sm:grid sm:grid-cols-1 mx-10 md:flex justify-evenly gap-4 md:mt-14">
      <SignUpChoiceCard
        to={"login/user"}
        title={"User "}
        image={userImg}
        button={"Login Now"}
      />
      <SignUpChoiceCard
        to={"login/ta"}
        title={"Training Agency "}
        image={TAImg}
        button={"Login Now"}
      />
      <SignUpChoiceCard
        to={"login/trainer"}
        title={"Trainer "}
        image={TrainerImg}
        button={"Login Now"}
      />
      <SignUpChoiceCard
        to={"login/organisation"}
        title={"Organisation "}
        image={orgImg}
        button={"Login Now"}
      />
    </div>
  );
};

export default LoginOptions;
