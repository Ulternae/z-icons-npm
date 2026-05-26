import React from 'react';

export interface LanMobileSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSignal: React.FC<LanMobileSignalProps>;
export default LanMobileSignal;
