import React from 'react';

export interface LanUserHeadsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHeadset: React.FC<LanUserHeadsetProps>;
export default LanUserHeadset;
