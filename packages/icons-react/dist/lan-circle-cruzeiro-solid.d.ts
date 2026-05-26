import React from 'react';

export interface LanCircleCruzeiroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCruzeiroSolid: React.FC<LanCircleCruzeiroSolidProps>;
export default LanCircleCruzeiroSolid;
