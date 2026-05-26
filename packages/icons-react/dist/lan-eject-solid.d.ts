import React from 'react';

export interface LanEjectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEjectSolid: React.FC<LanEjectSolidProps>;
export default LanEjectSolid;
