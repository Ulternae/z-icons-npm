import React from 'react';

export interface LanPipeCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCircleCheckRegular: React.FC<LanPipeCircleCheckRegularProps>;
export default LanPipeCircleCheckRegular;
