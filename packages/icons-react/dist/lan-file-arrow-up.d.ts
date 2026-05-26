import React from 'react';

export interface LanFileArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileArrowUp: React.FC<LanFileArrowUpProps>;
export default LanFileArrowUp;
