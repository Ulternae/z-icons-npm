import React from 'react';

export interface LanChildReachingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildReaching: React.FC<LanChildReachingProps>;
export default LanChildReaching;
