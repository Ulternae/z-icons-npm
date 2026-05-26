import React from 'react';

export interface LanAsteriskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAsteriskRegular: React.FC<LanAsteriskRegularProps>;
export default LanAsteriskRegular;
