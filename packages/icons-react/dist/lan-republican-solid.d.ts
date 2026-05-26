import React from 'react';

export interface LanRepublicanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepublicanSolid: React.FC<LanRepublicanSolidProps>;
export default LanRepublicanSolid;
