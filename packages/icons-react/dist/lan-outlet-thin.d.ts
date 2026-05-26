import React from 'react';

export interface LanOutletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOutletThin: React.FC<LanOutletThinProps>;
export default LanOutletThin;
