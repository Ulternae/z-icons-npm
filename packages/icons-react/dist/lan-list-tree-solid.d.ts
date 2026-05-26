import React from 'react';

export interface LanListTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTreeSolid: React.FC<LanListTreeSolidProps>;
export default LanListTreeSolid;
