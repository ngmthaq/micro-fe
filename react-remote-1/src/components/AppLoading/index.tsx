import { FC } from "react";
import { useTranslation } from "react-i18next";

export type AppLoadingProps = {
  isOpen: boolean;
};

export const AppLoading: FC<AppLoadingProps> = () => {
  const { t } = useTranslation();

  return <div>{t("remote:welcome")}</div>;
};
