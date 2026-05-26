import React from 'react';

export interface LanOwlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOwlSolid: React.FC<LanOwlSolidProps>;
export default LanOwlSolid;
