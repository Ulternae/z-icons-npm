import React from 'react';

export interface LanEuroSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEuroSignSolid: React.FC<LanEuroSignSolidProps>;
export default LanEuroSignSolid;
