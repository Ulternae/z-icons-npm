import React from 'react';

export interface LanBorderAllProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderAll: React.FC<LanBorderAllProps>;
export default LanBorderAll;
