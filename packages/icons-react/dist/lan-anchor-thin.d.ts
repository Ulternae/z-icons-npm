import React from 'react';

export interface LanAnchorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorThin: React.FC<LanAnchorThinProps>;
export default LanAnchorThin;
