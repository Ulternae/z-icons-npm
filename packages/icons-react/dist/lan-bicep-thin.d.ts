import React from 'react';

export interface LanBicepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicepThin: React.FC<LanBicepThinProps>;
export default LanBicepThin;
