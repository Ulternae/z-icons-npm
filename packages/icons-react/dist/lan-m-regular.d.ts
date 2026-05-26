import React from 'react';

export interface LanMRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMRegular: React.FC<LanMRegularProps>;
export default LanMRegular;
