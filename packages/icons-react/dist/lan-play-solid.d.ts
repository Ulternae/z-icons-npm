import React from 'react';

export interface LanPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaySolid: React.FC<LanPlaySolidProps>;
export default LanPlaySolid;
