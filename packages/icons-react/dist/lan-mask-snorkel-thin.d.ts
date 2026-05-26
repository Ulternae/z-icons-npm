import React from 'react';

export interface LanMaskSnorkelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskSnorkelThin: React.FC<LanMaskSnorkelThinProps>;
export default LanMaskSnorkelThin;
