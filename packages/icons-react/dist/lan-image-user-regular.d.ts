import React from 'react';

export interface LanImageUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageUserRegular: React.FC<LanImageUserRegularProps>;
export default LanImageUserRegular;
