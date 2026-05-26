import React from 'react';

export interface LanHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHRegular: React.FC<LanHRegularProps>;
export default LanHRegular;
