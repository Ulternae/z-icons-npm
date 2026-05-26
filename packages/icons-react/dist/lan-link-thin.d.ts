import React from 'react';

export interface LanLinkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkThin: React.FC<LanLinkThinProps>;
export default LanLinkThin;
