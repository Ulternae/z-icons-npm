import React from 'react';

export interface LanFaceFearfulSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFearfulSolid: React.FC<LanFaceFearfulSolidProps>;
export default LanFaceFearfulSolid;
