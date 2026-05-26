import React from 'react';

export interface LanFileUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileUserRegular: React.FC<LanFileUserRegularProps>;
export default LanFileUserRegular;
