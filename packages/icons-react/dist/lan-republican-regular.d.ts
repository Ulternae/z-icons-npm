import React from 'react';

export interface LanRepublicanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepublicanRegular: React.FC<LanRepublicanRegularProps>;
export default LanRepublicanRegular;
