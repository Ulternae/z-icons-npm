import React from 'react';

export interface LanSagittariusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSagittarius: React.FC<LanSagittariusProps>;
export default LanSagittarius;
