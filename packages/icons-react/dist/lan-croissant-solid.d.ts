import React from 'react';

export interface LanCroissantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCroissantSolid: React.FC<LanCroissantSolidProps>;
export default LanCroissantSolid;
