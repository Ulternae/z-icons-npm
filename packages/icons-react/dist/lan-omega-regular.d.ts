import React from 'react';

export interface LanOmegaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOmegaRegular: React.FC<LanOmegaRegularProps>;
export default LanOmegaRegular;
