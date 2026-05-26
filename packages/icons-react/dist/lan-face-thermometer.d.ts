import React from 'react';

export interface LanFaceThermometerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThermometer: React.FC<LanFaceThermometerProps>;
export default LanFaceThermometer;
