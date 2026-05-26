import React from 'react';

export interface LanVialThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialThin: React.FC<LanVialThinProps>;
export default LanVialThin;
