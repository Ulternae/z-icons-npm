import React from 'react';

export interface LanLinkBrokenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkBrokenThin: React.FC<LanLinkBrokenThinProps>;
export default LanLinkBrokenThin;
