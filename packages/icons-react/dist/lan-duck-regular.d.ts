import React from 'react';

export interface LanDuckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDuckRegular: React.FC<LanDuckRegularProps>;
export default LanDuckRegular;
