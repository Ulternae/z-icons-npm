import React from 'react';

export interface LanInboxArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxArrowUp: React.FC<LanInboxArrowUpProps>;
export default LanInboxArrowUp;
