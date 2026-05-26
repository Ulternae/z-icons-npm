import React from 'react';

export interface LanElephantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElephantSolid: React.FC<LanElephantSolidProps>;
export default LanElephantSolid;
