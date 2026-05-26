import React from 'react';

export interface LanBorderNoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderNone: React.FC<LanBorderNoneProps>;
export default LanBorderNone;
