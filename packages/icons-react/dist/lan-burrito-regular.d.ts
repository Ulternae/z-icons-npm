import React from 'react';

export interface LanBurritoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurritoRegular: React.FC<LanBurritoRegularProps>;
export default LanBurritoRegular;
