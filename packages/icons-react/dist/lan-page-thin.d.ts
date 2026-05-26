import React from 'react';

export interface LanPageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPageThin: React.FC<LanPageThinProps>;
export default LanPageThin;
