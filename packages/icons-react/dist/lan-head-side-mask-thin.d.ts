import React from 'react';

export interface LanHeadSideMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideMaskThin: React.FC<LanHeadSideMaskThinProps>;
export default LanHeadSideMaskThin;
