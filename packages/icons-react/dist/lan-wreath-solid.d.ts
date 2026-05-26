import React from 'react';

export interface LanWreathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathSolid: React.FC<LanWreathSolidProps>;
export default LanWreathSolid;
