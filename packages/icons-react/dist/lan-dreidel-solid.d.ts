import React from 'react';

export interface LanDreidelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDreidelSolid: React.FC<LanDreidelSolidProps>;
export default LanDreidelSolid;
