import React from 'react';

export interface LanInputTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputTextSolid: React.FC<LanInputTextSolidProps>;
export default LanInputTextSolid;
