import React from 'react';

export interface LanFaceThermometerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThermometerThin: React.FC<LanFaceThermometerThinProps>;
export default LanFaceThermometerThin;
