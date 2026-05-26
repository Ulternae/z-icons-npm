import React from 'react';

export interface LanImageStackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageStackRegular: React.FC<LanImageStackRegularProps>;
export default LanImageStackRegular;
