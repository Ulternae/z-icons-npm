import React from 'react';

export interface LanBookArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookArrowUp: React.FC<LanBookArrowUpProps>;
export default LanBookArrowUp;
