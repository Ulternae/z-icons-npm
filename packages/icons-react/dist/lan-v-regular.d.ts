import React from 'react';

export interface LanVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVRegular: React.FC<LanVRegularProps>;
export default LanVRegular;
