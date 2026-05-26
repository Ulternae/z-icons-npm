import React from 'react';

export interface LanHeartRateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartRateSolid: React.FC<LanHeartRateSolidProps>;
export default LanHeartRateSolid;
