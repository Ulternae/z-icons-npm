import React from 'react';

export interface LanTally1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally1Solid: React.FC<LanTally1SolidProps>;
export default LanTally1Solid;
