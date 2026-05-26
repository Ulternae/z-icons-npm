import React from 'react';

export interface LanZzzRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZzzRegular: React.FC<LanZzzRegularProps>;
export default LanZzzRegular;
