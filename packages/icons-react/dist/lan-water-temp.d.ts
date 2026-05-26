import React from 'react';

export interface LanWaterTempProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterTemp: React.FC<LanWaterTempProps>;
export default LanWaterTemp;
