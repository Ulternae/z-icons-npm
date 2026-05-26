import React from 'react';

export interface LanThumbsUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsUpSolid: React.FC<LanThumbsUpSolidProps>;
export default LanThumbsUpSolid;
