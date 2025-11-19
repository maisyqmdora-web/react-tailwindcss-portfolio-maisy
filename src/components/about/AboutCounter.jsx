import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";
import { useTranslation } from "react-i18next";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 12, duration: 2 });
  useCountUp({ ref: "githubStarsCounter", end: 20, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 92, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 77, duration: 2 });
  const { t } = useTranslation();

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title={t("Yearsofexperience")}
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title={t("Stars on GitHub")}
          counter={<span id="githubStarsCounter" />}
          measurement="k+"
        />

        <CounterItem
          title={t("Positive feedback")}
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title={t("Projects completed")}
          counter={<span id="projectsCounter" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
