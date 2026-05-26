import React from 'react';

export interface LanFaceMehSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehSolid: React.FC<LanFaceMehSolidProps>;
export default LanFaceMehSolid;
