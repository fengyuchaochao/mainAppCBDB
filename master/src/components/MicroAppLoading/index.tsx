import { Spin } from 'antd';
import React from 'react';

type MicroAppLoadingProps = {
  loading: boolean;
};

const MicroAppLoading: React.FC<MicroAppLoadingProps> = (
  props: MicroAppLoadingProps,
) => {
  const { loading } = props;
  return <Spin spinning={loading} tip="加载微应用中..."></Spin>;
};

export default MicroAppLoading;
