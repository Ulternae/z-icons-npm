import React from 'react';

export interface LanFileDocRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDocRegular: React.FC<LanFileDocRegularProps>;
export default LanFileDocRegular;
