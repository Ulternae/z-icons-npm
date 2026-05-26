import React from 'react';

export interface LanEscalatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEscalatorSolid: React.FC<LanEscalatorSolidProps>;
export default LanEscalatorSolid;
