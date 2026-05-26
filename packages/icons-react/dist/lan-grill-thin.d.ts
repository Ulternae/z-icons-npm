import React from 'react';

export interface LanGrillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillThin: React.FC<LanGrillThinProps>;
export default LanGrillThin;
