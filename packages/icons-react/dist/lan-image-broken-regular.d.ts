import React from 'react';

export interface LanImageBrokenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageBrokenRegular: React.FC<LanImageBrokenRegularProps>;
export default LanImageBrokenRegular;
