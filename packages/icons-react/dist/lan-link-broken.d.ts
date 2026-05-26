import React from 'react';

export interface LanLinkBrokenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkBroken: React.FC<LanLinkBrokenProps>;
export default LanLinkBroken;
