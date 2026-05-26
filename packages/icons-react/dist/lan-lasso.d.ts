import React from 'react';

export interface LanLassoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLasso: React.FC<LanLassoProps>;
export default LanLasso;
