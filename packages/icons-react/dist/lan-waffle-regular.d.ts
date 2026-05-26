import React from 'react';

export interface LanWaffleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaffleRegular: React.FC<LanWaffleRegularProps>;
export default LanWaffleRegular;
