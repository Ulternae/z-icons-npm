import React from 'react';

export interface LanDinosaurSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDinosaurSolid: React.FC<LanDinosaurSolidProps>;
export default LanDinosaurSolid;
