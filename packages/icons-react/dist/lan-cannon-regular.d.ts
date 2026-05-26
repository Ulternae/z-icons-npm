import React from 'react';

export interface LanCannonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannonRegular: React.FC<LanCannonRegularProps>;
export default LanCannonRegular;
