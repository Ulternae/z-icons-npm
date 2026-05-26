import React from 'react';

export interface LanSquareTugrikSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTugrikSolid: React.FC<LanSquareTugrikSolidProps>;
export default LanSquareTugrikSolid;
