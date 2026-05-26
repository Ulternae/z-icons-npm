import React from 'react';

export interface LanCircleLitecoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLitecoin: React.FC<LanCircleLitecoinProps>;
export default LanCircleLitecoin;
