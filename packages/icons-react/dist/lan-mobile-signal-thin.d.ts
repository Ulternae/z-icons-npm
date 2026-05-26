import React from 'react';

export interface LanMobileSignalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSignalThin: React.FC<LanMobileSignalThinProps>;
export default LanMobileSignalThin;
