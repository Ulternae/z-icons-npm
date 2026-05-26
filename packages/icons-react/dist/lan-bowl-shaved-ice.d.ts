import React from 'react';

export interface LanBowlShavedIceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlShavedIce: React.FC<LanBowlShavedIceProps>;
export default LanBowlShavedIce;
