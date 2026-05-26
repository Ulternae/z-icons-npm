import React from 'react';

export interface LanSagittariusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSagittariusRegular: React.FC<LanSagittariusRegularProps>;
export default LanSagittariusRegular;
