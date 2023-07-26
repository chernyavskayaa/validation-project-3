import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useLocalizedValue = ({ value, languagesToTransform = [], fnToTransform = (v) => v, tKey }) => {
  const { i18n, t } = useTranslation();

  const localizedValue = useMemo(() => {
    const transformedValue = languagesToTransform.includes(i18n.language) ? fnToTransform(value) : value;

    return t(tKey, { count: transformedValue });
  }, [i18n.language, t, value, fnToTransform, languagesToTransform, tKey]);

  return localizedValue;
};

export { useLocalizedValue };
