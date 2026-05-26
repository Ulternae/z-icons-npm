import React from 'react';

export interface LanMittenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMittenRegular: React.FC<LanMittenRegularProps>;
export default LanMittenRegular;
