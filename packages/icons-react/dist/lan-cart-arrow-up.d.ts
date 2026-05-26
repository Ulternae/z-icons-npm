import React from 'react';

export interface LanCartArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartArrowUp: React.FC<LanCartArrowUpProps>;
export default LanCartArrowUp;
