import React from 'react';

export interface LanBoxArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxArrowUp: React.FC<LanBoxArrowUpProps>;
export default LanBoxArrowUp;
