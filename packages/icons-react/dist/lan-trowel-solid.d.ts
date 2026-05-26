import React from 'react';

export interface LanTrowelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelSolid: React.FC<LanTrowelSolidProps>;
export default LanTrowelSolid;
