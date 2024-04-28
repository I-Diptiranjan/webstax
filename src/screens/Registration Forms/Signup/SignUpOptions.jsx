import React from "react";
import SignUpChoiceCard from "../../../components/Forms/Signup/SignUpChoice";
import {
  TAImg,
  TrainerImg,
  orgImg,
  userImg,
} from "../../../assets/HeroPageAssets";

const SignUpOptions = () => {
  return (
    <div className="sm:grid sm:grid-cols-1 mx-10 md:flex justify-evenly gap-4 md:mt-14">
      <SignUpChoiceCard
        to={"signup/user"}
        title={"User "}
        image={userImg}
        button={"Register Now"}
      />
      <SignUpChoiceCard
        to={"signup/ta"}
        title={"Training Agency "}
        image={TAImg}
        button={"Register Now"}
      />
      <SignUpChoiceCard
        to={"signup/trainer"}
        title={"Trainer "}
        image={TrainerImg}
        button={"Register Now"}
      />
      <SignUpChoiceCard
        to={"signup/organisation"}
        title={"Organisation "}
        image={orgImg}
        button={"Register Now"}
      />
    </div>
  );
};

export default SignUpOptions;
