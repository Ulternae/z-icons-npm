import React from 'react';

export interface LanDialOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialOffSolid: React.FC<LanDialOffSolidProps>;
export default LanDialOffSolid;
