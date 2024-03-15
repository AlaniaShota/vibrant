import { SectionTitle } from "../../../components";

import "./Payload.scss";
import { PayloadCard } from "./components";

export const Payload = () => {
  return (
    <>
      <>
        <SectionTitle
          sectionTitle="Ready to get started?"
          sectionDescription="Choose a plan fits to your needs."
        />
      </>
      <PayloadCard />
    </>
  );
};
