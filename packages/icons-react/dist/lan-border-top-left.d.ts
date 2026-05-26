import React from 'react';

export interface LanBorderTopLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopLeft: React.FC<LanBorderTopLeftProps>;
export default LanBorderTopLeft;
