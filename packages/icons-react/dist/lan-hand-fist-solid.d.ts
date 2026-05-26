import React from 'react';

export interface LanHandFistSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandFistSolid: React.FC<LanHandFistSolidProps>;
export default LanHandFistSolid;
