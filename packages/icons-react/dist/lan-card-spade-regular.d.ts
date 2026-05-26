import React from 'react';

export interface LanCardSpadeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardSpadeRegular: React.FC<LanCardSpadeRegularProps>;
export default LanCardSpadeRegular;
