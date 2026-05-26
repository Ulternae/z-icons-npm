import React from 'react';

export interface LanWalkerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkerSolid: React.FC<LanWalkerSolidProps>;
export default LanWalkerSolid;
