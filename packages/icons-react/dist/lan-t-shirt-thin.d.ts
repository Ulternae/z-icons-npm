import React from 'react';

export interface LanTShirtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTShirtThin: React.FC<LanTShirtThinProps>;
export default LanTShirtThin;
