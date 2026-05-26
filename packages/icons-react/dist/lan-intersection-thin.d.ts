import React from 'react';

export interface LanIntersectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntersectionThin: React.FC<LanIntersectionThinProps>;
export default LanIntersectionThin;
