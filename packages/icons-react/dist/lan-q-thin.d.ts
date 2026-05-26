import React from 'react';

export interface LanQThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQThin: React.FC<LanQThinProps>;
export default LanQThin;
