import React from 'react';

export interface LanBadgeDollarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeDollarRegular: React.FC<LanBadgeDollarRegularProps>;
export default LanBadgeDollarRegular;
