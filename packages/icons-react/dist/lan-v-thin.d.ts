import React from 'react';

export interface LanVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVThin: React.FC<LanVThinProps>;
export default LanVThin;
