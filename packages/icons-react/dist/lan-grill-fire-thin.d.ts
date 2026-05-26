import React from 'react';

export interface LanGrillFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillFireThin: React.FC<LanGrillFireThinProps>;
export default LanGrillFireThin;
