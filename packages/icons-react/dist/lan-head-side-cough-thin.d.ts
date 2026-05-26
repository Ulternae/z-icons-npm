import React from 'react';

export interface LanHeadSideCoughThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideCoughThin: React.FC<LanHeadSideCoughThinProps>;
export default LanHeadSideCoughThin;
