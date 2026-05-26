import React from 'react';

export interface LanQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQSolid: React.FC<LanQSolidProps>;
export default LanQSolid;
