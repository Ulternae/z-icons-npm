import React from 'react';

export interface LanCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBoltSolid: React.FC<LanCircleBoltSolidProps>;
export default LanCircleBoltSolid;
