import React from 'react';

export interface LanHeadSideHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideHeartThin: React.FC<LanHeadSideHeartThinProps>;
export default LanHeadSideHeartThin;
