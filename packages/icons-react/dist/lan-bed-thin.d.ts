import React from 'react';

export interface LanBedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedThin: React.FC<LanBedThinProps>;
export default LanBedThin;
