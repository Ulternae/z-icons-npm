import React from 'react';

export interface LanVideoPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoPlusRegular: React.FC<LanVideoPlusRegularProps>;
export default LanVideoPlusRegular;
