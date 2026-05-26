import React from 'react';

export interface LanGrid2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2Regular: React.FC<LanGrid2RegularProps>;
export default LanGrid2Regular;
