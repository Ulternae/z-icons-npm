import React from 'react';

export interface LanCircleTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTSolid: React.FC<LanCircleTSolidProps>;
export default LanCircleTSolid;
