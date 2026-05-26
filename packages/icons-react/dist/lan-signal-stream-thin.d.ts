import React from 'react';

export interface LanSignalStreamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalStreamThin: React.FC<LanSignalStreamThinProps>;
export default LanSignalStreamThin;
