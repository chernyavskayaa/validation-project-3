import { useTranslation } from 'react-i18next';
import { useChangeLanguage, useLocalizedValue } from './hooks';
import { languages, languagesWithInches, languagesWithOz, languagesWithPounds } from './i18n/utils';
import { fromCentimetersToInches, fromKilogramsToPounds, fromLitresToOunces } from './utils';
import './i18n/init';

function App() {
  const { t, i18n } = useTranslation();

  const { changeLanguage } = useChangeLanguage();

  const length = useLocalizedValue({
    value: 10,
    fnToTransform: fromCentimetersToInches,
    languagesToTransform: languagesWithInches,
    tKey: 'Length',
  });

  const weight = useLocalizedValue({
    value: 100,
    fnToTransform: fromKilogramsToPounds,
    languagesToTransform: languagesWithPounds,
    tKey: 'Weight',
  });

  const liquid = useLocalizedValue({
    value: 10,
    fnToTransform: fromLitresToOunces,
    languagesToTransform: languagesWithOz,
    tKey: 'Liquid',
  });

  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div>
      <select name='languages' onChange={handleChangeLanguage} defaultValue={i18n.language}>
        {languages.map(({ label, value }) => (
          <option value={value} key={value}>
            {t(label)}
          </option>
        ))}
      </select>

      <p>{t('Today', { value: new Date() })}</p>
      <p>{t('BigNumber', { value: 10000 })}</p>

      <p>{length}</p>
      <p>{weight}</p>
      <p>{liquid}</p>
    </div>
  );
}

export default App;
