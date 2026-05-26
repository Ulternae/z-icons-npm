import React from 'react';

export interface LanObjectGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectGroupThin: React.FC<LanObjectGroupThinProps>;
export default LanObjectGroupThin;
