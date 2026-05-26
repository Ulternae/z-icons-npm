import React from 'react';

export interface LanBurritoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurrito: React.FC<LanBurritoProps>;
export default LanBurrito;
