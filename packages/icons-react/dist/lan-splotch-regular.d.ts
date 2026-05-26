import React from 'react';

export interface LanSplotchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplotchRegular: React.FC<LanSplotchRegularProps>;
export default LanSplotchRegular;
