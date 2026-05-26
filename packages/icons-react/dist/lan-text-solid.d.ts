import React from 'react';

export interface LanTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSolid: React.FC<LanTextSolidProps>;
export default LanTextSolid;
