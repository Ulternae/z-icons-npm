import React from 'react';

export interface LanServerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanServerThin: React.FC<LanServerThinProps>;
export default LanServerThin;
