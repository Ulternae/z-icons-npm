import React from 'react';

export interface LanHeadSideMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideMask: React.FC<LanHeadSideMaskProps>;
export default LanHeadSideMask;
