import React from 'react';

export interface LanSquareTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTSolid: React.FC<LanSquareTSolidProps>;
export default LanSquareTSolid;
