import React from 'react';

export interface LanFaceDottedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDottedSolid: React.FC<LanFaceDottedSolidProps>;
export default LanFaceDottedSolid;
