import React from 'react';

export interface LanCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckSolid: React.FC<LanCheckSolidProps>;
export default LanCheckSolid;
