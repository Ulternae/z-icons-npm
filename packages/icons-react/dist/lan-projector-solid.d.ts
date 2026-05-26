import React from 'react';

export interface LanProjectorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanProjectorSolid: React.FC<LanProjectorSolidProps>;
export default LanProjectorSolid;
