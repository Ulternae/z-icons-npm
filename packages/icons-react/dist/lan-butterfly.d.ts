import React from 'react';

export interface LanButterflyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanButterfly: React.FC<LanButterflyProps>;
export default LanButterfly;
