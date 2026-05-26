import React from 'react';

export interface LanDryerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDryerThin: React.FC<LanDryerThinProps>;
export default LanDryerThin;
