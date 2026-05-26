import React from 'react';

export interface LanGrid3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid3Regular: React.FC<LanGrid3RegularProps>;
export default LanGrid3Regular;
