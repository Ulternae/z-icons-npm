import React from 'react';

export interface LanBedBunkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedBunkThin: React.FC<LanBedBunkThinProps>;
export default LanBedBunkThin;
