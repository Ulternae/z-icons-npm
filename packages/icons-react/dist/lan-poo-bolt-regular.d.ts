import React from 'react';

export interface LanPooBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooBoltRegular: React.FC<LanPooBoltRegularProps>;
export default LanPooBoltRegular;
