import React from 'react';

export interface LanFaceTiredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTiredThin: React.FC<LanFaceTiredThinProps>;
export default LanFaceTiredThin;
