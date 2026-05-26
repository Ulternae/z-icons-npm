import React from 'react';

export interface LanThermometerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThermometer: React.FC<LanThermometerProps>;
export default LanThermometer;
