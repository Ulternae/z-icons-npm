import React from 'react';

export interface LanHandsBoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsBoundSolid: React.FC<LanHandsBoundSolidProps>;
export default LanHandsBoundSolid;
