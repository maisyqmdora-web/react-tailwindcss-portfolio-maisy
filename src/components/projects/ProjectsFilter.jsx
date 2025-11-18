import { useTranslation } from "react-i18next";

const ProjectsFilter = ({ setSelectProject }) => {
  const { t } = useTranslation();

  const selectOptions = [
    { value: "web", label: t("webApplication") },
    { value: "mobile", label: t("mobileApplication") },
    { value: "uiux", label: t("uiuxDesign") },
    { value: "branding", label: t("branding") },
  ];
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value="all" className="text-sm sm:text-md">
        {t("allProjects")}
      </option>

      {selectOptions.map((option) => (
        <option
          className="text-normal sm:text-md"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
