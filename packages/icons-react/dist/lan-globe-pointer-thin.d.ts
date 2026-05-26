import React from 'react';

export interface LanGlobePointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobePointerThin: React.FC<LanGlobePointerThinProps>;
export default LanGlobePointerThin;
