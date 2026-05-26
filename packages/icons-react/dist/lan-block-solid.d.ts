import React from 'react';

export interface LanBlockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockSolid: React.FC<LanBlockSolidProps>;
export default LanBlockSolid;
