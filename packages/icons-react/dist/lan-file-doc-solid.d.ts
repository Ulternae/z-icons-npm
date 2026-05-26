import React from 'react';

export interface LanFileDocSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDocSolid: React.FC<LanFileDocSolidProps>;
export default LanFileDocSolid;
