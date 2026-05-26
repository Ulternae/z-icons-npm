import React from 'react';

export interface LanCampgroundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampgroundThin: React.FC<LanCampgroundThinProps>;
export default LanCampgroundThin;
