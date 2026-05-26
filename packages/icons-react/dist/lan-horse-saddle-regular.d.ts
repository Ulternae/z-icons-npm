import React from 'react';

export interface LanHorseSaddleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseSaddleRegular: React.FC<LanHorseSaddleRegularProps>;
export default LanHorseSaddleRegular;
