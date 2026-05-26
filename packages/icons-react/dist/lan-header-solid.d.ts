import React from 'react';

export interface LanHeaderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeaderSolid: React.FC<LanHeaderSolidProps>;
export default LanHeaderSolid;
