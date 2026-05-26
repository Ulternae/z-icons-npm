import React from 'react';

export interface LanManatSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManatSignSolid: React.FC<LanManatSignSolidProps>;
export default LanManatSignSolid;
