import "./style/SectionTitle.scss";

export const SectionTitle = ({
  sectionTitle,
  sectionDescription,
  styleAbout,
}) => {
  return (
    <div
      className={`${styleAbout ? "section-title-about styleAbout" : "section-title"}`}
    >
      <h1
        className={`${
          styleAbout ? "section-title-about styleAbout" : "section-title-title"
        }`}
      >
        {sectionTitle}
      </h1>
      {sectionDescription ? (
        <p
          className={`${
            styleAbout
              ? "section-description-about styleAbout"
              : "section-title-description"
          }`}
        >
          {sectionDescription}
        </p>
      ) : null}
    </div>
  );
};
