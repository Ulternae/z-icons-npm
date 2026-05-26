import React from 'react';

export interface LanLinkHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkHorizontalThin: React.FC<LanLinkHorizontalThinProps>;
export default LanLinkHorizontalThin;
