import React from 'react';

export interface LanGuitarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarsRegular: React.FC<LanGuitarsRegularProps>;
export default LanGuitarsRegular;
