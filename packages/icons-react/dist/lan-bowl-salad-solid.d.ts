import React from 'react';

export interface LanBowlSaladSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSaladSolid: React.FC<LanBowlSaladSolidProps>;
export default LanBowlSaladSolid;
