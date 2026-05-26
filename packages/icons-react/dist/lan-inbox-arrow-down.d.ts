import React from 'react';

export interface LanInboxArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxArrowDown: React.FC<LanInboxArrowDownProps>;
export default LanInboxArrowDown;
