import React from 'react';

export interface LanMapPinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapPin: React.FC<LanMapPinProps>;
export default LanMapPin;
