import React from 'react';

export interface LanMobileSignalOutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSignalOut: React.FC<LanMobileSignalOutProps>;
export default LanMobileSignalOut;
