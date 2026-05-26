import React from 'react';

export interface LanGrid4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid4Regular: React.FC<LanGrid4RegularProps>;
export default LanGrid4Regular;
