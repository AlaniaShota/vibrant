import { PayloadCard } from "./components";

import { SectionTitle } from "../../../components";
import { payloadData } from "../../../mockData/home/payloadData";
import { uiText } from "../../../mockData/uiText";

export const Payload = () => (
  <>
    <SectionTitle
      sectionTitle={payloadData.sectionTitle}
      sectionDescription={payloadData.sectionDescription}
    />
    <PayloadCard
      payloadCard={payloadData.payloadCard}
      price={payloadData.price}
      buttonText={uiText.buttonText}
    />
  </>
);
