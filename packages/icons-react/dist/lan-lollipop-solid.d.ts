import React from 'react';

export interface LanLollipopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLollipopSolid: React.FC<LanLollipopSolidProps>;
export default LanLollipopSolid;
