import React from 'react';

export interface LanHandPointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointerThin: React.FC<LanHandPointerThinProps>;
export default LanHandPointerThin;
