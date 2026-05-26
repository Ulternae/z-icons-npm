import React from 'react';

export interface LanSeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatRegular: React.FC<LanSeatRegularProps>;
export default LanSeatRegular;
