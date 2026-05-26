import React from 'react';

export interface LanHatWinterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWinterSolid: React.FC<LanHatWinterSolidProps>;
export default LanHatWinterSolid;
