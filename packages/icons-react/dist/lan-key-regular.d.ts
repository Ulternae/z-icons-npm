import React from 'react';

export interface LanKeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyRegular: React.FC<LanKeyRegularProps>;
export default LanKeyRegular;
