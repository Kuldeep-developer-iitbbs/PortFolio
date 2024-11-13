import React from 'react';
import { useIntl } from 'react-intl';
import CustomButton from '../../../../components/shared/ExportButton.txs';

const SettingsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <h1>{formatMessage({ id: 'Settings' })}</h1>
      <CustomButton />
    </div>
  );
};

export default SettingsPage;
