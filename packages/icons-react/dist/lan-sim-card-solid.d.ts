import React from 'react';

export interface LanSimCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCardSolid: React.FC<LanSimCardSolidProps>;
export default LanSimCardSolid;
