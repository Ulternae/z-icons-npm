import React from 'react';

export interface LanArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUp: React.FC<LanArrowUpProps>;
export default LanArrowUp;
