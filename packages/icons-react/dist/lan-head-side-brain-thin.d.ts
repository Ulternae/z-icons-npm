import React from 'react';

export interface LanHeadSideBrainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideBrainThin: React.FC<LanHeadSideBrainThinProps>;
export default LanHeadSideBrainThin;
