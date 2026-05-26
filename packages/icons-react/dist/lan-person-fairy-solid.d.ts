import React from 'react';

export interface LanPersonFairySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFairySolid: React.FC<LanPersonFairySolidProps>;
export default LanPersonFairySolid;
