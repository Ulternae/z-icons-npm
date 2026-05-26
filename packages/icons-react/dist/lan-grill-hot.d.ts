import React from 'react';

export interface LanGrillHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillHot: React.FC<LanGrillHotProps>;
export default LanGrillHot;
