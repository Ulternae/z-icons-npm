import React from 'react';

export interface LanMouseFieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMouseFieldThin: React.FC<LanMouseFieldThinProps>;
export default LanMouseFieldThin;
