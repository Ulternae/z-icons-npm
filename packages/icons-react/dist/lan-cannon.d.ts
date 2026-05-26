import React from 'react';

export interface LanCannonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannon: React.FC<LanCannonProps>;
export default LanCannon;
