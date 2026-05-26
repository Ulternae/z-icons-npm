import React from 'react';

export interface LanThermometerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThermometerThin: React.FC<LanThermometerThinProps>;
export default LanThermometerThin;
