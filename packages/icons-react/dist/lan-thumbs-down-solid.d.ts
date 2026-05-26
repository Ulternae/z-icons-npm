import React from 'react';

export interface LanThumbsDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsDownSolid: React.FC<LanThumbsDownSolidProps>;
export default LanThumbsDownSolid;
