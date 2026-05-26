import React from 'react';

export interface LanOilTempProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilTemp: React.FC<LanOilTempProps>;
export default LanOilTemp;
