import React from 'react';

export interface LanCircleBitcoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBitcoinSolid: React.FC<LanCircleBitcoinSolidProps>;
export default LanCircleBitcoinSolid;
