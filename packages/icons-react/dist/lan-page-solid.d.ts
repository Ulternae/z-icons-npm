import React from 'react';

export interface LanPageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPageSolid: React.FC<LanPageSolidProps>;
export default LanPageSolid;
