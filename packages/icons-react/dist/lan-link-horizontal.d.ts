import React from 'react';

export interface LanLinkHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkHorizontal: React.FC<LanLinkHorizontalProps>;
export default LanLinkHorizontal;
