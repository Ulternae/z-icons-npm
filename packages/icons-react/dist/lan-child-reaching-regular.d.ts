import React from 'react';

export interface LanChildReachingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildReachingRegular: React.FC<LanChildReachingRegularProps>;
export default LanChildReachingRegular;
