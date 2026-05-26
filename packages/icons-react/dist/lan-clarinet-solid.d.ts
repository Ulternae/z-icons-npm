import React from 'react';

export interface LanClarinetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClarinetSolid: React.FC<LanClarinetSolidProps>;
export default LanClarinetSolid;
