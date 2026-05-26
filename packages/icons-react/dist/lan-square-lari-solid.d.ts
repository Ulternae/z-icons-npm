import React from 'react';

export interface LanSquareLariSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLariSolid: React.FC<LanSquareLariSolidProps>;
export default LanSquareLariSolid;
