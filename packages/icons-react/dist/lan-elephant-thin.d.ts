import React from 'react';

export interface LanElephantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElephantThin: React.FC<LanElephantThinProps>;
export default LanElephantThin;
