import React from 'react';

export interface LanVolcanoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolcanoSolid: React.FC<LanVolcanoSolidProps>;
export default LanVolcanoSolid;
