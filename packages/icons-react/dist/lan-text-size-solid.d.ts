import React from 'react';

export interface LanTextSizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSizeSolid: React.FC<LanTextSizeSolidProps>;
export default LanTextSizeSolid;
