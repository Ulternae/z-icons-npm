import React from 'react';

export interface LanDollyEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyEmpty: React.FC<LanDollyEmptyProps>;
export default LanDollyEmpty;
