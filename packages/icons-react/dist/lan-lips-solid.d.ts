import React from 'react';

export interface LanLipsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLipsSolid: React.FC<LanLipsSolidProps>;
export default LanLipsSolid;
