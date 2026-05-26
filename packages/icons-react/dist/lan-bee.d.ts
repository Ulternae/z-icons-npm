import React from 'react';

export interface LanBeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBee: React.FC<LanBeeProps>;
export default LanBee;
