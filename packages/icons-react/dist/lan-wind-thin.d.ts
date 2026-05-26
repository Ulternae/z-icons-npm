import React from 'react';

export interface LanWindThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindThin: React.FC<LanWindThinProps>;
export default LanWindThin;
