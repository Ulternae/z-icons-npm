import React from 'react';

export interface LanBorderTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTop: React.FC<LanBorderTopProps>;
export default LanBorderTop;
