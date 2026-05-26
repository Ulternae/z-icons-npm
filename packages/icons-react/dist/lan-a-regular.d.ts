import React from 'react';

export interface LanARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanARegular: React.FC<LanARegularProps>;
export default LanARegular;
