import React from 'react';

export interface LanOctagonCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonCheckSolid: React.FC<LanOctagonCheckSolidProps>;
export default LanOctagonCheckSolid;
